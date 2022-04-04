// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
// @ts-check

// https://astro.build/config
import { defineConfig } from 'astro/config'
import solid from '@astrojs/solid-js'
import turbolinks from '@astrojs/turbolinks'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import astroImagePlugin from 'astro-imagetools/plugin'

export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */
  {
    // Enable the Solid renderer to support Solid JSX components.
    site: 'https://gastonapp.com',
    integrations: [solid(), /* turbolinks(), */ partytown(), sitemap()],
    vite: {
      plugins: [astroImagePlugin],
    },
  }
)
