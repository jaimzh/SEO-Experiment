export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://seo-experiment-nextjs.vercel.app/sitemap.xml',
  }
}