# Sanity CMS - Quick Start Guide

## ✅ Integration Complete!

Your Lauer Realty website is now fully integrated with Sanity CMS. Here's what you need to do next:

---

## 🚀 Next Steps (5 minutes)

### Step 1: Create Environment File

You need to manually create `.env.local` with your API token:

```bash
# Create the file
touch .env.local

# Add these lines to .env.local:
NEXT_PUBLIC_SANITY_PROJECT_ID=cs56ipyy
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

**Get your API token:**
1. Visit: https://sanity.io/manage/project/cs56ipyy/api
2. Click "Add API Token"
3. Name it: "Next.js Production"
4. Set permissions: "Editor"
5. Copy the token and paste it in `.env.local`

### Step 2: Start Sanity Studio

```bash
npm run sanity
```

Sanity Studio will open at: **http://localhost:3333**

### Step 3: Create Content

In Sanity Studio (http://localhost:3333):

1. **Create an Author** (required for blog posts)
   - Click "Author" in the sidebar
   - Click "Create new"
   - Fill in:
     - Name: "Cheryl Lauer"
     - Slug: Auto-generates
     - Image: Upload profile photo
     - Bio: Short description
   - Click "Publish"

2. **Create a Blog Post**
   - Click "Blog Post" in the sidebar
   - Click "Create new"
   - Fill in:
     - Title: "Morris County NJ Homes: Complete Guide"
     - Slug: Auto-generates
     - Category: "Market Report"
     - Description: Short summary (2-3 sentences)
     - Main Image: Upload featured image
     - Author: Select the author you created
     - Published At: Choose today's date
     - Read Time: "8 min read"
     - Body: Write your blog content (supports rich text)
     - Tags: Add relevant keywords
     - SEO: Meta title and description
   - Click "Publish"

### Step 4: View Your Blog

```bash
# In a separate terminal (keep Sanity running)
npm run dev
```

Visit:
- **Blog listing**: http://localhost:3000/blog
- **Your post**: http://localhost:3000/blog/morris-county-nj-homes-complete-guide

---

## 📦 What's Been Set Up

### File Structure

```
Lauer-Realty-DemoClone/
├── sanity/
│   └── schemas/          # Content models
│       ├── blockContent.ts
│       ├── author.ts
│       ├── post.ts
│       └── index.ts
├── lib/
│   └── sanity.ts         # Sanity client
├── data/
│   └── blogPosts.ts      # API functions (now fetches from Sanity)
├── app/blog/
│   ├── page.tsx          # Blog listing (updated for Sanity)
│   └── [slug]/
│       └── page.tsx      # Individual posts (updated for Sanity)
├── sanity.config.ts      # Sanity Studio config
├── sanity.cli.ts         # Sanity CLI config
├── vercel.json           # Vercel deployment config
└── package.json          # Added Sanity scripts
```

### Scripts Added

```bash
npm run sanity          # Start Sanity Studio locally
npm run sanity:build    # Build Sanity Studio
npm run sanity:deploy   # Deploy Sanity Studio to cloud
```

### Dependencies Installed

- `sanity` - Sanity Studio
- `@sanity/vision` - GROQ query testing tool
- `next-sanity` - Next.js integration
- `@sanity/client` - API client
- `@sanity/image-url` - Image URL builder
- `@portabletext/react` - Rich text renderer

---

## 🌐 Deploy to Production

### Deploy Sanity Studio

```bash
npm run sanity:deploy
```

Choose a hostname (e.g., `lauer-realty`)
Your Studio will be at: `https://lauer-realty.sanity.studio`

### Deploy Next.js to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add Sanity CMS integration"
   git push
   ```

2. **In Vercel Dashboard:**
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Add environment variables:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `cs56ipyy`
     - `NEXT_PUBLIC_SANITY_DATASET` = `production`
     - `SANITY_API_TOKEN` = (your token)
   - Deploy!

3. **Done!** Your site will:
   - Build automatically on push
   - Revalidate blog content every 60 seconds
   - Serve optimized, static pages

---

## 🎨 Content Features

### Rich Text Editor

Your blog body supports:
- **Headings**: H2, H3, H4 (styled automatically)
- **Text**: Bold, italic
- **Lists**: Bullet points and numbered
- **Links**: Internal and external
- **Quotes**: Blockquotes for emphasis
- **Images**: Inline images (coming soon)

### Image Optimization

Sanity automatically:
- Compresses images
- Generates WebP format
- Creates responsive sizes
- Serves from global CDN
- Allows cropping with hotspot

### SEO Built-in

Each post has:
- Meta title and description
- Open Graph tags (social sharing)
- Automatic sitemap generation
- Structured data (Article schema)

---

## 🔧 Advanced Configuration

### Change Revalidation Time

In `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`:

```typescript
export const revalidate = 60; // Change to your preferred seconds
```

Options:
- `60` = Revalidate every minute (default)
- `3600` = Revalidate every hour
- `false` = Never revalidate (full static)

### Add More Content Types

Want to add properties, testimonials, or team members to Sanity?

1. Create new schema in `sanity/schemas/`
2. Add to `sanity/schemas/index.ts`
3. Create API functions like `blogPosts.ts`
4. Restart Sanity Studio

---

## 📊 Performance

Your blog is optimized for:
- **Fast Page Loads**: Static generation
- **SEO**: Pre-rendered HTML
- **Images**: CDN + optimization
- **Caching**: ISR with 60s revalidation
- **Scalability**: Handles millions of visitors

---

## 🆘 Troubleshooting

### "Cannot fetch posts" error

**Solution:** Check that:
1. `.env.local` exists with correct project ID
2. Sanity Studio is running (`npm run sanity`)
3. You've created and published at least one post

### Blog page shows "No posts"

**Solution:**
1. Open Sanity Studio
2. Check that posts are **published** (not drafts)
3. Verify `publishedAt` date is in the past
4. Refresh your browser

### Images not loading

**Solution:**
1. Ensure images uploaded in Sanity Studio
2. Check image has alt text
3. Verify image asset completed uploading

### Sanity Studio won't start

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run sanity
```

---

## 📚 Resources

- **Sanity Dashboard**: https://sanity.io/manage/project/cs56ipyy
- **Full Setup Guide**: See `SANITY_SETUP.md`
- **Sanity Docs**: https://www.sanity.io/docs
- **GROQ Reference**: https://www.sanity.io/docs/groq

---

## ✨ You're All Set!

Your blog is production-ready and integrated with Sanity CMS. Create your first post and watch it appear on your live site!

**Questions?** Check `SANITY_SETUP.md` for comprehensive documentation.

