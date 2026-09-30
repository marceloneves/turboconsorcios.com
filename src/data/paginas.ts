/*
 * Árvore de páginas do site. Os dados vêm de paginas.json, gerado a partir da planilha
 * "Mapa de Hubs e Arquitetura" por scripts/gerar-paginas.py. Não edite o JSON à mão.
 */
import lista from './paginas.json';

export type Pagina = {
  url: string;
  pai: string | null;
  nome: string;
  h1: string;
  title: string;
  description: string;
  tipo: string;
  prioridade: string;
  /* false = página criada, mas fora do índice do Google e do sitemap até cumprir a condição da planilha */
  indexar: boolean;
  hub?: string;
  secao?: string;
  condicao?: string;
  menu?: string;
};

export const paginas = lista as Pagina[];
export const paginaPorUrl = new Map(paginas.map((p) => [p.url, p]));

const filhosPorPai = new Map<string, Pagina[]>();
for (const p of paginas) {
  if (!p.pai) continue;
  filhosPorPai.set(p.pai, [...(filhosPorPai.get(p.pai) ?? []), p]);
}

export const filhos = (url: string) => filhosPorPai.get(url) ?? [];

/* Home > ... > página atual */
export function trilha(url: string): Pagina[] {
  const caminho: Pagina[] = [];
  let atual = paginaPorUrl.get(url);
  while (atual) {
    caminho.unshift(atual);
    atual = atual.pai ? paginaPorUrl.get(atual.pai) : undefined;
  }
  return caminho;
}

export const urlsSemIndice = new Set(paginas.filter((p) => !p.indexar).map((p) => p.url));
