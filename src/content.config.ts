import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    descricao: z.string(),
    resumo: z.string(),
    categoria: z.enum(['Custos', 'Carta de Crédito', 'Contemplação', 'Guias', 'Tributos']),
    data: z.coerce.date(),
    leitura: z.number(),
    imagem: z.string().default('/images/finance.webp'),
  }),
});

export const collections = { blog };
