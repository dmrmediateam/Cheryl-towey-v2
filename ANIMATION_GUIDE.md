# Luxury Animation Guide

## Overview
The site uses elegant fade-in-from-left animations triggered on scroll for a smooth, luxury feel.

---

## 🎨 Color System

### Off-Black & Off-White
```css
--off-black: #1a1a1a  /* Soft black for text */
--off-white: #faf9f7  /* Warm white for backgrounds */
```

### Luxury Gold
```css
--gold-light: #d4af37  /* Bright gold for highlights */
--gold-dark: #b8860b   /* Deep gold for accents */
```

### Gray Shades
```css
--gray-light: #f5f4f2   /* Very light gray */
--gray-medium: #e8e6e3  /* Medium gray */
--gray-dark: #5a5a5a    /* Dark gray for secondary text */
```

---

## 🔤 Fonts

### Primary (Headings): Bodoni Moda
```css
font-family: 'Bodoni Moda', serif;
```
- Elegant, luxury serif
- Used for: H1, H2, H3, H4, H5, H6
- Weights: 400, 500, 600, 700

### Secondary (Body): Varela
```css
font-family: 'Varela', sans-serif;
```
- Clean, modern sans-serif
- Used for: paragraphs, buttons, labels, inputs
- Weight: 400

---

## ✨ Animation Classes

### Scroll-Triggered Animations (Recommended)

Add `scroll-animate` class to any element you want to animate on scroll:

```html
<h2 className="scroll-animate">Your Heading</h2>
<p className="scroll-animate">Your paragraph text</p>
<div className="scroll-animate">Your content</div>
```

**How it works:**
- Element starts invisible and shifted left
- When 10% of element enters viewport, it fades in smoothly
- Animation is fast (0.6s) and uses ease-out timing
- Respects user's motion preferences

### Immediate Animations

For elements that should animate immediately on page load:

```html
<h1 className="fade-in-left">Immediate Animation</h1>
<p className="fade-in-left-slow">Slower Animation</p>
```

### Staggered Animations

Create a staggered effect for multiple elements:

```html
<h2 className="fade-in-left fade-in-left-delay-1">First</h2>
<p className="fade-in-left fade-in-left-delay-2">Second (0.1s later)</p>
<button className="fade-in-left fade-in-left-delay-3">Third (0.2s later)</button>
```

Delay classes available:
- `fade-in-left-delay-1` - 0.1s delay
- `fade-in-left-delay-2` - 0.2s delay  
- `fade-in-left-delay-3` - 0.3s delay
- `fade-in-left-delay-4` - 0.4s delay

---

## 🎯 Button Styles

### Primary Button
```html
<button className="btn-primary">Get Started</button>
<Link href="/contact" className="btn-primary">Contact Us</Link>
```

**Features:**
- Gold background (`--gold-light`)
- Off-white text
- Uppercase, letter-spaced
- Hover: 80% opacity + slight lift + gold shadow
- Auto-animates on load

### Outline Button
```html
<button className="btn-outline">Learn More</button>
<Link href="/listings" className="btn-outline">View Listings</Link>
```

**Features:**
- Gold border, transparent background
- Gold text
- Uppercase, letter-spaced
- Hover: Fills with gold + 80% opacity + lift
- Auto-animates on load

---

## 🎪 Additional Animation Utilities

### Animation Speed
```html
<div className="fade-in-left animation-fast">Fast (0.4s)</div>
<div className="fade-in-left animation-normal">Normal (0.6s)</div>
<div className="fade-in-left animation-slow">Slow (0.8s)</div>
```

### Hover Effects
```html
<div className="hover-opacity-80">Fades to 80% on hover</div>
<div className="card-hover">Lifts and adds shadow on hover</div>
```

### Text Gradients
```html
<h2 className="text-gradient-gold">Gradient Gold Text</h2>
```

---

## 💅 Styling Utilities

