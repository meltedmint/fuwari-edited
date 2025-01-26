import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().optional().default('Melted_Mint'),
    published: z.date(),
    updated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional().default(''),
    image: z.string().optional().default(''),
    tags: z.preprocess((val) =>
      typeof val === 'string' ? [val] : val
    , z.array(z.string())),
    category: z.string().optional().default(''),
    lang: z.string().optional().default(''),

    /* For internal use */
    prevTitle: z.string().default(''),
    prevSlug: z.string().default(''),
    nextTitle: z.string().default(''),
    nextSlug: z.string().default(''),
  }),
})
const novelCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().optional().default('Melted_Mint'),
    published: z.date(),
    updated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional().default(''),
    image: z.string().optional().default(''),
    tags: z.preprocess((val) =>
      typeof val === 'string' ? [val] : val
    , z.array(z.string())),
    category: z.string().optional().default(''),
    lang: z.string().optional().default(''),

    /* For internal use */
    prevTitle: z.string().default(''),
    prevSlug: z.string().default(''),
    nextTitle: z.string().default(''),
    nextSlug: z.string().default(''),
  }),
})
const spinoffCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string().optional().default('Melted_Mint'),
    published: z.date(),
    updated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional().default(''),
    image: z.string().optional().default(''),
    tags: z.preprocess((val) =>
      typeof val === 'string' ? [val] : val
    , z.array(z.string())),
    category: z.string().optional().default(''),
    lang: z.string().optional().default(''),

    /* For internal use */
    prevTitle: z.string().default(''),
    prevSlug: z.string().default(''),
    nextTitle: z.string().default(''),
    nextSlug: z.string().default(''),
  }),
})
const specCollection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
  })
})
export const collections = {
  posts: postsCollection,
  novel: novelCollection,
  spinoff: spinoffCollection,
  spec: specCollection,
}