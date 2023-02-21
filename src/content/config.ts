import { z, defineCollection } from "astro:content";

const articleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z
      .string()
      .max(
        150,
        "For best results, please keep the description under 160 characters"
      ),
    datePublished: z.string(),
    dateUpdated: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z
      .string()
      .max(
        150,
        "For best results, please keep the description under 160 characters"
      ),
    datePublished: z.string(),
    dateUpdated: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  articles: articleCollection,
  blog: blogCollection,
};
