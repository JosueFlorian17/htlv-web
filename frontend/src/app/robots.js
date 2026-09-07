export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login', '/register', '/api/'],
    },
    sitemap: 'https://frontend-ten-ebon-94.vercel.app/sitemap.xml',
  }
}
