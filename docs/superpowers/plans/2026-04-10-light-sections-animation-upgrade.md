# Light Sections Animation Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Animate four light-background sections in aitaxadvisors with alternating approaches: card elevation with scroll reveals (Tax Calendar, Deadlines) and layered depth with parallax (Who We Help, Latest Updates).

**Architecture:** All animations use GSAP ScrollTrigger which is already loaded. CSS additions define animation states and timing. JavaScript initialization triggers ScrollTrigger observers on each section. No HTML changes, no text changes, no new dependencies.

**Tech Stack:** GSAP 3.12.5 (already loaded), ScrollTrigger plugin (already loaded), CSS animations/transforms, vanilla JavaScript

**Critical Constraint:** Visual continuity from top to bottom. Alternating approaches should feel like one cohesive journey, not jarring transitions. Timing, easing, and color palette must flow naturally across all four sections.

---

## File Structure

**Files to modify:**
- `index.html` - Add animation CSS to `<style>` block, add animation initialization script before closing `</body>`

**No new files needed** - All animations inline in existing HTML

---

## Task 1: Tax Calendar Animations (Approach 1 - Card Elevation + Scroll Reveals)

**Files:**
- Modify: `index.html` (CSS section around line 750-850, before closing `</style>`)

**Goal:** Cards slide in from bottom with staggered timing, borders animate in, hover creates lift and glow. This is the entry point - set the tone for animation timing and easing that subsequent sections will reference.

- [ ] **Step 1: Add CSS for tax calendar card animations**

Locate the `#tax-calendar` section in the CSS (around line 780). Add these classes after the existing `.tax-cal-*` styles:

```css
/* Tax Calendar - Approach 1 Animations */
.tax-cal-card {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.tax-cal-card.reveal {
  opacity: 1;
  transform: translateY(0);
}

.tax-cal-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--blue), transparent);
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left;
  animation: borderReveal 0.8s ease forwards;
}

@keyframes borderReveal {
  to {
    opacity: 1;
    transform: scaleX(1);
  }
}

.tax-cal-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 88, 149, 0.2);
}

.tax-cal-card:hover::before {
  background: linear-gradient(90deg, var(--blue), var(--blue-light));
}
```

- [ ] **Step 2: Update HTML for tax calendar cards to add reveal class**

Find the `.tax-cal-grid` section in the HTML (around line 1650-1700). Wrap each card in a div with class `tax-cal-card`:

```html
<div class="tax-cal-grid">
  <div class="tax-cal-card">
    <div class="tax-cal-item">
      <!-- existing content -->
    </div>
  </div>
  <!-- repeat for other cards -->
</div>
```

- [ ] **Step 3: Add ScrollTrigger initialization for tax calendar**

This will be added in Task 5 (animation JS initialization).

- [ ] **Step 4: Test tax calendar animations in browser**

Open `index.html` in browser. Scroll to Tax Calendar section. Verify:
- Cards fade in and slide up from bottom
- Each card enters with 0.12s delay (staggered effect)
- Borders animate from left to right
- Hovering over card lifts it and intensifies border color
- No jank or stuttering

- [ ] **Step 5: Commit tax calendar animations**

```bash
git add index.html
git commit -m "feat: add Approach 1 animations to tax calendar section

Cards now reveal with staggered scroll-triggered animations, animated
borders, and enhanced hover states. Uses GSAP ScrollTrigger.

Sets animation tone for subsequent sections (0.6s duration, 0.12s stagger)."
```

---

## Task 2: Who We Help Animations (Approach 2 - Layered Depth + Parallax)

**Files:**
- Modify: `index.html` (CSS section, then JS section)

**Goal:** Background gradient animates slowly, cards have layered borders with parallax effect, 3D hover transforms. Must feel like a natural progression from Tax Calendar - parallax adds visual depth while maintaining consistent timing principles.

- [ ] **Step 1: Add CSS for Who We Help parallax and gradient animations**

Find `#who-we-help` section in CSS (around line 840). Add after existing styles:

