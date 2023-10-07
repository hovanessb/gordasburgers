import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import robots from "astro-robots";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://facilitiesfusion.com",
  integrations: [tailwind(), partytown(), robots(), sitemap(), react()]
});