# Light Sections Animation Upgrade
**Date:** 10 April 2026  
**Project:** aitaxadvisors  
**Scope:** Elevate four light-background sections with alternating animation approaches

---

## Overview

The four light sections (Tax Calendar, Who We Help, Deadlines, Latest Updates) currently have plain, static layouts that lack visual interest. This spec introduces alternating animation patterns to create movement and engagement without text changes or structural refactoring.

All existing text, content structure, and SEO elements remain unchanged. Only visual presentation and animations are modified.

---

## Sections & Animation Assignments

### 1. Tax Calendar - Approach 1: Card Elevation + Scroll Reveals
**Current state:** Plain light background, grid of white cards  
**Animation treatment:**
- Cards slide in from bottom on scroll trigger (staggered timing)
- Each card animates in with a subtle scale effect (0.95 to 1.0)
- Border animation: thin colored border animates from left to right on reveal
- Icon/text animates in with slight delay after card appears
- Hover state: card lifts slightly (translateY -4px), shadow deepens, border glows faintly
- All animations use GSAP ScrollTrigger for scroll-based timing

**Visual outcome:** Cards feel responsive and purposeful as user scrolls into section

---

### 2. Who We Help - Approach 2: Layered Depth + Parallax
**Current state:** Plain light background, three white cards in grid  
**Animation treatment:**
- Background has subtle animated gradient that slowly shifts hue (using GSAP animation loop)
- Cards have layered pseudo-elements creating depth illusion
- Parallax effect: background layer moves at 60% of scroll speed (slower than foreground)
- Card borders animate in with gradient effect (direction varies per card)
- Hover state: card gets subtle 3D transform (rotateX/Y), shadow depth increases
- Decorative animated shapes/borders respond to scroll position

**Visual outcome:** Section feels alive with moving background while cards maintain stability

---

### 3. Deadlines - Approach 1: Card Elevation + Scroll Reveals
**Current state:** Plain light background, three deadline cards with left border  
**Animation treatment:**
- Cards slide in from different directions (left card: left, center: center, right: right)
- Staggered timing: each card enters 0.2s apart
- Left border animates in with color fill from top to bottom
- Date/title text animates in with opacity and slight translateY
- Badge/icon appears with scale animation after card settles
- Hover state: card lifts, border glows red (matches deadline theme), shadow expands

**Visual outcome:** Sense of urgency and movement tied to deadline importance

---

### 4. Latest Updates - Approach 2: Layered Depth + Parallax
**Current state:** Plain light background, list/grid of update items  
**Animation treatment:**
- Background animated gradient shifts slowly through related colors
- Parallax scrolling: background moves opposite to scroll at varying speeds
- Update items have layered border animations (outer border animates in first, inner border follows)
- Text content fades in with slight upward motion on scroll
- Hover state: item gets subtle 3D perspective effect, decorative accent line animates in
- Optional: floating animated elements (shapes/icons) orbit or drift near items

**Visual outcome:** Updates feel dynamic and engaging, background motion creates depth

---

## Technical Implementation

### Libraries
- GSAP 3.12.5 (already loaded)
- ScrollTrigger plugin (already loaded)
- Lenis for smooth scroll (already loaded, optional enhancement)

### Timing & Performance
- All scroll-triggered animations use `willChange: 'transform'` to optimize GPU rendering
- Stagger delays: 0.1-0.2s between cards (feels snappy, not sluggish)
- Animation duration: 0.6-0.8s for entrance effects
- Hover animations: 0.3s for smooth response

### Color & Style Consistency
- Approach 1 sections use existing card colors + subtle glow effects
- Approach 2 sections use existing background with animated gradient overlays
- All animations respect the aitaxadvisors navy/blue/red color scheme
- No new colors introduced; use existing CSS variables

---

## What Stays the Same

- All HTML text content unchanged
- Card/grid layouts unchanged
- Responsive breakpoints unchanged
- SEO meta tags and schema unchanged
- Font families and typography unchanged
- Mobile experience respects animations (reduced on smaller viewports if needed)

---

## Success Criteria

1. All four sections visually "dance" with purposeful animations
2. Animations trigger on scroll (feel responsive to user action)
3. No performance degradation (60fps animations, no jank)
4. Hover states feel premium and interactive
5. Alternating approaches create visual variety (not repetitive)
6. Current text and content fully preserved

---

## Next Steps

1. Implement Approach 1 animations on Tax Calendar and Deadlines
2. Implement Approach 2 animations on Who We Help and Latest Updates
3. Test scroll performance and hover responsiveness
4. Refine timing and easing curves based on feel
5. Mobile testing and animation adjustments for smaller screens
