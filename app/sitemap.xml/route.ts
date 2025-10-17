import { NextResponse } from 'next/server';

export async function GET() {
  // Define your site's base URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  // Define all your main pages
  const routes = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: 'about', priority: '0.8', changefreq: 'weekly' },
    { path: 'listings', priority: '0.9', changefreq: 'daily' },
    { path: 'contact', priority: '0.8', changefreq: 'monthly' },
    { path: 'buyers', priority: '0.7', changefreq: 'monthly' },
    { path: 'sellers', priority: '0.7', changefreq: 'monthly' },
    { path: 'blog', priority: '0.8', changefreq: 'weekly' },
    // Community pages
    { path: 'communities/sussex-county', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/warren-county', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/hackettstown', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/andover', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/byram', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/blairstown', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/chester', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/washington', priority: '0.6', changefreq: 'monthly' },
  ];

  // Get current date for lastmod
  const currentDate = new Date().toISOString().split('T')[0];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${baseUrl}/${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}

