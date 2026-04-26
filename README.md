# Accredian Enterprise — Partial Clone

A production-quality clone of [enterprise.accredian.com](https://enterprise.accredian.com) built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

---

## 🚀 Live Demo

> Deploy to Vercel (see below) to get your live URL.

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone <your-repo-url>
cd accredian-enterprise
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🏗️ Project Structure

```
accredian-enterprise/
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts        # POST /api/leads — lead capture API
│   ├── globals.css             # Global styles, design tokens, animations
│   ├── layout.tsx              # Root layout with Google Fonts
│   └── page.tsx                # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx              # Sticky nav with mobile hamburger menu
│   ├── Hero.tsx                # Full-screen hero with animated background
│   ├── TrustBar.tsx            # Scrolling marquee of company names
│   ├── WhyAccredian.tsx        # Feature cards grid (6 features)
│   ├── HowItWorks.tsx          # 4-step process with connecting line
│   ├── Programs.tsx            # Filterable program cards (6 programs)
│   ├── Outcomes.tsx            # Animated stats counter section
│   ├── Testimonials.tsx        # Testimonial carousel (5 testimonials)
│   ├── Partners.tsx            # Partner/accreditation logos grid
│   ├── LeadForm.tsx            # Lead capture form → POST /api/leads
│   └── Footer.tsx              # 4-column footer with social links
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🧠 Approach Taken

### Architecture
- **Next.js 14 App Router** with server components where possible; client components only where interactivity is needed (`"use client"`)
- **TypeScript** throughout for type safety
- **Tailwind CSS** for utility-first styling with a custom design system defined in `tailwind.config.ts`

### Design Decisions
- **Color palette**: Brand blue (`#0066FF`) + accent cyan (`#00C2FF`) on a deep navy dark background — mirrors Accredian's actual branding
- **Typography**: Sora (display/headings) + Plus Jakarta Sans (body) — distinctive, modern pairing
- **Dark hero section** with a CSS gradient mesh + floating animated dots for visual impact
- **Wave SVG** transition between hero and content for a polished flow

### Component Highlights
| Component | Key Feature |
|---|---|
| `Navbar` | Transparent → solid on scroll; responsive hamburger |
| `Hero` | CSS gradient mesh bg; floating dots via `useEffect`; stats card |
| `TrustBar` | CSS `marquee` animation with fade edges |
| `Programs` | Client-side filter tabs with smooth re-render |
| `Outcomes` | `IntersectionObserver` triggers count-up animation on scroll |
| `Testimonials` | Carousel with dot pagination and keyboard-accessible arrows |
| `LeadForm` | Controlled form → `fetch("/api/leads")` → success/error states |

### API
`POST /api/leads` accepts `{ name, email, company, phone, teamSize, message }`, validates required fields, and stores leads in memory (easily swappable for a real DB).

---

## 🤖 AI Usage Explanation

Claude (Anthropic) was used extensively in this project:

| Area | AI Contribution | Manual Refinement |
|---|---|---|
| Component scaffolding | Generated initial structure for all 10 components | Reviewed & adjusted layout, spacing, and responsiveness |
| Tailwind classes | Suggested utility combinations for cards, buttons, gradients | Tuned color palette to match Accredian branding exactly |
| Animation code | Generated `useCountUp` hook and IntersectionObserver logic | Tested timing and threshold values for feel |
| API route | Generated validation logic and response schema | Added proper TypeScript types and error handling |
| CSS custom properties | Suggested design tokens in `globals.css` | Chose specific colors, fonts, and hero mesh gradient values |
| README | Generated initial structure | Added project-specific details and honest AI attribution |

---

## 📈 Improvements I Would Make With More Time

1. **Database integration** — Replace in-memory lead storage with Supabase or PlanetScale (Prisma)
2. **Email notifications** — Send confirmation email to lead via Resend or SendGrid on form submit
3. **Admin dashboard** — Protected `/admin` page to view, filter, and export leads
4. **Animations** — Add Framer Motion for page transitions and scroll-triggered reveals
5. **Program detail pages** — Dynamic routes (`/programs/[slug]`) with full curriculum
6. **Real testimonial photos** — Use `next/image` with actual headshots
7. **i18n** — Multi-language support for global enterprise clients
8. **A/B testing** — Two hero variants for CTA copy optimization
9. **SEO** — Dynamic `generateMetadata` per section, OpenGraph images
10. **E2E tests** — Playwright tests for the lead form submit flow

---

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) for automatic deployments on every push.

---

## ✅ Checklist

- [x] Landing page — all sections
- [x] Navigation menu & footer
- [x] Fully responsive (mobile + desktop)
- [x] Clean and structured UI
- [x] Reusable components
- [x] Smooth navigation between sections
- [x] Next.js App Router
- [x] Functional components + hooks
- [x] Tailwind CSS
- [x] API integration (`/api/leads`)
- [x] Lead capture form (bonus)
- [x] README with setup, approach, AI usage, improvements
