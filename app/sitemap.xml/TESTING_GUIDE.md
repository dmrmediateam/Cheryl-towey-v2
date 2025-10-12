# Sitemap Testing & Failure Modes Guide

## ✅ Task 1: Working Sitemap Created

Your sitemap is now available at: `http://localhost:3000/sitemap.xml`

### How to Test:
1. Start your dev server: `npm run dev`
2. Visit: http://localhost:3000/sitemap.xml
3. You should see properly formatted XML

### What's Included:
- All main pages (/, /about, /listings, /contact, etc.)
- All community pages
- Proper XML structure with priority and changefreq
- Cache headers for performance
- Current date for lastmod

---

## 🔥 Task 2: Breaking the Sitemap (For Learning)

Below are 4 intentional breaks and how to test them.

### Test 1: Invalid URL with Emoji
**What to Break:** Add an invalid URL with emoji
**Expected Result:** XML parser error or malformed sitemap

### Test 2: Missing Closing Tag
**What to Break:** Remove a `</url>` tag
**Expected Result:** XML validation error, browser shows error

### Test 3: Missing Content-Type Header
**What to Break:** Remove the Content-Type header
**Expected Result:** Browser renders as plain text, not XML

### Test 4: Duplicate URLs
**What to Break:** Add duplicate URLs
**Expected Result:** Google Search Console warning

---

## 📝 How to Run Each Test

I've created backup versions of the route file for testing. To test each failure:

1. Backup the working version
2. Replace `route.ts` with the broken version
3. Visit /sitemap.xml in your browser
4. Observe the error
5. Restore the working version

See the broken examples in the comments below.

