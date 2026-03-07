// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  //site: 'https://ftessadro.github.io',
  site: 'https://www.innovadentalstudio.com.ar',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});