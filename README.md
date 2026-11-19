# Garima Paliwal: Portfolio

Next.js 14 + TypeScript + Tailwind CSS + Lucide icons.

## Run locally
1. Install Node.js 18.18 or newer.
2. `npm install`
3. `npm run dev` then open http://localhost:3000

## Edit content
Everything lives in `lib/content.ts`: text, projects, links, photo, certifications.
- Photo: put it in `public/` and set `photo: "/garima.jpg"`.
- Resume: replace `public/Garima-Paliwal-Resume.docx` (a PDF is better; update `resumeFile`).
- Project links: fill `github` and `live` for each project.

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Go to vercel.com, sign in with GitHub, choose Add New, Project, and import the repo.
3. Keep the defaults (Framework: Next.js) and click Deploy. Every push redeploys automatically.
