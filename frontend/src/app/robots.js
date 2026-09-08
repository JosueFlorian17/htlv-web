export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://htlv-web.vercel.app');
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login', '/register', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
