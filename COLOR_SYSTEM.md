# Color System Reference

## 🎨 Theme Colors

### Primary Colors

| Color | Hex Code | Tailwind Class | Usage |
|-------|----------|----------------|-------|
| **White** | `#ffffff` | `bg-white` `text-white` | Primary background, button text |
| **Black** | `#111111` | `bg-black` `text-black` | Text, headings, dark sections |
| **Gold** | `#b89649` | `bg-gold` `text-gold` `border-gold` | Buttons, accents, borders |
| **Gold Dark** | `#a27e2d` | `bg-gold-dark` | Button hover states |
| **Gold Light** | `#d4b679` | `bg-gold-light` | Light accents |

### Neutral Colors

| Color | Hex Code | Tailwind Class | Usage |
|-------|----------|----------------|-------|
| **Gray Light** | `#f9f9f9` | `bg-gray-light` | Alternate section backgrounds |
| **Gray** | `#e5e5e5` | `bg-gray` `border-gray` | Borders, dividers, light backgrounds |
| **Gray Dark** | `#666666` | `text-gray-dark` | Secondary text, subtle content |

## 📐 Usage Guidelines

### Backgrounds

```tsx
// Primary sections
<section className="bg-white">

// Alternate sections
<section className="bg-gray-light">

// Dark sections
<section className="bg-black text-white">
```

### Buttons

```tsx
// Primary button (gold background)
<button className="btn-primary">
  {/* bg-gold hover:bg-gold-dark text-white */}
</button>

// Outlined button (gold border)
<button className="btn-outline">
  {/* border-2 border-gold text-gold hover:bg-gold hover:text-white */}
</button>

// White outlined (for dark backgrounds)
<button className="btn-outline border-white text-white hover:bg-white hover:text-black">
  Click Me
</button>
```

### Text

```tsx
// Headings
<h1 className="text-black">Main Heading</h1>

// Body text
<p className="text-gray-dark">Body content</p>

// Labels
<span className="text-gold uppercase tracking-wider">Label</span>
```

### Borders & Accents

```tsx
// Gold accent border
<div className="border-l-4 border-gold">

// Divider
<hr className="border-gray" />

// Gold underline
<div className="border-b-2 border-gold">
```

## 🎯 Section Background Pattern

Follow this alternating pattern for visual hierarchy:

```tsx
// Homepage structure
<Hero />                    {/* Dark overlay */}
<SearchProperties />        {/* bg-white */}
<AboutStats />              {/* bg-gray-light */}
<MeetAgent />               {/* bg-white */}
<Communities />             {/* bg-gray-light */}
<MarketInsights />          {/* bg-white */}
<Testimonials />            {/* bg-gray-light */}
<ContactForm />             {/* bg-white */}
<CallToAction />            {/* Dark overlay */}
```

## 🔄 Hover States

### Consistent Transitions

```css
transition-colors duration-200
transition-all duration-300
```

### Common Hover Patterns

```tsx
// Text links
<a className="text-black hover:text-gold transition-colors">

// Bordered elements
<div className="border border-gray hover:border-gold hover:shadow-lg transition-all">

// Gold elements
<div className="bg-gold hover:bg-gold-dark transition-colors">
```

## 🎨 Color Combinations

### High Contrast (Best for readability)
- Black text on White background ✓
- White text on Black background ✓
- Gold text on White background ✓

### Accents
- Gold borders on White/Gray-light backgrounds ✓
- Gold buttons on any background ✓

### Avoid
- Gray-dark text on Gray-light background (low contrast)
- Gold text on Gray backgrounds (readability issues)

## 📱 Component Examples

### Card Component
```tsx
<div className="bg-white border border-gray hover:shadow-xl transition-all">
  <h3 className="text-black">Title</h3>
  <p className="text-gray-dark">Description</p>
  <span className="text-gold">Learn More →</span>
</div>
```

### Section Header
```tsx
<div className="text-center mb-16">
  <h2 className="text-3xl font-light text-black mb-4">
    Section Title
  </h2>
  <p className="text-lg text-gray-dark">
    Section description
  </p>
</div>
```

### Stats Display
```tsx
<div className="text-center">
  <div className="text-5xl font-light text-black mb-2">250+</div>
  <div className="text-sm uppercase tracking-wider text-gray-dark">
    STATISTIC LABEL
  </div>
</div>
```

## 🎭 Dark Mode Support

Not currently implemented. If needed:

```tsx
// Add dark mode variants
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
```

## 🔍 Finding Color Usage

Search project for:
- `bg-white` - 15+ instances
- `bg-gray-light` - 8+ instances
- `bg-gold` or `text-gold` - 25+ instances
- `text-black` - 30+ instances
- `text-gray-dark` - 20+ instances

## ✅ Checklist for New Components

When creating a new component:

1. [ ] Use white or gray-light background
2. [ ] Black text for headings
3. [ ] Gray-dark for body text
4. [ ] Gold for accents and CTAs
5. [ ] Proper hover states with transitions
6. [ ] Consistent with existing section pattern

## 🎨 Color Psychology

- **White**: Clean, professional, spacious
- **Black**: Elegant, authoritative, luxury
- **Gold**: Premium, valuable, trustworthy
- **Gray**: Neutral, balanced, sophisticated

Perfect for luxury real estate branding!

---

**Quick Access Tailwind Classes**:
- Primary BG: `bg-white`
- Alt BG: `bg-gray-light`
- Text: `text-black` `text-gray-dark`
- Accent: `bg-gold` `text-gold` `border-gold`
- Buttons: `btn-primary` `btn-outline`

