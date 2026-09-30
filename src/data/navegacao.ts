/*
 * Menus do site, vindos da aba "Menu" da planilha (menu.json, gerado por scripts/gerar-paginas.py).
 * Seguindo as observações da planilha, links para páginas ainda sem índice (marcas não confirmadas,
 * camadas programáticas) ficam fora do menu até serem liberados.
 */
import menu from './menu.json';
import { paginaPorUrl } from './paginas';

type Link = { rotulo: string; url: string | null };

const visivel = (l: Link): l is { rotulo: string; url: string } => !!l.url && paginaPorUrl.get(l.url)?.indexar !== false;

export const menuTopo = menu.topo;
export const menuDestaque = menu.destaque;

export const menuPrincipal = menu.principal.map((g) => ({
  rotulo: g.rotulo,
  url: g.url,
  colunas: g.colunas
    .map((c) => ({ titulo: c.titulo, url: c.url, links: c.links.filter(visivel) }))
    .filter((c) => c.links.length > 0),
}));

export const menuRodape = menu.rodape
  .map((c) => ({ titulo: c.titulo, links: c.links.filter(visivel) }))
  .filter((c) => c.links.length > 0);
