// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Enable content collections
  content: {
    collections: {
      posts: {
        type: 'content',
        schema: {
          title: 'string',
          pubDate: 'date',
          description: 'string',
          author: 'string',
          image: {
            url: 'string',
            alt: 'string',
          },
          tags: 'array',
        },
      },
    },
  },
});
