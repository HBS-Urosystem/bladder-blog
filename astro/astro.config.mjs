// @ts-check
export default /** @type {import('astro')} */ ({
  buildOptions: {
    site: 'https://www.urosystem.com/blog/', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    trailingSlash: 'ignore',
    sitemap: false,
  },
  // Comment out "renderers: []" to enable Astro's default component support.
  renderers: ['@astrojs/renderer-preact','@astrojs/renderer-svelte'],
  devOptions: {
    port: 3001, // The port to run the dev server on.
    tailwindConfig: './tailwind.config.js',
  },

});