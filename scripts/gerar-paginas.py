#!/usr/bin/env python3
"""Gera src/data/paginas.json e src/data/menu.json a partir da planilha de arquitetura.

Uso: python3 scripts/gerar-paginas.py caminho/para/Turbo_Consorcios_Mapa_de_Hubs_e_Arquitetura.xlsx
Só usa a biblioteca padrão. Lê os campos de SEO da planilha (title, meta, H1); não gera texto de conteúdo.
"""
import json, re, sys, zipfile, xml.etree.ElementTree as ET
from pathlib import Path

NS = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
REL = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id'
RAIZ = Path(__file__).resolve().parent.parent


def ler_planilha(caminho):
    z = zipfile.ZipFile(caminho)
    ss = [''.join(t.text or '' for t in si.iter('{%s}t' % NS['m']))
          for si in ET.fromstring(z.read('xl/sharedStrings.xml'))]
    rels = {r.get('Id'): r.get('Target') for r in ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))}
    abas = {}
    for sh in ET.fromstring(z.read('xl/workbook.xml')).find('m:sheets', NS):
        alvo = rels[sh.get(REL)].lstrip('/')
        alvo = alvo if alvo.startswith('xl/') else 'xl/' + alvo
        linhas = []
        for row in ET.fromstring(z.read(alvo)).iter('{%s}row' % NS['m']):
            vals = {}
            for c in row.findall('m:c', NS):
                v, inl = c.find('m:v', NS), c.find('m:is', NS)
                if c.get('t') == 's' and v is not None:
                    val = ss[int(v.text)]
                elif inl is not None:
                    val = ''.join(x.text or '' for x in inl.iter('{%s}t' % NS['m']))
                elif v is not None:
                    val = v.text
                else:
                    continue
                letras = re.match(r'[A-Z]+', c.get('r')).group()
                idx = 0
                for ch in letras:
                    idx = idx * 26 + ord(ch) - 64
                vals[idx - 1] = val.strip()
            if vals:
                linhas.append([vals.get(i, '') for i in range(max(vals) + 1)])
        abas[sh.get('name')] = linhas
    return abas


def registros(linhas):
    cab = linhas[0]
    return [dict(zip(cab, l + [''] * (len(cab) - len(l)))) for l in linhas[1:] if any(l)]


def capitalizar(s):
    return s[:1].upper() + s[1:]


