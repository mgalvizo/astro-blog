// @ts-check
import { defineConfig } from "astro/config";

// import preact from "@astrojs/preact";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",

  integrations: [
    // preact(),
    react(),
  ],

  adapter: netlify(),
});