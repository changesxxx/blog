import { defineCollection, z } from 'astro:content'

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
})

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    name: z.string(),
  }),
})

export const collections = { docs, books }
