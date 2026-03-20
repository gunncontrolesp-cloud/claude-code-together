# Architecture (Layer 1)

**Goal:** Provide an elegant, single-page React + Tailwind website for a Real Estate agency.

**Tech Stack:**
- Vite (React JS/TS)
- Tailwind CSS
- Framer Motion (for subtle animations, optional) or Tailwind classes for animations.
- Lucide React (for icons)

**Component Structure:**
- `App.jsx`: Main entry point assembling components sequentially.
- `components/Hero.jsx`: Bold headline, description, prominent primary CTA, and mockup image.
- `components/SocialProof.jsx`: 4-6 recognizable logos in a row ("Trusted by").
- `components/Features.jsx`: Grid of 3-6 benefit cards (icon, title, sentence).
- `components/Testimonials.jsx`: 2-3 customer quotes with names, titles, photos.
- `components/Footer.jsx`: Logo, nav columns, social icons, copyright + bottom CTA.

**Design System Tokens (Tailwind Config):**
- **Colors:** Cream background (`#F9F6F0`), Dark text (`#1A1A1A`), Gold/Muted accents (`#D4AF37` or `#B89947`).
- **Typography:** Serif for headings (e.g., Playfair Display), Sans-serif for body (e.g., Inter).

**Animations:**
- Fade-in on scroll (using Intersection Observer or `framer-motion`).
- Hover effects on cards (lift up + shadow) and buttons (scale + color shift).
