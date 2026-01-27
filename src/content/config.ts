import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    description: z.string(),
    img: z.string().optional(),
    projecturl: z.string().url(),
  }),
});

export const collections = { projects };