### Colors
```html
<!-- Text Colors -->
<p className="text-gold">Light gold text</p>
<p className="text-gold-dark">Dark gold text</p>
<p className="text-off-black">Off-black text</p>

<!-- Backgrounds -->
<div className="bg-gold">Gold background</div>
<div className="bg-gold-dark">Dark gold background</div>
<div className="bg-off-white">Off-white background</div>
```

### Heading Underlines
```html
<!-- Centered gold underline -->
<h2 className="heading-underline">Centered Title</h2>

<!-- Left-aligned gold underline -->
<h2 className="heading-underline-left">Left Aligned Title</h2>

<!-- Simple gold line under -->
<h2 className="heading-line">Simple Line</h2>
```

### Layout
```html
<section className="section-padding">Consistent padding (py-20)</section>
<div className="container-max">Max-width container (7xl)</div>
```

---

## 🚀 Usage Examples

### Hero Section
```tsx
<section className="min-h-screen flex items-center">
  <div className="container-max">
    <h1 className="fade-in-left heading-underline">
      Luxury Living in New Jersey
    </h1>
    <p className="fade-in-left fade-in-left-delay-2 text-gray-dark">
      Discover your dream home with personalized service
    </p>
    <div className="fade-in-left fade-in-left-delay-3">
      <button className="btn-primary">Start Your Journey</button>
      <button className="btn-outline ml-4">View Listings</button>
    </div>
  </div>
</section>
```

### Content Section with Scroll Animation
```tsx
<section className="section-padding bg-off-white">
  <div className="container-max">
    <h2 className="scroll-animate text-center heading-underline">
      Featured Properties
    </h2>
    <div className="grid grid-cols-3 gap-8 mt-12">
      <div className="scroll-animate card-hover">Property 1</div>
      <div className="scroll-animate card-hover">Property 2</div>
      <div className="scroll-animate card-hover">Property 3</div>
    </div>
  </div>
</section>
```

### Cards with Hover Effects
```tsx
<div className="card-hover bg-white border border-gray-medium p-6">
  <h3 className="text-gold-dark">$850,000</h3>
  <p className="text-gray-dark">Luxury 4BR Home</p>
  <button className="btn-primary mt-4 hover-opacity-80">View Details</button>
</div>
```

---

## ♿ Accessibility

The animations respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  /* All animations are disabled for users who prefer reduced motion */
}
```

---

## 📱 Responsive Behavior

All animations work seamlessly across:
- Mobile (<768px)
- Tablet (768px - 1024px)  
- Desktop (>1024px)

Animations automatically adjust to viewport size for optimal performance.

---

## 🎨 Customization

### Change Animation Speed
In `globals.css`, modify:
```css
.fade-in-left {
  animation: fadeInLeft 0.6s ease-out forwards; /* Change 0.6s to your preference */
}
```

### Change Animation Distance
```css
@keyframes fadeInLeft {
  from {
    transform: translateX(-30px); /* Change -30px for more/less movement */
  }
}
```

### Adjust Scroll Trigger Point
In `ScrollAnimations.tsx`, modify:
```typescript
threshold: 0.1,  // Change to trigger at different visibility (0-1)
rootMargin: '0px 0px -80px 0px',  // Adjust bottom margin
```

---

## 🐛 Troubleshooting

**Animations not working?**
1. Ensure `ScrollAnimations` component is in `layout.tsx`
2. Check that classes are spelled correctly
3. Verify element has `scroll-animate` class

**Animations too fast/slow?**
- Use `.animation-fast`, `.animation-normal`, or `.animation-slow` classes

**Want one-time animations?**
- Uncomment `observer.unobserve(entry.target)` in `ScrollAnimations.tsx`

---

## 💡 Best Practices

1. **Don't overuse animations** - Apply to key elements only
2. **Use scroll-animate** for content that appears below fold
3. **Use fade-in-left** for hero sections and immediate content
4. **Stagger animations** for lists and grids
5. **Test on mobile** - Ensure animations don't slow performance
6. **Respect accessibility** - Never override prefers-reduced-motion

---

**Ready to create a luxurious, animated experience!** 🌟
