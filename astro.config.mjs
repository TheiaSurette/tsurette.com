// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://tsurette.com',
  integrations: [tailwind({
    applyBaseStyles: false
  })]
});