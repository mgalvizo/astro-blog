// @ts-check
import { defineConfig } from "astro/config";

// import preact from "@astrojs/preact";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",

  integrations: [
    // preact(),
    react(),
  ],

  // adapter: netlify(),
  adapter: node({
    mode: "standalone",
  }),

  // output: "server",
});
