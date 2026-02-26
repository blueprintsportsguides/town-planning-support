# Town Planning Support Website

A modern, professional Next.js website for Town Planning Support Ltd - Chartered Town Planning Consultants based in Southern England.

## Features

- **Modern Design**: Clean, professional design with a sage/forest green colour palette
- **Fully Responsive**: Optimised for mobile, tablet, and desktop devices
- **SEO Optimised**: Comprehensive metadata, Open Graph tags, and JSON-LD structured data
- **Fast Performance**: Static generation with Next.js App Router
- **Accessible**: Built with accessibility best practices
- **Animated**: Smooth animations using Framer Motion

## Pages

- **Home**: Hero, services overview, why choose us, process, about preview, CTA
- **Services**: Overview of all planning services
  - Appraisals: Site assessment and policy review
  - Applications: Planning application preparation and submission
  - Appeals: Appeal preparation and management
- **About**: Team profiles and company history
- **FAQ**: Common planning questions with SEO-optimised content
- **Contact**: Contact form and direct contact details
- **Privacy Policy**: Privacy policy page
- **Terms of Service**: Terms of service page

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
cd town-planning-support

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

The project is configured for easy deployment to Vercel:

1. Push to a GitHub repository
2. Import the project in Vercel
3. Deploy

No additional configuration required.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── faq/
│   ├── privacy/
│   ├── services/
│   │   ├── appeals/
│   │   ├── applications/
│   │   └── appraisals/
│   ├── terms/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── faq/               # FAQ accordion
│   ├── forms/             # Contact form
│   ├── layout/            # Header, footer
│   ├── sections/          # Homepage sections
│   ├── seo/               # JSON-LD structured data
│   └── ui/                # Reusable UI components
└── lib/
    ├── constants.ts       # Site content and data
    └── utils.ts           # Utility functions
```

## Customisation

### Content

All site content (team info, services, FAQs, etc.) is centralised in `src/lib/constants.ts` for easy updates.

### Colours

The colour palette is defined in `src/app/globals.css` using CSS custom properties. The design uses:

- **Forest green**: Primary brand colour
- **Sage green**: Secondary/accent colour
- **Cream**: Background colours

### Contact Form

The contact form in `src/components/forms/contact-form.tsx` currently logs to console. To make it functional:

1. Add a form handling service (e.g., Formspree, EmailJS, or custom API)
2. Update the `handleSubmit` function accordingly

## SEO

The site includes:

- Comprehensive metadata for all pages
- Open Graph and Twitter Card support
- JSON-LD structured data (Organization, LocalBusiness, Service, FAQ)
- Automatic sitemap generation
- robots.txt configuration

## Performance

- Static page generation for all routes
- Optimised images and fonts
- Minimal client-side JavaScript
- Efficient CSS with Tailwind

## License

Private - Town Planning Support Ltd

---

Built with Next.js
