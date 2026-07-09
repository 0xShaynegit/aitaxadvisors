# PROJECT RULES aitaxadvisors

Read before touching anything. These rules do not change between sessions.

## Project Identity
- Project Name: American International Tax Advisers
- What it is: Static marketing website for a tax advisory firm, complete SEO implementation.
- Owner: Shayne
- Local folder: C:\ZZZWebsites\aitaxadvisors
- Working branch: cloudflare (deployment-ready)

## Stack and Deploy
- Pure static HTML, CSS, vanilla JS. No build process.
- Deploy: Cloudflare Pages only. Never Vercel.
- _headers file present for edge headers. llms.txt present.
- Lighthouse reports tracked in repo (lighthouse-report.json).

## Hard Rules
- No dev servers unless explicitly requested.
- No new frameworks or dependencies.
- Match existing page structure and CSS when adding pages.
- Update handover.md at the end of every session.
