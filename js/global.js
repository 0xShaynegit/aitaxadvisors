// ── LENIS & PRELOADER (Wait for Lenis script to load since it's deferred)
let lenis;
const nav = document.getElementById('nav');

window.addEventListener('load', () => {
  // Initialize Lenis if available
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.15,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true
    });
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // NAV SCROLL
    lenis.on('scroll', ({ scroll }) => {
      scroll > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
    });
  }

  // PRELOADER (Skip if coming from another Thailand page or homepage)
  const referrer = document.referrer;
  const isFromSite = referrer.includes('aitaxadvisors');
  const isFromThailandOrHome = referrer.includes('/thailand/') || referrer.includes('index.html') || referrer.includes('aitaxadvisors/') && !referrer.includes('/thailand/') && referrer.split('/').pop() === '';
  const skipPreloader = isFromSite && (isFromThailandOrHome || referrer.includes('thailand'));

  gsap.to('#preloader', {
    opacity: 0,
    duration: 0.55,
    delay: skipPreloader ? 0 : 1.1,
    ease: 'power2.inOut',
    onComplete: () => {
      document.getElementById('preloader').style.display = 'none';
      // Call homepage animations if function exists (loaded from js/homepage.js)
      if (typeof animateHero === 'function') {
        animateHero();
      }
    }
  });
});

// ── HAMBURGER MENU
const burger = document.getElementById('nav-burger');
const mobileMenu = document.getElementById('nav-mobile-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
  burger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

// Close on outside click
document.addEventListener('click', e => {
  if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMobileMenu();
  }
});

// ── MAGNETIC BUTTONS
document.querySelectorAll('.magnetic-item').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r  = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width  / 2)) * 0.32;
    const dy = (e.clientY - (r.top  + r.height / 2)) * 0.32;
    gsap.to(el, { x: dx, y: dy, duration:0.3, ease:'power2.out' });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { x:0, y:0, duration:0.5, ease:'elastic.out(1,0.5)' });
  });
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => ScrollTrigger.refresh());

// ── THAILAND DROPDOWN MENU
function toggleThailandMenu(e) {
  e.preventDefault();
  const menu = document.getElementById('thailand-menu');
  menu.classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-dropdown')) {
    document.getElementById('thailand-menu').classList.remove('open');
  }
});