```css
/* Who We Help - Approach 2 Animations */
#who-we-help {
  background: linear-gradient(135deg, #f5f4f2, #faf9f7);
  animation: subtleGradientShift 20s ease infinite;
  position: relative;
  overflow: hidden;
}

@keyframes subtleGradientShift {
  0% { background: linear-gradient(135deg, #f5f4f2, #faf9f7); }
  50% { background: linear-gradient(135deg, #faf9f7, #f5f4f2); }
  100% { background: linear-gradient(135deg, #f5f4f2, #faf9f7); }
}

.who-card {
  position: relative;
  opacity: 0;
  transform: translateY(20px);
}

.who-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid rgba(0, 88, 149, 0.2);
  border-radius: 6px;
  opacity: 0;
  animation: borderGlow 1s ease forwards;
}

@keyframes borderGlow {
  to {
    opacity: 1;
    box-shadow: 0 0 16px rgba(0, 88, 149, 0.15);
  }
}

.who-card:hover {
  transform: perspective(1000px) rotateX(2deg) rotateY(-2deg);
  box-shadow: 0 16px 40px rgba(0, 88, 149, 0.15);
}

.who-card:hover::before {
  box-shadow: 0 0 24px rgba(0, 88, 149, 0.3);
}
```

- [ ] **Step 2: Add parallax background layer HTML**

Before `.who-grid` in HTML, add a parallax layer:

```html
<div class="parallax-layer" id="whoParallax" style="position: absolute; top: 0; left: 0; right: 0; height: 100%; opacity: 0.1; z-index: 0; pointer-events: none;">
  <div style="background: linear-gradient(45deg, var(--blue), var(--blue-light)); width: 100%; height: 100%;"></div>
</div>
<div style="position: relative; z-index: 1;">
  <!-- existing .container content -->
</div>
```

- [ ] **Step 3: Test Who We Help animations**

Scroll through Who We Help section. Verify:
- Background gradient slowly shifts color smoothly
- Background layer moves at different speed than scroll (parallax)
- Cards fade in with slight upward motion
- Borders glow with subtle box-shadow
- Hover creates 3D perspective tilt effect
- No performance issues

- [ ] **Step 4: Commit Who We Help animations**

```bash
git add index.html
git commit -m "feat: add Approach 2 animations to Who We Help section

Adds animated gradient background, parallax scrolling layer, and 3D
hover transforms to cards. Uses ScrollTrigger for timing.
Maintains visual continuity from Tax Calendar with consistent easing."
```

---

## Task 3: Deadlines Animations (Approach 1 - Card Elevation + Scroll Reveals)

**Files:**
- Modify: `index.html` (CSS section)

**Goal:** Cards slide from different directions (left, center, right), red left border animates in, hover emphasizes urgency. Return to Approach 1 but with directional variation to maintain visual interest while staying cohesive with Tax Calendar rhythm.

- [ ] **Step 1: Add CSS for Deadlines card animations**

Find `#deadlines` section in CSS (around line 930). Add these styles after existing `.deadline-*` rules:

```css
/* Deadlines - Approach 1 Animations */
.deadline-item {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
  position: relative;
}

.deadline-item:nth-child(2) {
  transform: translateY(-30px);
}

.deadline-item:nth-child(3) {
  transform: translateX(40px);
}

.deadline-item.reveal {
  opacity: 1;
  transform: translateX(0) translateY(0);
}

.deadline-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 0%;
  background: var(--red);
  animation: borderFillRed 0.8s ease forwards;
}

@keyframes borderFillRed {
  to {
    height: 100%;
  }
}

.deadline-item:hover {
  transform: translateX(0) translateY(0) translateY(-6px);
  box-shadow: 0 16px 40px rgba(230, 31, 50, 0.2);
  border-left-color: var(--red);
}

.deadline-item:hover::before {
  background: var(--red);
  box-shadow: 0 0 12px rgba(230, 31, 50, 0.4);
}
```

- [ ] **Step 2: Test Deadlines animations**

Scroll to Deadlines section. Verify:
- Left card slides in from left
- Center card slides in from top
- Right card slides in from right
- Staggered timing creates wave effect
- Red left border fills from top to bottom
- Hover lifts card up and intensifies red border glow
- Animation feels urgent and responsive

- [ ] **Step 3: Commit Deadlines animations**

```bash
git add index.html
git commit -m "feat: add Approach 1 animations to Deadlines section

Cards reveal from directional positions with staggered timing.
Red borders animate with fill effect. Hover creates urgency emphasis.
Maintains Approach 1 rhythm while adding directional variation for continuity."
```

---

## Task 4: Latest Updates Animations (Approach 2 - Layered Depth + Parallax)

