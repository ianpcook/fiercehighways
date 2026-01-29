import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string().optional(),
    industry: z.string(),
    services: z.array(z.string()),
    featured: z.boolean().default(false),
    publishedDate: z.coerce.date(),
    coverImage: z.string().optional(),
    outcomes: z.array(z.string()).optional(),
  }),
});

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['article', 'podcast', 'talk', 'hosted']),
    publishedDate: z.coerce.date(),
    externalUrl: z.string().url().optional(),
    links: z.array(z.object({
      platform: z.string(),
      url: z.string().url(),
    })).optional(),
    venue: z.string().optional(),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  work: workCollection,
  writing: writingCollection,
};
