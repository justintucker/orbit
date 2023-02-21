import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

export default defineConfig({
  integrations: [
    sitemap(),
    compress({
      css: true,
      html: true,
      img: false,
      js: true,
      svg: false,
    }),
  ],
});
