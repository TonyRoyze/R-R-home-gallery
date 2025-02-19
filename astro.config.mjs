// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-domain.com', // Replace with your actual domain
  vite: {
    plugins: [tailwindcss()]
  },

  output: 'static',
});