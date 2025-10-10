# Cheryl Towey Real Estate Website

A modern, responsive real estate website built with Next.js, TypeScript, and Tailwind CSS, inspired by realestatebycherylnj.com.

## Features

- **Modern Design**: Clean, professional layout with gold and navy color scheme
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **TypeScript**: Full type safety throughout the application
- **Component-Based**: Reusable components for maintainability

## Pages

- **Home** (`/`) - Hero section, property search, featured listings, about preview, testimonials
- **About** (`/about`) - Detailed information about Cheryl Towey
- **Listings** (`/listings`) - Property search and grid view with filters
- **Contact** (`/contact`) - Contact form and information

## Components

- `Navbar` - Responsive navigation with mobile menu
- `Hero` - Full-width hero section with background image
- `PropertyCard` - Individual property display card
- `Testimonials` - Client testimonials section
- `ContactForm` - Contact form with validation
- `Footer` - Site footer with links and information

## TODO: Integration Points

The following areas are marked for future integration:

### iHomeFinder Integration
- Property search functionality (currently static)
- MLS data feed for listings
- Advanced search filters
- Property details and photos

### Backend Integration
- Contact form submission
- Email notifications
- User authentication (if needed)
- Property favorites/saved searches

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Images**: Unsplash (placeholder images)

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Gold: `#eab308` (primary accent)
- Navy: `#4f46e5` (primary brand)
- Gray: Various shades for text and backgrounds

### Content
- Update mock data in `data/mockData.ts`
- Modify component content in respective component files
- Update metadata in `app/layout.tsx`

## Deployment

This project is ready to deploy on:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service

## License

This project is for demonstration purposes.
