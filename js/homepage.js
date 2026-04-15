// ── HERO ENTRANCE
function animateHero() {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    onComplete: () => {
      initScrollAnimations();
    }
  });
  tl.fromTo('.hero-brand',    { opacity:0, y:16 }, { opacity:1, y:0, duration:0.6, ease:'power2.out' })
    .fromTo('.hero-eyebrow',  { opacity:0, y:16 }, { opacity:1, y:0, duration:0.6, ease:'power2.out' }, '-=0.2')
    .fromTo('.hero-h1',       { opacity:0, y:24 }, { opacity:1, y:0, duration:0.75, ease:'power3.out' }, '-=0.3')
    .fromTo('.hero-sub',      { opacity:0, y:16 }, { opacity:1, y:0, duration:0.6,  ease:'power2.out' }, '-=0.35')
    .fromTo('.hero-actions',  { opacity:0, y:12 }, { opacity:1, y:0, duration:0.55, ease:'power2.out' }, '-=0.3')
    .fromTo('.hero-proof',    { opacity:0, y:10 }, { opacity:1, y:0, duration:0.5,  ease:'power2.out' }, '-=0.25')
    .fromTo('.hero-right',    { opacity:0 },       { opacity:1, duration:1.0, ease:'power2.inOut' },      '-=0.8');
}

// ── SCROLL REVEALS
function initScrollAnimations() {
  document.querySelectorAll('.reveal').forEach(el => {
    gsap.fromTo(el,
      { opacity:0, y:30 },
      {
        opacity:1, y:0,
        duration:0.8,
        ease:'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 84%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Count-up
  document.querySelectorAll('[data-target]').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    ScrollTrigger.create({
      trigger: el,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toLocaleString() + suffix;
          }
        });
      }
    });
  });
}

// ── TAX CALENDAR ANIMATIONS
gsap.registerPlugin(ScrollTrigger);
const taxCalCards = document.querySelectorAll('.tax-cal-card');
taxCalCards.forEach((card, index) => {
  card.style.willChange = 'transform, opacity';
  gsap.fromTo(card,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, delay: index * 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 85%', once: true }
    }
  );
});

// ── DEADLINES ANIMATIONS (with Directional Variation)
const deadlineItems = document.querySelectorAll('.deadline-item');
deadlineItems.forEach((item, index) => {
  item.style.willChange = 'transform, opacity';
  const position = index % 3;
  let fromX = 0, fromY = 0;
  if (position === 0) { fromX = -40; }
  else if (position === 1) { fromY = -30; }
  else { fromX = 40; }

  gsap.fromTo(item,
    { opacity: 0, x: fromX, y: fromY },
    { opacity: 1, x: 0, y: 0, duration: 0.6, delay: (index % 3) * 0.15, ease: 'power2.out',
      scrollTrigger: { trigger: item, start: 'top 85%', once: true }
    }
  );
});

// ── WHO WE HELP ANIMATIONS
const whoParallax = document.getElementById('whoParallax');
const whoCards = document.querySelectorAll('.who-card');
if (whoParallax) {
  // Parallax animation disabled - was causing background overflow
}
whoCards.forEach((card, index) => {
  card.style.willChange = 'transform, opacity';
  gsap.fromTo(card,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.7, delay: index * 0.15, ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 85%', once: true }
    }
  );
});

// ── LATEST UPDATES ANIMATIONS
const updatesParallax = document.getElementById('updatesParallax');
const updateItems = document.querySelectorAll('.update-card');
if (updatesParallax) {
  // Parallax animation disabled - was causing background overflow
}
updateItems.forEach((item, index) => {
  item.style.willChange = 'transform, opacity';
  gsap.fromTo(item,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.7, delay: index * 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: item, start: 'top 85%', once: true }
    }
  );
});
