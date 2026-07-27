// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://draanalaurabatalles.com.ar',
  trailingSlash: 'never',
  // `file` emite `tratamientos.html` en vez de `tratamientos/index.html`, así
  // Pages sirve la URL sin barra final directamente. Con el formato `directory`
  // por defecto cada URL del sitemap se comía un 308 hacia la versión con barra.
  build: { format: 'file' },
  integrations: [sitemap()],
});
