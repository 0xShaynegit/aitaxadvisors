# HANDOVER aitaxadvisors

Sliding session log. Newest entry first. Update at end of every session.

## Current State (07/13/2026, continued)
- Site now has 3 countries live: Thailand (14 pages), Oman (9 pages), Saudi Arabia (11 pages), all under one nested "Countries" flyout dropdown in the desktop nav (Countries > country name > that country's pages) plus a flat country list in the mobile menu.
- A one-shot playbook for adding future countries lives at `md/playbook-new-country.md` (gitignored, not deployed, local reference only). Read it before adding country #4.
- `js/chaty-widget.js`: floating bottom-left contact widget (Phone/Email/Facebook/Messenger), ported from a sibling project and rebranded. Labels adapt color to whatever's behind them at runtime (near-white on dark sections, brand blue on light sections).
- Legal pages live: `/privacy-policy.html`, `/terms-of-service.html`, `/disclaimer.html` (dark navy background standard, not attorney-reviewed, draft template language). Linked from every page's footer bottom bar.
- Standing rules now baked into every page: no em dashes anywhere, no generic "Get the Full Guide" CTA text (must be content-specific), no "Download Checklist" button (nothing is actually downloadable, and it shouldn't link to email), no duplicate photos within a single page, and `professional-man-formal-bow-tie-confident-*.webp` (a real team member's photo, likely Thomas Carden per the site's schema data) is homepage-only, never reused on article pages.

## Current State (07/13/2026)
- Site complete and Cloudflare Pages deployment-ready on the cloudflare branch (per README).
- SEO implementation done, lighthouse reports present in repo.
- Folder recently active (registry testing variant exists at C:\ZZZZProjects Testing Samples\aitaxadvisors-registry).
- NEW: `oman/` folder built this session — mirrors the `thailand/` folder pattern (no separate index.html; flagship page is the hub). 8 pages, all reusing `css/thailand.css` and existing generic image assets (no Oman-specific photography exists yet).

## Next Steps
- Oman pages reuse generic stock images (flag/currency/professional shots) since no Gulf/Oman-specific photography is in `images/`. Consider sourcing Oman/desert/Muscat imagery if visual differentiation from Thailand pages matters.
- Nav dropdown in `oman/*.html` pages ("Countries") only lists 3 Oman links + Thailand links — could expand to include all 8 Oman pages if desired.
- No `oman/base-template.html` was created (unlike `thailand/base-template.html`) — the generator script effectively replaced it. If future Oman pages are added by hand, either build from an existing Oman page or ask to generate a base-template.
- robots.txt / _headers not touched — only sitemap.xml updated with the 8 new Oman URLs.

## Session Log
- 07/13/2026 | Built full Oman expat tax content suite (`oman/` folder), mirroring `thailand/` structure. Pages: us-expat-taxes-oman-2026 (hub), filing-us-taxes-from-oman, feie-oman-tax-free-income, no-us-oman-tax-treaty-totalization, oman-2028-income-tax-us-expats, retiring-in-oman-us-tax-planning, us-oman-expat-tax-checklist-2026, us-expat-teachers-tax-oman. Content grounded in user-supplied research on Oman's 2028 personal income tax, lack of US-Oman tax treaty/Totalization Agreement, FEIE mechanics, FBAR/FATCA, PFIC risk, and End of Service Gratuity (EOSG) tax treatment. Updated sitemap.xml with 8 new Oman URLs.
- 07/07/2026 | Retrofit: rules.md and handover.md created, seeded from README.md and folder scan.