def main(xlsx):
    abas = ler_planilha(xlsx)
    paginas = {}

    def add(url, **campos):
        if not re.fullmatch(r'/([a-z0-9-]+/)*', url or ''):
            return
        if url in paginas:
            print('URL duplicada ignorada:', url)
            return
        paginas[url] = {'url': url, **campos}

    def lista(v):
        return [x.strip() for x in (v or '').split(';') if x.strip()]

    def conteudo(r):
        # Campos da planilha que alimentam o conteúdo mínimo da página
        return {k: v for k, v in {
            'persona': r.get('Persona principal', ''),
            'gancho': r.get('Gancho da dor', ''),
            'frase': r.get('Frase na língua do cliente', ''),
            'intencao': r.get('Intenção por trás da busca', ''),
            'objecao': r.get('Objeção principal', ''),
            'medo': r.get('Objeção ou medo que derruba', ''),
            'faq': lista(r.get('Perguntas do FAQ da página')),
            'cta': r.get('CTA principal', ''),
            'palavra': r.get('Palavra-chave principal') or r.get('Palavra-chave pilar', ''),
            'hubRelacionado': r.get('Hub relacionado', ''),
            'marca': r.get('Marca') or r.get('Variável', ''),
            'tipoConsorcio': r.get('Tipo de consórcio', ''),
            'segmentos': lista(r.get('Segmentos prováveis')),
            'reputacao': lista(r.get('Onde checar reputação')),
            'provas': lista(r.get('Provas obrigatórias na página')),
            'subhubs': lista(r.get('Sub-hubs, seções da página pilar')),
        }.items() if v}

    # Nível 0 e 1 (aba Arquitetura) e dados dos hubs
    hubs = {h['URL pilar']: h for h in registros(abas['Hubs']) if h.get('URL pilar')}
    for a in registros(abas['Arquitetura']):
        if not a['Nível'].startswith(('Nível 0', 'Nível 1')):
            continue
        h = hubs.get(a['URL'], {})
        add(a['URL'], pai=a['Página pai'] or None, nome=a['Página'], h1=h.get('H1 sugerido') or a['Página'],
            title=h.get('Title SEO') or f"{a['Página']} | Turbo Consórcios", description=h.get('Meta description', ''),
            tipo=h.get('Tipo de página') or ('Home' if a['URL'] == '/' else 'Página institucional'),
            prioridade='A', indexar=True, menu=a['Posição no menu'], **conteudo(h))

    def add_linha(r, tipo_col='Tipo de página', indexar=True, extra=None):
        extra = {**conteudo(r), **(extra or {})}
        add(r['URL sugerida'], pai=r.get('Página pai') or '/' + r['URL sugerida'].strip('/').rsplit('/', 1)[0] + '/', nome=capitalizar(r['Palavra-chave principal']),
            h1=r.get('H1 sugerido') or capitalizar(r['Palavra-chave principal']), title=r.get('Title SEO', ''),
            description=r.get('Meta description', ''), tipo=r.get(tipo_col, ''), prioridade=r.get('Prioridade', ''),
            indexar=indexar, **(extra or {}))

    for r in registros(abas['Mapa de Serviços']):
        add_linha(r, extra={'hub': r['Hub'], 'secao': r['Sub-hub']})
    for r in registros(abas['Conteúdo de Apoio']):
        add_linha(r, extra={'hub': r['Hub'], 'secao': r['Sub-hub']})
    # Marcas: só indexa depois que a representação for definida na planilha
    for r in registros(abas['Mapa de Marcas']):
        rep = r['Turbo representa a marca?']
        add_linha(r, tipo_col='Tipo de página a criar', indexar=rep in ('Sim', 'Não', 'Não se aplica'),
                  extra={'secao': r['Tipo de empresa']})
    # Camadas programáticas: noindex até cumprir a condição de publicação
    for r in registros(abas['Camadas Programáticas']):
        add_linha(r, tipo_col='Tipo de página a criar', indexar=False,
                  extra={'secao': r['Camada'], 'condicao': r['Condição para publicar']})

    orfas = [p['url'] for p in paginas.values() if p['pai'] and p['pai'] not in paginas]
    if orfas:
        print('Páginas com pai inexistente:', orfas[:10])

    # Menu: resolve os rótulos da aba Menu para URLs pelo nome/palavra-chave
    por_nome = {}
    for p in paginas.values():
        for chave in (p['nome'], p['h1']):
            por_nome.setdefault(chave.lower(), p['url'])
    atalhos = {'bens': '/consorcio-de-bens/', 'sobre a turbo': '/sobre/', 'depoimentos': '/depoimentos/',
               'consulta de administradoras no banco central': por_nome.get('como consultar administradora no banco central')}
    nao_achados = []

    def link(rotulo):
        url = por_nome.get(rotulo.lower()) or atalhos.get(rotulo.lower())
        if not url:
            nao_achados.append(rotulo)
        return {'rotulo': rotulo, 'url': url}

    menu = {'topo': [], 'principal': [], 'rodape': [], 'destaque': None}
    for m in registros(abas['Menu']):
        area, item, url = m['Área'], m['Item do menu'], m['URL de destino']
        itens = [x.strip() for x in m['Links exibidos'].split(';') if x.strip()]
        if area == 'Barra superior' and url.startswith('/'):
            menu['topo'].append({'rotulo': item, 'url': url})
        elif area == 'Menu principal' and m['Formato'] == 'Botão destaque':
            menu['destaque'] = {'rotulo': item, 'url': url}
        elif area == 'Menu principal':
            rotulo = re.sub(r'^\d+\.\s*', '', item)
            grupo = next((g for g in menu['principal'] if g['rotulo'] == rotulo), None)
            if not grupo:
                grupo = {'rotulo': rotulo, 'url': url, 'colunas': []}
                menu['principal'].append(grupo)
            grupo['colunas'].append({'titulo': m['Coluna do mega menu'], 'url': url,
                                     'links': [l for l in map(link, itens) if l['url']]})
        elif area == 'Rodapé':
            menu['rodape'].append({'titulo': item, 'url': url or None,
                                   'links': [l for l in map(link, itens) if l['url']]})
    # "Como funciona" aponta para /como-funciona/ (página institucional)
    for g in menu['principal']:
        if g['rotulo'] == 'Como funciona':
            g['url'] = '/como-funciona/'

    dados = RAIZ / 'src' / 'data'
    lista = sorted(paginas.values(), key=lambda p: p['url'])
    (dados / 'paginas.json').write_text(json.dumps(lista, ensure_ascii=False, indent=1))
    (dados / 'menu.json').write_text(json.dumps(menu, ensure_ascii=False, indent=1))
    print(f'{len(lista)} páginas ({sum(p["indexar"] for p in lista)} indexáveis).')
    if nao_achados:
        print('Itens de menu sem página correspondente:', sorted(set(nao_achados)))


if __name__ == '__main__':
    main(sys.argv[1])
