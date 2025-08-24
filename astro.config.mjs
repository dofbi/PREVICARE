import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { env } from 'process';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [react()],

  // experimental: {
  //   csp: true
  // },
  vite: {
    css: {
      codeSplit: true,
    },
    server: {
      allowedHosts: [(env.REPLIT_DOMAINS || '').split(',')[0]],
      host: '0.0.0.0',
      port: 4321,
    },
  },

  output: 'server',
  adapter: netlify(),
});