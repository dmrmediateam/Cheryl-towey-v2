# Copy-Paste Test Code Snippets

Quick reference for each test - just copy and paste!

---

## 🧪 Test 1: Invalid URL (Emoji)

### Break It:
Open `app/sitemap.xml/route.ts` and add this line after line 10:

```typescript
{ path: '🚀badurl/💥test', priority: '0.5', changefreq: 'never' },
```

### Full routes array with the break:
```typescript
const routes = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'about', priority: '0.8', changefreq: 'weekly' },
  { path: '🚀badurl/💥test', priority: '0.5', changefreq: 'never' }, // BREAK!
  { path: 'listings', priority: '0.9', changefreq: 'daily' },
  // ... rest of routes
];
```

### Fix It:
Remove that line and save.

---

## 🧪 Test 2: Missing Closing Tag

### Break It:
Find the URL template around line 33 and remove the closing `</url>`:

```typescript
// BEFORE (Working):
${routes.map(route => `  <url>
    <loc>${baseUrl}/${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}

// AFTER (Broken):
${routes.map(route => `  <url>
    <loc>${baseUrl}/${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  `).join('\n')}  // Missing </url>!
```

### Fix It:
Add back `</url>` before the closing backtick.

---

## 🧪 Test 3: No Content-Type Header

### Break It:
Around line 42, comment out the Content-Type header:

```typescript
// BEFORE (Working):
return new NextResponse(sitemap, {
  status: 200,
  headers: {
    'Content-Type': 'application/xml',
    'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
  },
});

// AFTER (Broken):
return new NextResponse(sitemap, {
  status: 200,
  headers: {
    // 'Content-Type': 'application/xml',  // COMMENTED OUT!
    'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
  },
});
```

### Fix It:
Uncomment the Content-Type line.

---

## 🧪 Test 4: Duplicate URLs

### Break It:
Add a duplicate entry in the routes array:

```typescript
const routes = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'about', priority: '0.8', changefreq: 'weekly' },
  { path: 'listings', priority: '0.9', changefreq: 'daily' },
  { path: 'listings', priority: '0.7', changefreq: 'weekly' }, // DUPLICATE!
  { path: 'contact', priority: '0.8', changefreq: 'monthly' },
  // ... rest of routes
];
```

### Fix It - Option 1 (Manual):
Remove the duplicate line.

### Fix It - Option 2 (Automatic):
Add deduplication logic after the routes array:

```typescript
// Add this after line 27 (after routes array closes)
const uniqueRoutes = Array.from(
  new Map(routes.map(route => [route.path, route])).values()
);

// Then replace 'routes' with 'uniqueRoutes' in line 33:
${uniqueRoutes.map(route => `  <url>
```

---

## 🔄 Quick Test Cycle

```bash
# 1. Make a change
# 2. Save file (Ctrl+S)
# 3. Dev server auto-reloads
# 4. Refresh browser: http://localhost:3000/sitemap.xml
# 5. Observe result
# 6. Undo change
# 7. Save again
# 8. Verify it's fixed
```

---

## 📋 Complete Broken Version (All 4 Breaks)

**Warning:** This has ALL errors at once! Don't actually use this.

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  // BREAK 1 & 4: Invalid URL + Duplicates
  const routes = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: 'about', priority: '0.8', changefreq: 'weekly' },
    { path: '🚀badurl/💥test', priority: '0.5', changefreq: 'never' }, // BREAK 1!
    { path: 'listings', priority: '0.9', changefreq: 'daily' },
    { path: 'listings', priority: '0.7', changefreq: 'weekly' }, // BREAK 4!
    { path: 'contact', priority: '0.8', changefreq: 'monthly' },
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  // BREAK 2: Missing closing tag
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}/${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  `).join('\n')}  <!-- Missing </url>! BREAK 2! -->
</urlset>`;

  // BREAK 3: No Content-Type
  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      // 'Content-Type': 'application/xml',  // BREAK 3!
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
```

**This version has:** XML parse error, invalid characters, duplicates, and displays as plain text. A perfect storm! 🌪️

---

## ✅ Complete Fixed Version

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const routes = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: 'about', priority: '0.8', changefreq: 'weekly' },
    { path: 'listings', priority: '0.9', changefreq: 'daily' },
    { path: 'contact', priority: '0.8', changefreq: 'monthly' },
    { path: 'buyers', priority: '0.7', changefreq: 'monthly' },
    { path: 'sellers', priority: '0.7', changefreq: 'monthly' },
    { path: 'blog', priority: '0.8', changefreq: 'weekly' },
    { path: 'communities/sussex-county', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/warren-county', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/hackettstown', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/andover', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/byram', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/blairstown', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/chester', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/washington', priority: '0.6', changefreq: 'monthly' },
  ];

  // Ensure uniqueness
  const uniqueRoutes = Array.from(
    new Map(routes.map(route => [route.path, route])).values()
  );

  const currentDate = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${uniqueRoutes.map(route => `  <url>
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
```

**This version has:** ✅ Valid URLs, ✅ Proper closing tags, ✅ Content-Type header, ✅ No duplicates

---

## 📝 Testing Checklist

For each test:

- [ ] Copy the broken code
- [ ] Paste into route.ts
- [ ] Save file
- [ ] Refresh http://localhost:3000/sitemap.xml
- [ ] Screenshot/note the error
- [ ] Copy the fixed code
- [ ] Paste into route.ts
- [ ] Save file
- [ ] Verify it works again

---

That's it! Each test should take 2-3 minutes. Total time: ~10-15 minutes for all tests.

Happy breaking things! 🔨

