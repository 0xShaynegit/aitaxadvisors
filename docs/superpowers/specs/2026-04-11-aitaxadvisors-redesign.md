# AI Tax Advisors Website Redesign Specification
**Date:** 11 April 2026
**Project:** AI Tax Advisors (aitaxadvisors.com) - Complete Website Polish
**Status:** Approved Design Spec
**Approach:** Phased Complete Redesign (4-5 phases)

---

## Overview

This spec codifies the complete redesign of aitaxadvisors.com across 7 major areas, organised into phased implementation. The redesign preserves existing brand (navy, blue, white, Libre Baskerville + Inter typography) while applying modern layout discipline, improved scannability, mobile-first responsiveness, and systematic CTAs.

---

## Phase 1: Hero + Trust Band + Navigation

### Hero Section

**Layout:**
- Left side: Solid navy background (#0A1128) containing all text content
- Right side: Positioned image of Thomas (team owner/principal)
- Not full-bleed; hero sits within standard container width

**Content Hierarchy (Left Side):**
1. Headline: Serif (Libre Baskerville), bold, large (4rem+), platinum text (#E5E4E2)
   - Example: "Asia's Best U.S. Tax Firm. Not a Claim. A Record."
2. Stat Line: Sans-serif (Inter), smaller (1.1rem), blue accent (#005895)
   - Positioned between headline and supporting sentence
   - Example: "15+ years serving expats in Asia"
3. Supporting Sentence: Sans-serif, 18px, platinum, 1.8 line-height
   - One sentence, clear and concise
4. CTAs: Two buttons, side-by-side, 16px height minimum
   - Primary: "Book a Free Consult" (solid blue #005895, platinum text)
   - Secondary: "View Services" (outlined style, blue border)

**Image Specifications:**
- Thomas photo positioned right of content
- Maintain aspect ratio, optimized for web (WebP format)
- Mobile: Image moves below text, stacks vertically

**Typography Scale:**
- Headline: 4-5rem on desktop, 2.5rem on mobile
- Stat: 1.1rem consistent
- Body: 18px consistent across devices
- Line height: 1.8 for body text

**Mobile Behaviour:**
- Stack vertically: Text (navy background) above image (full width)
- Full-width layout
- Buttons stack vertically, full-width (90% viewport width, centered)

---

### Trust Band

**Position:** Immediately below hero section

**Layout:** Horizontal strip with 4 metrics
- Dark navy background (#0A1128)
- Responsive grid: 4 columns (desktop), 2x2 (tablet), 1 column (mobile)
- Gap: 2rem desktop, 1.5rem tablet/mobile

**Metrics (Example):**
1. Embassy Listed / U.S. Embassy Bangkok Official Tax Consultant
2. 15+ Years / Serving expats across Asia
3. 8 Offices / Thailand, Singapore, Cambodia + more
4. 5000+ Clients / Successful tax returns filed

**Card Style:**
- Large number (bold, 2.5rem, blue #005895)
- Short label (18px, platinum)
- Optional icon (monochrome, subtle)
- No border, centered text
- Padding: 2rem

---

### Navigation

**Desktop:**
- Sticky header, compact design
- Logo left
- Navigation center: Services, Why Us, How It Works, Updates, Contact
- CTA right: "Book a Free Consult" button (current style maintained)
- Keep current design as-is

**Mobile:**
- Hamburger menu icon
- Click opens half-screen slide-out menu from right edge
- Menu covers ~50% of viewport width
- Navigation items stacked vertically
- "Book a Free Consult" at top of menu
- Contact info accessible in menu

---

## Phase 2: Scannability & Layout Improvements

### Background Alternation Pattern

**Section Sequence:**
1. Hero: Navy background
2. Trust Band: Navy background
3. Services: Navy background
4. Why AI Tax Advisers: Platinum (#E5E4E2) background
5. Who We Help: Navy background
6. How It Works: Platinum background
7. Tax Calendar: Navy background
8. Testimonials: Platinum background
9. Timeline: Navy background
10. Final CTA: Navy or accent background
11. Footer: Navy background

**Text Colour Adjustment:**
- Navy sections: Platinum text (#E5E4E2)
- Platinum sections: Navy text (#0A1128) for high contrast

### Spacing & Padding

**Vertical Spacing:**
- Section padding: Minimum 4rem top/bottom
- Content gaps within sections: 2rem (desktop), 1.5rem (tablet/mobile)

**Horizontal Spacing:**
- Container padding: 2.5rem sides (desktop)
- Container padding: 1.5rem sides (mobile)
- Max-width: 1140px (preserved)

### Content Grids

**Flexible Grid Breakpoints (All Sections):**
- Desktop: 3 columns
- Tablet (768px-1023px): 2 columns
- Mobile (<768px): 1 column
- Gap: 2rem (desktop), 1.5rem (mobile)

**Grid Item Structure:**
- Icon (optional, 2rem x 2rem)
- Title (16px bold, navy or platinum per section background)
- Description (14-16px, 1.6 line-height)
- Consistent height via flexbox (items stretch to match tallest)

### Typography Standards

**Typographic Scale:**
- H1 (Serif): 4-5rem, bold, primary headings
- H2 (Serif): 2-2.5rem, medium-bold, section titles
- H3 (Sans-serif): 1.2rem, bold, card titles
- Body: 18px, 1.8 line-height
- Small: 14px (labels, captions)

**Emphasis:**
- Key phrases: Bold + blue accent (#005895)
- Example: "U.S. Embassy Listed" appears as bold blue
- No all-caps except acronyms (FBAR, FEIE)

---

## Phase 3: CTAs, Funnels, Testimonials & Timeline

### Contextual Section CTAs

**Placement:** End of each major section (after content, before next section)

**Button Style:**
- Solid blue background (#005895)
- Platinum text, bold
- 44px minimum height for mobile tap targets
- Hover: Scale 1.02, slight shadow deepening

**CTA Variations by Section:**
- Services: "Get Started"
- Why AI Tax Advisers: "Discuss Your Structure"
- Who We Help: "See If You Qualify"
- How It Works: "Book Your Consultation"

**Mobile:** Full-width (90% viewport), stacked if multiple buttons

### "Which Are You?" Decision Block

**Position:** Mid-page, after How It Works section

**Layout:**
- 4 cards in a row (desktop)
- 2x2 grid (tablet, 768px)
- Stacked 1 column (mobile)
- Gap: 2rem

**Card Options:**
1. Individual
2. Business
3. Digital Nomad
4. Retiree

**Card Structure:**
- Icon (2.5rem)
- Title (18px bold, navy)
- Description (14px, 1-2 sentences max)
- Link CTA: "Learn More" or "Explore Services" (inline link, blue)

**Styling:**
- Background: Light platinum/off-white
- Border: Subtle (1px navy with 0.08 opacity)
- Padding: 2rem
- Hover: Lift slightly (translateY -4px), border colour shift to blue

**Functionality:**
- Each card links to relevant content section or booking page with pre-filled category parameter

### Booking & Contact Page Flow

**Home Page CTA:**
- All "Book a Free Consult" buttons link to dedicated /contact or /booking page
- No form on home page

**Booking Page:**
- Multi-step or grouped form with:
  - Name (required)
  - Email (required)
  - Country/Region (required)
  - Brief description of tax situation (optional)
- Integrated calendar widget (date/time picker for scheduling)
- Privacy messaging: Top of form AND near submit button
  - Text: "All information treated confidentially. Replies within one business day."

### Testimonials Section

**Section Structure:**
- H2 Title: "What Our Clients Say" or similar
- Subheading (secondary text, slightly smaller):
  - Clarifies focus: "Reduced overpayments, fixed delinquent filings, expert guidance"
- Horizontally scrollable carousel below

**Carousel Layout:**
- Desktop: 2-3 testimonials visible at once (peek of next card)
- Tablet: 1.5 visible
- Mobile: Full-width cards
- Arrow navigation (left/right chevrons)
- Dot indicators showing position

**Testimonial Card:**
- Quote text (italic, 16px, 1.6 line-height)
- Client name (bold, 16px, navy/platinum per section)
- Status (14px, muted colour): Example "U.S. Expat in Thailand"
- Avatar or initials circle (24px, subtle background)
- Card background: Light border, subtle shadow
- Padding: 1.5rem

**Animation:**
- GSAP smooth slide transitions (0.6s easing)
- No auto-play (manual interaction only)
- Keyboard accessible (arrow keys navigate)

### Timeline & Deadline Sections

**Layout:** Vertical timeline

**Visual Structure:**
- Left column: Date badges (month + day, 3.5rem width)
- Center: Connecting line with dots at each milestone
- Right column: Deadline title + description

**Alternating Pattern:**
- Item 1: Badge left, content right
- Item 2: Content left, badge right
- Creates visual rhythm reading down page

**Urgency Colour Coding:**
- Brand Blue (#005895): Upcoming (4+ months)
- Orange (#FF9500): Imminent (1-3 months)
- Red (#e61f32): Critical/Overdue
- Colour applies to: Badge background, connecting dot, or accent line

**Content Per Item:**
- Deadline date (large, bold)
- Title (18px, bold)
- Description (14-16px, 1-2 sentences)

**Responsive Behaviour:**
- Desktop: Full alternating layout
- Tablet: Single column (badges above content, stacked)
- Mobile: Simplified single column, reduced badge size

**CTA:** "Get Deadline Reminders" at section end
- Links to dedicated calendar preferences/settings page
- Users can enable: Email alerts, calendar sync (Google/Outlook), SMS notifications
- Preferences persist for returning visitors

---

## Phase 4: Mobile-First & Footer Polish

### Mobile-First Development

**Approach:**
- Design responsive grids that start single-column
- Add multi-column enhancements at larger breakpoints
- Priorities: Readability, tap targets, performance

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+

**Text & Typography on Mobile:**
- Body text: 18px (never reduce below 16px)
- Line height: 1.8 (maintains readability)
- Headings scale proportionally
- Full-width sections with 1.5rem side padding

**CTA Buttons on Mobile:**
- Primary + secondary: Stack vertically (not side-by-side)
- Width: 90% of viewport, centred
- Height: 44px minimum (tap target accessibility)
- Padding: 1rem around buttons for error prevention

**Images & Performance:**
- All below-the-fold images: Lazy-load with loading="lazy"
- Hero image: WebP format with JPEG fallback
- Responsive srcset: Different sizes for mobile vs. desktop
- Target hero image: < 100KB mobile, < 200KB desktop

**Animations on Mobile:**
- Disable heavy GSAP parallax (y-transforms causing overflow)
- Simplify to: Fade-in (opacity), slide-up (translateY on scroll)
- Keep Lenis smooth scroll (no performance issues)
- Button hover: Scale 1.02 only on desktop (touch devices: none)

### Footer

**Layout (4 Columns):**
1. Contact: Phone, email, reassurance text
2. Services: Key service links
3. Company: About, offices, careers
4. Connect: Social media, newsletter

**Contact Column:**
- Phone number: Tappable tel: link, bold, blue accent (#005895)
- Email: Tappable mailto: link, bold, blue accent
- Text size: 16px, higher visual weight
- Reassurance line below:
  - Text: "Replies within one business day. All communications confidential."
  - Styling: Prominent (not small print), 14px, platinum or muted blue
  - Positioning: Directly below email

**Office Locations (in Company column):**
- City, country format
- Tappable to Google Maps
- Small map pin icon
- Example: "Bangkok, Thailand" | "Singapore, Singapore"

**Responsive:**
- Desktop: 4 equal-width columns
- Tablet: 2x2 grid
- Mobile: Single column, full-width

**Styling:**
- Background: Navy (#0A1128)
- Text: Platinum (#E5E4E2)
- Border-top: Subtle separator from content
- Padding: 3rem top/bottom, 2rem sides
- Links: Hover effect (colour shift or underline)

**Social Links (Connect column):**
- Icon style (16px-20px)
- Linked to social profiles
- Hover: Scale 1.1 or colour accent

---

## Colour Palette (Preserved)

- Navy (Primary): #0A1128
- Navy Mid: #0D1635
- Blue: #005895
- Blue Light: #1a6faa
- Red (Accent): #e61f32
- White: #ffffff
- Platinum (Light): #E5E4E2
- Silver/Muted: rgba(229, 228, 226, 0.75)
- Orange (Timeline): #FF9500 (new, for urgency)

---

## Typography (Preserved)

- Serif (Headings): Libre Baskerville
- Sans-serif (Body): Inter
- No additional fonts
- Scale: H1 4-5rem, H2 2-2.5rem, H3 1.2rem, Body 18px

---

## Implementation Order (Phases)

1. **Phase 1:** Hero + Trust Band + Navigation (highest impact, foundation)
2. **Phase 2:** Scannability improvements (section backgrounds, grids, spacing)
3. **Phase 3:** CTAs, "Which Are You?", Testimonials, Timeline
4. **Phase 4:** Mobile optimisation, footer, performance tweaks
5. **Phase 5:** Testing, refinement, launch

---

## Success Criteria

- Hero communicates expertise and trust immediately
- All CTAs are contextual and clear
- Mobile experience is smooth (lazy-loaded, simplified animations)
- Section backgrounds create natural visual breaks
- Responsiveness is seamless across all breakpoints
- Contact information is prominent and tappable
- Booking flow is simplified (no form on home page)
- Testimonials carousel scrolls smoothly
- Timeline urgency coding is visually clear

---

## Notes

- Preserve all current copy and messaging
- Keep existing brand identity and colour theme
- Use GSAP for animations (already loaded)
- Lazy-load all below-the-fold images
- Mobile-first development approach
- No external design tool deliverables; code-first implementation
