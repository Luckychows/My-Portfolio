# Luckychowdary Uppalapati Portfolio

Modern cybersecurity-inspired portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, ShadCN-style UI primitives, and Three.js.

## Features

- Resume-derived content data source in `src/data/resume.ts`
- Dark futuristic cybersecurity UI
- Smooth Framer Motion reveals and loading transition
- Three.js particle background
- Custom cursor, spotlight hover states, parallax-style depth, and terminal section
- Major and minor project sections
- Resume download from `public/resume/Luckychowdary_Resume_Restructured.docx`
- SEO metadata, favicon, Open Graph-ready metadata
- Responsive, accessible structure for recruiters

## Folder Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  sections/
  ui/
  cyber-background.tsx
  custom-cursor.tsx
  loading-screen.tsx
  nav.tsx
  reveal.tsx
  spotlight-card.tsx
lib/
  utils.ts
public/
  favicon.svg
  og/og.svg
  resume/Luckychowdary_Resume_Restructured.docx
src/data/
  resume.ts
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Deploy.

## Updating Resume Data

The site renders from `src/data/resume.ts`. When the resume changes, extract the latest resume details and update that data object so every section stays consistent.

For PDF preview support, add a PDF version to `public/resume`, then update `resumeFile` in `src/data/resume.ts`.
