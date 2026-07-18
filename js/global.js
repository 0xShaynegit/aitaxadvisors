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
    if (nav) {
      lenis.on('scroll', ({ scroll }) => {
        scroll > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
      });
    }
  }

  // PRELOADER (only on the first page load of the session — every later page
  // in this tab hides it instantly with no animation, via sessionStorage)
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const alreadyShown = sessionStorage.getItem('aitax_preloader_shown');

    if (alreadyShown) {
      preloader.style.display = 'none';
      if (typeof animateHero === 'function') {
        animateHero();
      }
    } else {
      sessionStorage.setItem('aitax_preloader_shown', '1');
      gsap.to('#preloader', {
        opacity: 0,
        duration: 0.55,
        delay: 1.1,
        ease: 'power2.inOut',
        onComplete: () => {
          preloader.style.display = 'none';
          // Call homepage animations if function exists (loaded from js/homepage.js)
          if (typeof animateHero === 'function') {
            animateHero();
          }
        }
      });
    }
  }
});

// ── HAMBURGER MENU
// .nav-links is the single nav markup reused for both desktop (hover dropdowns)
// and mobile (full-screen accordion) — same pattern as chiangmaiambassador (CMA),
// no separate duplicated mobile-only link list to fall out of sync.
const MOBILE_NAV_BREAKPOINT = 1024;
const burger = document.getElementById('nav-burger');
const mobileMenu = document.querySelector('.nav-links');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('mobile-open');
    burger.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    if (lenis) isOpen ? lenis.stop() : lenis.start();
  });
}

function closeMobileMenu() {
  if (burger) burger.classList.remove('open');
  if (mobileMenu) {
    mobileMenu.classList.remove('mobile-open');
    mobileMenu.querySelectorAll('.nav-dropdown.open, .nav-dropdown-sub.open').forEach(el => el.classList.remove('open'));
  }
  document.body.classList.remove('menu-open');
  if (lenis) lenis.start();
}

// Close on outside click
document.addEventListener('click', e => {
  if (nav && mobileMenu && !nav.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMobileMenu();
  }
});

// Close mobile menu when a real content link is tapped (not a dropdown toggle)
if (mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach(link => {
    if (link.classList.contains('nav-dropdown-sub-trigger')) return;
    if (link.parentElement.classList.contains('nav-dropdown') && link === link.parentElement.querySelector(':scope > a')) return;
    link.addEventListener('click', () => {
      if (window.innerWidth <= MOBILE_NAV_BREAKPOINT) closeMobileMenu();
    });
  });
}

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

// ── NAV DROPDOWNS: desktop hover-to-open, small delay before closing.
// Gated to > MOBILE_NAV_BREAKPOINT so it never fights the mobile accordion
// click handlers below (touch doesn't fire mouseenter anyway, but hybrid
// touch+mouse laptops can).
document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
  let closeTimer;
  dropdown.addEventListener('mouseenter', () => {
    if (window.innerWidth <= MOBILE_NAV_BREAKPOINT) return;
    clearTimeout(closeTimer);
    document.querySelectorAll('.nav-dropdown.open').forEach(el => {
      if (el !== dropdown) el.classList.remove('open');
    });
    dropdown.classList.add('open');
  });
  dropdown.addEventListener('mouseleave', () => {
    if (window.innerWidth <= MOBILE_NAV_BREAKPOINT) return;
    closeTimer = setTimeout(() => dropdown.classList.remove('open'), 400);
  });

  // Mobile: tap toggles the accordion instead of following the
  // href="javascript:void(0)" placeholder. Same technique as CMA's
  // .nav-dropdown-toggle click handler.
  const topLink = dropdown.querySelector(':scope > a');
  if (topLink) {
    topLink.addEventListener('click', e => {
      if (window.innerWidth > MOBILE_NAV_BREAKPOINT) return;
      e.preventDefault();
      const isOpen = dropdown.classList.contains('open');
      document.querySelectorAll('.nav-dropdown.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) dropdown.classList.add('open');
    });
  }
});

// ── NAV SECOND-LEVEL FLYOUTS (e.g. Countries > Thailand > sub-pages)
// Separate from the handler above so opening a flyout never closes its
// own parent top-level dropdown.
document.querySelectorAll('.nav-dropdown-sub').forEach(sub => {
  let closeTimer;
  sub.addEventListener('mouseenter', () => {
    if (window.innerWidth <= MOBILE_NAV_BREAKPOINT) return;
    clearTimeout(closeTimer);
    document.querySelectorAll('.nav-dropdown-sub.open').forEach(el => {
      if (el !== sub) el.classList.remove('open');
    });
    sub.classList.add('open');
  });
  sub.addEventListener('mouseleave', () => {
    if (window.innerWidth <= MOBILE_NAV_BREAKPOINT) return;
    closeTimer = setTimeout(() => sub.classList.remove('open'), 400);
  });

  // Mobile: tap the country name to expand its link list instead of
  // navigating straight to the hub page. The hub page is still reachable
  // as the first link inside the revealed submenu.
  const trigger = sub.querySelector('.nav-dropdown-sub-trigger');
  if (trigger) {
    trigger.addEventListener('click', e => {
      if (window.innerWidth > MOBILE_NAV_BREAKPOINT) return;
      e.preventDefault();
      const isOpen = sub.classList.contains('open');
      document.querySelectorAll('.nav-dropdown-sub.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) sub.classList.add('open');
    });
  }
});