**Files:**
- Modify: `index.html` (CSS and HTML structure)

**Goal:** Background parallax layer, layered borders animate in, items fade with parallax scroll effect, 3D hover. Final section returns to Approach 2 with refined parallax experience, completing the alternating pattern smoothly.

- [ ] **Step 1: Identify Latest Updates section structure**

Find `#latest-updates` in HTML. Ensure section has correct ID and structure.

- [ ] **Step 2: Add CSS for Latest Updates parallax and animations**

Add to CSS section:

```css
/* Latest Updates - Approach 2 Animations */
#latest-updates {
  background: linear-gradient(135deg, #f5f4f2, #faf9f7);
  animation: subtleGradientShift2 20s ease infinite;
  position: relative;
  overflow: hidden;
}

@keyframes subtleGradientShift2 {
  0% { background: linear-gradient(135deg, #f5f4f2, #faf9f7); }
  50% { background: linear-gradient(135deg, #faf9f7, #f5f4f2); }
  100% { background: linear-gradient(135deg, #f5f4f2, #faf9f7); }
}

.update-item {
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  border: 1px solid rgba(10, 17, 40, 0.08);
  border-radius: 6px;
  padding: 2rem;
  background: var(--white);
}

.update-item::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid rgba(0, 88, 149, 0);
  border-radius: 6px;
  animation: borderGlowUpdate 1.2s ease forwards;
}

@keyframes borderGlowUpdate {
  to {
    border-color: rgba(0, 88, 149, 0.3);
    box-shadow: inset 0 0 16px rgba(0, 88, 149, 0.1);
  }
}

.update-item:hover {
  transform: perspective(1000px) rotateX(3deg) rotateY(-3deg) translateZ(20px);
  box-shadow: 0 20px 48px rgba(0, 88, 149, 0.15);
}

.update-item:hover::before {
  border-color: rgba(0, 88, 149, 0.5);
  box-shadow: inset 0 0 24px rgba(0, 88, 149, 0.2);
}
```

- [ ] **Step 3: Add parallax background layer**

Add parallax layer before `.container`:

```html
<section id="latest-updates">
  <div class="parallax-layer" id="updatesParallax" style="position: absolute; top: 0; left: 0; right: 0; height: 100%; opacity: 0.08; z-index: 0; pointer-events: none;">
    <div style="background: linear-gradient(135deg, var(--blue), var(--blue-light)); width: 100%; height: 100%;"></div>
  </div>
  <div class="container" style="position: relative; z-index: 1;">
    <!-- existing content -->
  </div>
</section>
```

- [ ] **Step 4: Ensure update items have correct structure**

Verify each update item has class `update-item`.

- [ ] **Step 5: Test Latest Updates animations**

Scroll to Latest Updates section. Verify:
- Background gradient animates smoothly
- Parallax layer moves opposite to scroll
- Update items fade in and slide up
- Borders have inner glow effect
- Hover creates 3D perspective and depth effect
- Smooth parallax without jank

- [ ] **Step 6: Commit Latest Updates animations**

```bash
git add index.html
git commit -m "feat: add Approach 2 animations to Latest Updates section

Adds animated gradient background with parallax layer, item reveals,
and 3D perspective hover effects. Uses ScrollTrigger for timing.
Completes alternating animation pattern with refined parallax experience."
```

---

## Task 5: Animation JS Initialization & Performance Optimization

**Files:**
- Modify: `index.html` (add script before closing `</body>`)

**Goal:** Initialize all GSAP ScrollTrigger animations in a single organized script. Optimize performance. Ensure consistent timing across all four sections for visual continuity.

- [ ] **Step 1: Add consolidated animation script before closing `</body>`**

