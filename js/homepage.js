// ── HERO ENTRANCE
function animateHero() {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    onComplete: () => {
      initScrollAnimations();
    }
  });
  // Using y: property (GSAP auto-converts to GPU-accelerated transform)
  tl.fromTo('.hero-brand',    { opacity:0, y:16 }, { opacity:1, y:0, duration:0.6, ease:'power2.out' }, 0)
    .fromTo('.hero-eyebrow',  { opacity:0, y:16 }, { opacity:1, y:0, duration:0.6, ease:'power2.out' }, 0.4)
    .fromTo('.hero-h1',       { opacity:0, y:24 }, { opacity:1, y:0, duration:0.75, ease:'power3.out' }, 0.45)
    .fromTo('.hero-sub',      { opacity:0, y:16 }, { opacity:1, y:0, duration:0.6,  ease:'power2.out' }, 0.6)
    .fromTo('.hero-actions',  { opacity:0, y:12 }, { opacity:1, y:0, duration:0.55, ease:'power2.out' }, 0.75)
    .fromTo('.hero-proof',    { opacity:0, y:10 }, { opacity:1, y:0, duration:0.5,  ease:'power2.out' }, 0.85)
    .fromTo('.hero-right',    { opacity:0 },       { opacity:1, duration:1.0, ease:'power2.inOut' },      1.1);
}

// ── SCROLL REVEALS (Intersection Observer - no forced reflows)
function initScrollAnimations() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.fromTo(entry.target,
          { opacity:0, y:30 },
          { opacity:1, y:0, duration:0.8, ease:'power3.out' }
        );
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // Count-up (Intersection Observer)
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toLocaleString() + suffix;
          }
        });
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -80px 0px' });

  document.querySelectorAll('[data-target]').forEach(el => {
    countObserver.observe(el);
  });
}

// ── TAX CALENDAR ANIMATIONS
const taxCalCards = document.querySelectorAll('.tax-cal-card');
const taxCalObserver = new IntersectionObserver((entries) => {
  let hasAnimated = false;
  entries.forEach((entry, index) => {
    if (entry.isIntersecting && !hasAnimated) {
      taxCalCards.forEach((card, i) => {
        card.style.willChange = 'transform, opacity';
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, delay: i * 0.12, ease: 'power2.out' }
        );
      });
      hasAnimated = true;
      taxCalObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

if (taxCalCards.length > 0) taxCalObserver.observe(taxCalCards[0]);

// ── DEADLINES ANIMATIONS (with Directional Variation)
const deadlineItems = document.querySelectorAll('.deadline-item');
const deadlineObserver = new IntersectionObserver((entries) => {
  let hasAnimated = false;
  entries.forEach((entry) => {
    if (entry.isIntersecting && !hasAnimated) {
      deadlineItems.forEach((item, index) => {
        item.style.willChange = 'transform, opacity';
        const position = index % 3;
        let fromX = 0, fromY = 0;
        if (position === 0) { fromX = -40; }
        else if (position === 1) { fromY = -30; }
        else { fromX = 40; }

        gsap.fromTo(item,
          { opacity: 0, x: fromX, y: fromY },
          { opacity: 1, x: 0, y: 0, duration: 0.6, delay: (index % 3) * 0.15, ease: 'power2.out' }
        );
      });
      hasAnimated = true;
      deadlineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

if (deadlineItems.length > 0) deadlineObserver.observe(deadlineItems[0]);

// ── WHO WE HELP ANIMATIONS
const whoCards = document.querySelectorAll('.who-card');
const whoObserver = new IntersectionObserver((entries) => {
  let hasAnimated = false;
  entries.forEach((entry) => {
    if (entry.isIntersecting && !hasAnimated) {
      whoCards.forEach((card, index) => {
        card.style.willChange = 'transform, opacity';
        gsap.fromTo(card,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, delay: index * 0.15, ease: 'power2.out' }
        );
      });
      hasAnimated = true;
      whoObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

if (whoCards.length > 0) whoObserver.observe(whoCards[0]);

// ── LATEST UPDATES ANIMATIONS
const updateItems = document.querySelectorAll('.update-card');
const updatesObserver = new IntersectionObserver((entries) => {
  let hasAnimated = false;
  entries.forEach((entry) => {
    if (entry.isIntersecting && !hasAnimated) {
      updateItems.forEach((item, index) => {
        item.style.willChange = 'transform, opacity';
        gsap.fromTo(item,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, delay: index * 0.12, ease: 'power2.out' }
        );
      });
      hasAnimated = true;
      updatesObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

if (updateItems.length > 0) updatesObserver.observe(updateItems[0]);
