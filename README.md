# piotrwesolowski.com

Modern, responsive personal homepage for Piotr Wesołowski — backend software engineer. Built with Next.js (App Router), Tailwind CSS, TypeScript, Framer Motion, and next-themes. Designed for fast performance, SEO, and deployment on Vercel.

## Tech Stack

- Next.js 15 (App Router, TypeScript, Vercel ready)
- Tailwind CSS 4
- Framer Motion (lightweight animation)
- next-themes (dark/light mode toggle)
- clsx & tailwind-merge (utility helpers)

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` to view the site. Edits to files in `src/` hot-reload automatically.

3. **Lint the project** (optional)

   ```bash
   npm run lint
   ```

## Project Structure

- `src/app/layout.tsx` – root layout, global metadata, fonts, theme provider
- `src/app/page.tsx` – home page composition for Hero, About, Skills, Experience, Projects, Contact sections
- `src/app/globals.css` – Tailwind layers, global styles, focus states
- `src/components/` – reusable UI components (header, footer, sections, theme toggle, etc.)
- `public/` – static assets (favicon, placeholder profile, Open Graph image)

## Customization

- Replace `public/profile-placeholder.svg` with a production-ready portrait if desired.
- Update copy and placeholder data in `src/components/*` to match real experience and projects.
- Adjust colors and spacing via Tailwind classes or `tailwind.config.ts`.
- Open Graph/Twitter metadata is configured in `src/app/layout.tsx`. Update domains or social handles if needed.

## Deployment

Deploying to Vercel is seamless:

```bash
npm run build
vercel --prod
```

Ensure you have the Vercel CLI authenticated (`vercel login`). The project includes metadata, favicon, and Open Graph image for production.

## License

All rights reserved. Contact Piotr Wesołowski for usage permissions.

