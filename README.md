# Turbo Consórcios

Site institucional e de captação da Turbo Consórcios, construído em **Astro 7 + Tailwind CSS 4**.
Gera 193 páginas estáticas.

## Comandos

```bash
npm install       # instala dependências
npm run dev       # servidor local (http://localhost:4321)
npm run build     # gera o site estático em ./dist
npm run preview   # serve o ./dist localmente
```

## Estrutura

```
src/
├── data/                 # fonte de verdade do conteúdo
│   ├── site.ts           # marca, telefone, e-mail, redes sociais
│   ├── consorcios.ts     # 26 modalidades de consórcio
│   ├── estados.ts        # 27 estados e as cidades atendidas
│   ├── depoimentos.ts    # depoimentos de clientes
│   └── faq.ts            # perguntas frequentes
├── content/blog/         # 33 artigos em Markdown
├── components/           # Header, Footer, Icon, PageHero, FaqLista…
├── layouts/BaseLayout.astro
├── pages/
│   ├── index.astro                       # home (12 seções)
│   ├── [consorcio].astro                 # 26 páginas de modalidade
│   ├── consorcio-em-[estado]/            # 27 estados + 100 cidades
│   ├── blog/                             # índice + 33 posts
│   ├── sobre.astro  contato.astro
│   ├── localidades.astro  mapa-do-site.astro  404.astro
└── styles/global.css     # design tokens e utilitários
```

## Design system

Definido em `src/styles/global.css` (bloco `@theme`):

- **Primária (navy):** `primary-50` `#e6eef5` → `primary-950` `#0a1929`
- **Acento (laranja):** `accent` `#ea580c`, `accent-600` `#c2410c`, `accent-700` `#9a3412`
- **Tipografia:** Poppins (títulos) e Inter (corpo), via Google Fonts
- **Utilitários:** `.btn-primary`, `.btn-outline`, `.section-label`, `.section-label-light`

## Onde editar o quê

| Quero mudar | Arquivo |
| --- | --- |
| Telefone, e-mail, WhatsApp, redes sociais | `src/data/site.ts` |
| Adicionar modalidade de consórcio | `src/data/consorcios.ts` |
| Adicionar cidade ou estado | `src/data/estados.ts` |
| Adicionar artigo no blog | novo `.md` em `src/content/blog/` |
| Cores e fontes | `src/styles/global.css` |

## Pendências antes de publicar

- [ ] Registrar o domínio `turboconsorcios.com`
- [ ] Substituir telefone, WhatsApp e e-mail em `src/data/site.ts` (hoje são placeholders)
- [ ] Confirmar os perfis de redes sociais em `src/data/site.ts`
- [ ] Revisar números institucionais (37 administradoras, 50 mil clientes, desde 2010)
- [ ] Substituir as imagens de `public/images/` por fotos próprias ou com licença verificada
- [ ] Revisar os depoimentos em `src/data/depoimentos.ts`
