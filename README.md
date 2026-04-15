# American International Tax Advisers - New Website

Modern, responsive website for American International Tax Advisers with complete SEO implementation and Cloudflare deployment ready.

## Quick Start

**Current Branch**: `cloudflare` (ready for deployment)
**Status**: ✅ Complete and ready for Cloudflare Pages

### Push to GitHub

```bash
git push origin cloudflare
```

### Deploy to Cloudflare

1. Go to https://dash.cloudflare.com/ > Pages
2. Connect this GitHub repo
3. Select `cloudflare` branch
4. Leave build command empty (static site)
5. Deploy

See `md/GIT-SETUP.md` for detailed instructions.

## What's New

- Complete website redesign
- Full SEO optimization (meta tags, structured data, JSON-LD)
- Local fonts (Libre Baskerville + Inter variable fonts)
- robots.txt and sitemap.xml
- Schema markup for rich snippets
- Open Graph and Twitter Card tags
- Mobile-first responsive design
- All images optimised (WebP format)

## Documentation

All documentation is in the `/md/` folder (not deployed):

- `md/GIT-SETUP.md` - Git and Cloudflare deployment guide
- `md/SEO-SETUP-SUMMARY.md` - Complete SEO overview
- `md/SEO-IMPROVEMENTS.md` - Detailed SEO guide
- `md/IMPLEMENTATION-CHECKLIST.txt` - Step-by-step checklist
- `md/META-TAGS-TO-ADD.html` - Reference HTML
- `md/seo-schema.json` - Structured data reference

## File Structure

```
├── index.html           # Main website
├── robots.txt          # SEO - crawler directives
├── sitemap.xml         # SEO - URL map
├── wrangler.jsonc      # Cloudflare config
├── fonts/              # Local fonts (no CDN dependency)
├── images/             # All WebP optimised
├── md/                 # Documentation (gitignored, not deployed)
├── .gitignore          # Git exclusions
└── README.md           # This file
```

## Git Branches

- **cloudflare** (current) - New version ready for deployment
- **master** - Original version (archive)

Both branches share the same commit history.

## Next Steps

1. [x] Website redesign complete
2. [x] SEO implementation done
3. [x] Git repository initialized
4. [ ] **Push to GitHub**: `git push origin cloudflare`
5. [ ] **Connect to Cloudflare Pages**
6. [ ] Test live deployment
7. [ ] Configure custom domain
8. [ ] Monitor search console

## Support & Resources

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Git Docs**: https://git-scm.com/doc
- **SEO Guide**: See `md/SEO-IMPROVEMENTS.md`

---

Built with professional SEO best practices and modern web standards.
Ready for enterprise deployment.

**Last Updated**: 10 April 2026
**Cloudflare Deployment**: Ready - Linked to cloudflare branch
