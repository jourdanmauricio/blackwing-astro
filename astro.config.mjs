import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: 'https://jourdanmauricio.github.io',
	base: '/blackwing-astro',
})
