# Sanity CMS Setup Guide

## Overview
This project uses Sanity CMS for blog content management. Sanity Studio runs as a separate application that manages content via API.

## Project Configuration
- **Project ID**: `cs56ipyy`
- **Organization ID**: `o0TLPxe4z`
- **Dataset**: `production`

## Quick Start

### 1. Set Environment Variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=cs56ipyy
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

Get your API token from: https://sanity.io/manage/project/cs56ipyy/api

### 2. Run Sanity Studio (locally)

```bash
npm run sanity
```

This starts Sanity Studio at `http://localhost:3333`

### 3. Run Next.js Website (locally)

In a separate terminal:

```bash
npm run dev
```

This starts the website at `http://localhost:3000`

### 4. Create Your First Blog Post

1. Open Sanity Studio: http://localhost:3333
2. Click "Author" → Create a new author (e.g., Cheryl Lauer)
   - Add name, bio, and profile image
3. Click "Blog Post" → Create a new post
   - Fill in all required fields
   - Add rich text content in the body
   - Publish when ready
4. Visit http://localhost:3000/blog to see your post

## Deployment

### Deploy Sanity Studio

```bash
npm run sanity:deploy
```

Choose a studio hostname (e.g., `lauer-realty.sanity.studio`)

Your Sanity Studio will be available at: `https://lauer-realty.sanity.studio`

### Deploy Next.js to Vercel

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables in Vercel:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `cs56ipyy`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
   - `SANITY_API_TOKEN` = (your API token)
4. Deploy

The `vercel.json` configuration is already set up for automatic deployment.

## Vercel Integration

This project is configured for seamless Vercel deployment:

- **ISR (Incremental Static Regeneration)**: Pages revalidate every 60 seconds
- **Static Generation**: Blog posts are pre-rendered at build time
- **Dynamic Routes**: Blog post pages are automatically generated
- **Environment Variables**: Sanity credentials are injected at build time

### Vercel Environment Variables

In your Vercel project settings, add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=cs56ipyy
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=<your_token>
```

## Content Schema

### Blog Post Fields

- **Title** (required): Post title
- **Slug** (required): URL-friendly identifier
- **Category** (required): Market Report, Investment Guide, etc.
- **Description** (required): Short summary (shown in listings)
- **Main Image** (required): Featured image with alt text
- **Author** (required): Reference to author document
- **Published At** (required): Publication date
- **Read Time** (required): e.g., "8 min read"
- **Body**: Rich text content (supports H2, H3, lists, images, links)
- **Tags**: Array of keywords
- **SEO**: Meta title and description

### Author Fields

- **Name** (required): Author's full name
- **Slug**: URL identifier
- **Image**: Profile photo
- **Bio**: Short biography

## Content Management

### Rich Text Editor

The body field supports:

- **Headings**: H2, H3, H4
- **Text Formatting**: Bold, italic
- **Lists**: Bullet points, numbered lists
- **Links**: Internal and external
- **Blockquotes**: For highlighting important text
- **Images**: Inline images with captions

### Image Management

Sanity automatically:
- Optimizes images (WebP, compression)
- Generates responsive sizes
- Provides CDN delivery
- Allows cropping/hotspot editing

## API Usage

### Fetching All Posts

```typescript
import { getAllBlogPosts } from '@/data/blogPosts'

const posts = await getAllBlogPosts()
```

### Fetching Single Post

```typescript
import { getBlogPostBySlug } from '@/data/blogPosts'

const post = await getBlogPostBySlug('morris-county-nj-homes')
```

### GROQ Queries

Sanity uses GROQ (Graph-Relational Object Queries). Examples:

```groq
// All published posts
*[_type == "post"] | order(publishedAt desc)

// Posts by category
*[_type == "post" && category == "Market Report"]

// Single post with author
*[_type == "post" && slug.current == $slug][0]{
  ...,
  author->{ name, image }
}
```

## Performance

### Caching Strategy

- **ISR Revalidation**: 60 seconds (configurable in page files)
- **CDN**: Sanity images served via global CDN
- **Static Generation**: Blog posts pre-rendered at build time

### On-Demand Revalidation (Optional)

Set up webhooks in Sanity to trigger immediate revalidation:

1. Sanity Dashboard → API → Webhooks
2. Create webhook pointing to: `https://yoursite.com/api/revalidate`
3. Trigger on: Create, Update, Delete (post documents)

## Troubleshooting

### Posts Not Showing Up

1. Check Sanity Studio for published posts
2. Verify `.env.local` has correct project ID
3. Check browser console for API errors
4. Ensure posts have `publishedAt` date in the past

### Images Not Loading

1. Verify image asset URLs in Sanity
2. Check image has been uploaded (not just referenced)
3. Ensure image alt text is provided

### Build Errors

1. Run `npm install` to ensure all dependencies installed
2. Check Sanity schemas have no TypeScript errors
3. Verify environment variables in Vercel

## Development Workflow

### Local Development

1. Start Sanity Studio: `npm run sanity` (port 3333)
2. Start Next.js: `npm run dev` (port 3000)
3. Create content in Studio
4. View on website

### Production Deployment

1. Deploy Studio: `npm run sanity:deploy`
2. Push to GitHub
3. Vercel auto-deploys Next.js site
4. Content updates appear within 60 seconds (ISR)

## Security

- **API Token**: Keep `SANITY_API_TOKEN` secret (for write operations)
- **Public Reads**: Blog posts are publicly readable (no token required)
- **Studio Access**: Sanity Studio requires authentication
- **CORS**: Configure allowed origins in Sanity dashboard

## Scripts Reference

```bash
npm run dev            # Start Next.js dev server
npm run build          # Build Next.js for production
npm run sanity         # Start Sanity Studio (local)
npm run sanity:deploy  # Deploy Sanity Studio
npm run lint           # Run ESLint
```

## Resources

- **Sanity Dashboard**: https://sanity.io/manage/project/cs56ipyy
- **Sanity Documentation**: https://www.sanity.io/docs
- **GROQ Cheat Sheet**: https://www.sanity.io/docs/query-cheat-sheet
- **Portable Text**: https://www.sanity.io/docs/presenting-block-text

## Support

For Sanity-related issues:
- Documentation: https://www.sanity.io/docs
- Community: https://slack.sanity.io

For Next.js issues:
- Documentation: https://nextjs.org/docs
- GitHub: https://github.com/vercel/next.js

---

**Ready to go!** Your blog system is fully integrated with Sanity CMS and ready for Vercel deployment.

