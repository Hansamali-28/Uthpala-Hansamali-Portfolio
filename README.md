# Uthpala Hansamali — Personal Portfolio

A premium, animated personal portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, for a Health ICT undergraduate and Business Management student passionate about software engineering, UI/UX, AI, data analytics, and healthcare technology.

## ✨ Features

- Dark, glassmorphic, medical-inspired design system (see `tailwind.config.ts` for the exact palette)
- Full-screen animated hero with a typing effect, floating icon accents, and a particle background
- Sticky, blurred, scroll-aware navbar with active-section highlighting and mobile menu
- About section with an animated stats row and a scroll-reveal timeline
- Skills section with animated progress bars grouped by category
- Filterable project grid with tech badges, GitHub, and live-demo links
- Alternating vertical experience timeline
- Certificates grid, interactive masonry gallery with a lightbox, animated achievement counters, and a testimonial slider
- Contact section with a client-side validated form (wire up your own email service) and a map placeholder
- Extras: scroll progress bar, cursor glow, back-to-top button, loading screen, reduced-motion support, and SEO metadata (Open Graph, Twitter Card, sitemap, robots)

## 🧱 Tech Stack

Next.js 15 · React 18 · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons

## 📁 Project Structure

```
app/                 # App Router pages, layout, globals.css, sitemap, robots
components/
  layout/            # Navbar, Footer, and page-chrome effects (cursor glow, loading screen, etc.)
  sections/          # Hero, About, Skills, Projects, Experience, Certificates, Gallery, Achievements, Testimonials, Contact
  ui/                 # Reusable primitives: Button, Reveal, GlowCard, SectionHeading
hooks/               # useScrollProgress, useActiveSection, useMousePosition, useCountUp
lib/                 # data.ts (all site content), utils.ts (cn + scroll helper)
public/images/       # Placeholder SVG artwork for the profile photo, projects, certificates, and gallery
types/               # Shared TypeScript interfaces
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
```

## 🖋️ Before you publish, personalize:

1. **Content** — everything lives in `lib/data.ts`. Update the intro, timeline, skills, projects, experience, certificates, gallery captions, testimonials, and contact details there.
2. **Images** — replace the placeholder SVGs in `public/images/` with real photos (profile portrait, project screenshots, certificate scans, gallery photos). Keep the same filenames or update the paths in `lib/data.ts`.
3. **CV** — add your actual PDF at `public/uthpala-hansamali-cv.pdf` (referenced by the "Download CV" button in `lib/data.ts` → `SITE.cvUrl`).
4. **Contact form** — the form currently only shows a success state on submit. Connect it to a real email service (e.g. [Resend](https://resend.com), [EmailJS](https://www.emailjs.com/), [Formspree](https://formspree.io/), or a Next.js API route + SMTP) inside `components/sections/Contact.tsx`.
5. **Map** — swap the map placeholder in `Contact.tsx` for a real Google Maps embed (iframe) once you have an embed URL.
6. **Domain** — update the `siteUrl` constant in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to your real deployed domain.
7. **Social links** — update GitHub/LinkedIn/Facebook/Instagram URLs in `lib/data.ts` → `SOCIAL_LINKS`.

## ♿ Accessibility

Buttons and interactive elements include `aria-label`s, focus states are visible (`focus-visible` outlines), and `prefers-reduced-motion` disables non-essential animation.

## 📱 Responsiveness

Layouts are built mobile-first with Tailwind breakpoints and tested down to small mobile widths, tablets, laptops, and large desktop screens.