```html
<script>
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ============================================
// 1. TAX CALENDAR - Approach 1
// ============================================
const taxCalCards = document.querySelectorAll('.tax-cal-card');
taxCalCards.forEach((card, index) => {
  card.style.willChange = 'transform, opacity';
  gsap.timeline({
    scrollTrigger: { trigger: card, start: 'top 85%', once: true }
  })
  .to(card, { opacity: 1, y: 0, duration: 0.6, delay: index * 0.12, ease: 'power2.out' });
});

// ============================================
// 2. WHO WE HELP - Approach 2
// ============================================
const whoParallax = document.getElementById('whoParallax');
const whoCards = document.querySelectorAll('.who-card');

if (whoParallax) {
  gsap.timeline({ scrollTrigger: { trigger: '#who-we-help', start: 'top 80%', end: 'bottom 20%', scrub: 0.5 } })
  .to(whoParallax, { y: -30, ease: 'none' }, 0);
}

whoCards.forEach((card, index) => {
  card.style.willChange = 'transform, opacity';
  gsap.timeline({ scrollTrigger: { trigger: card, start: 'top 85%', once: true } })
  .to(card, { opacity: 1, y: 0, duration: 0.7, delay: index * 0.15, ease: 'power2.out' });
});

// ============================================
// 3. DEADLINES - Approach 1
// ============================================
const deadlineItems = document.querySelectorAll('.deadline-item');
deadlineItems.forEach((item, index) => {
  item.style.willChange = 'transform, opacity';
  gsap.timeline({ scrollTrigger: { trigger: item, start: 'top 85%', once: true } })
  .to(item, { opacity: 1, x: 0, y: 0, duration: 0.6, delay: index * 0.15, ease: 'power2.out' });
});

// ============================================
// 4. LATEST UPDATES - Approach 2
// ============================================
const updatesParallax = document.getElementById('updatesParallax');
const updateItems = document.querySelectorAll('.update-item');

if (updatesParallax) {
  gsap.timeline({ scrollTrigger: { trigger: '#latest-updates', start: 'top 80%', end: 'bottom 20%', scrub: 0.5 } })
  .to(updatesParallax, { y: -40, ease: 'none' }, 0);
}

updateItems.forEach((item, index) => {
  item.style.willChange = 'transform, opacity';
  gsap.timeline({ scrollTrigger: { trigger: item, start: 'top 85%', once: true } })
  .to(item, { opacity: 1, y: 0, duration: 0.7, delay: index * 0.12, ease: 'power2.out' });
});

window.addEventListener('resize', () => ScrollTrigger.refresh());
</script>
```

- [ ] **Step 2: Test page scroll performance**

Open DevTools (F12), Performance tab. Scroll all sections. Expected: 60fps, no jank.

- [ ] **Step 3: Test mobile performance**

Device emulation (iPhone 12). Expected: Smooth animations, 30-45fps acceptable.

- [ ] **Step 4: Test cross-browser**

Chrome, Firefox, Safari. Expected: Consistent animations.

- [ ] **Step 5: Commit animation initialization**

```bash
git add index.html
git commit -m "feat: add GSAP ScrollTrigger initialization for all animations

Consolidated animation setup for Tax Calendar, Who We Help, Deadlines,
and Latest Updates sections. Performance optimized (willChange, refresh).
All sections maintain consistent timing for visual continuity."
```

---

## Task 6: Verify Continuity & Final Polish

**Files:**
- Review: `index.html` (visual verification only, no code changes)

**Goal:** Confirm alternating approaches feel cohesive from top to bottom. Verify continuity in timing, easing, color palette, and interactions.

- [ ] **Step 1: Full page scroll continuity check**

Scroll top to bottom observing:
- Tax Calendar (Approach 1) to Who We Help (Approach 2): Transition natural?
- Who We Help (Approach 2) to Deadlines (Approach 1): Variation feels right?
- Deadlines (Approach 1) to Latest Updates (Approach 2): Pattern completes smoothly?

Expected: One cohesive visual journey, not jarring.

- [ ] **Step 2: Hover interaction consistency**

Test each section's hover. Expected: Approach 1 lifts/glows, Approach 2 tilts/deepens.

- [ ] **Step 3: Timing consistency verification**

Note: All durations 0.6-0.7s, stagger 0.12-0.15s, easing power2.out. Expected: Professional feel.

- [ ] **Step 4: Viewport responsiveness**

Test desktop (1400px), tablet (768px), mobile (375px). Expected: Continuity maintained across widths.

- [ ] **Step 5: Content verification**

All original text/dates/titles present. Expected: 100% content preserved.

- [ ] **Step 6: Visual assessment summary**

Do the alternating approaches feel like one cohesive journey? If yes, proceed. If no, note specific timing/easing adjustments needed.

- [ ] **Step 7: Final git log**

```bash
git log --oneline -7
```

Expected: All 6 task commits visible.

---

**Plan complete and tracked in TaskCreate.**

Ready to dispatch subagents for execution. Will maintain visual continuity as the critical constraint throughout all tasks.
