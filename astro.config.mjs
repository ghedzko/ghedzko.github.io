import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ghedzko.github.io",
  // base: "/ghedzko",
  integrations: [tailwind()],
});
