/* Consent banner and gated analytics for aitaxadvisors.com.
   Nothing from Google loads until the visitor accepts. Reject loads nothing.
   Choice is kept in localStorage for 12 months and can be changed from the footer. */
(function () {
  var GA_ID = 'G-9916JG09JM';
  var KEY = 'aita-consent';
  var MAX_AGE = 365 * 24 * 60 * 60 * 1000;
  var loaded = false;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied'
  });

  function read() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY));
      if (v && (v.v === 'granted' || v.v === 'denied') && Date.now() - v.t < MAX_AGE) return v.v;
    } catch (e) {}
    return null;
  }
  function write(v) {
    try { localStorage.setItem(KEY, JSON.stringify({ v: v, t: Date.now() })); } catch (e) {}
  }

  function addScript(src) {
    var s = document.createElement('script');
    s.async = true;
    s.src = src;
    document.head.appendChild(s);
  }
  function loadGoogle() {
    if (loaded) return;
    loaded = true;
    addScript('https://www.googletagmanager.com/gtag/js?id=' + GA_ID);
    gtag('js', new Date());
    gtag('config', GA_ID);
    addScript('https://news.google.com/swg/js/v1/publisher.js');
  }
  function clearGaCookies() {
    var host = location.hostname.split('.');
    var domains = ['', location.hostname];
    if (host.length > 2) domains.push(host.slice(-2).join('.'));
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name.indexOf('_ga') !== 0 && name.indexOf('_gid') !== 0) return;
      domains.forEach(function (d) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
      });
    });
  }

  function grant() {
    write('granted');
    gtag('consent', 'update', { analytics_storage: 'granted' });
    loadGoogle();
  }
  function deny() {
    write('denied');
    gtag('consent', 'update', { analytics_storage: 'denied' });
    clearGaCookies();
  }

  var CSS =
    '#aita-consent{position:fixed;left:50%;bottom:16px;z-index:10020;box-sizing:border-box;' +
    'width:min(560px,calc(100% - 32px));padding:1.1rem 1.25rem;background:#111d3f;color:#E5E4E2;' +
    'border:1px solid rgba(0,88,149,.6);border-radius:4px;box-shadow:0 12px 40px rgba(0,0,0,.45);' +
    'font:400 .9rem/1.5 var(--font-sans,system-ui,sans-serif);transform:translate(-50%,12px);opacity:0;' +
    'transition:opacity .2s cubic-bezier(.4,0,.2,1),transform .2s cubic-bezier(.4,0,.2,1)}' +
    '#aita-consent.is-in{transform:translate(-50%,0);opacity:1}' +
    '#aita-consent p{margin:0 0 .9rem}' +
    '#aita-consent a{color:#8ecbf5;text-decoration:underline}' +
    '#aita-consent .aita-consent-row{display:flex;gap:.75rem}' +
    '#aita-consent button{flex:1 1 0;min-height:44px;padding:.6rem 1rem;background:transparent;color:#E5E4E2;' +
    'border:1px solid #E5E4E2;border-radius:4px;font-weight:600;font-size:.9rem;line-height:1;font-family:inherit;cursor:pointer}' +
    '#aita-consent button:focus-visible{outline:2px solid #8ecbf5;outline-offset:2px}' +
    '@media (hover:hover) and (pointer:fine){#aita-consent button:hover{background:#005895;border-color:#005895;color:#fff}}' +
    '@media (max-width:480px){#aita-consent{bottom:0;left:0;width:100%;transform:translateY(12px);' +
    'border-radius:4px 4px 0 0;padding-bottom:calc(1.1rem + env(safe-area-inset-bottom))}' +
    '#aita-consent.is-in{transform:translateY(0)}}' +
    '@media (prefers-reduced-motion:reduce){#aita-consent{transition:none}}';

  var banner = null;
  function closeBanner() {
    if (!banner) return;
    var b = banner;
    banner = null;
    b.classList.remove('is-in');
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 220);
  }
  function showBanner(focus) {
    if (banner) return;
    if (!document.getElementById('aita-consent-css')) {
      var st = document.createElement('style');
      st.id = 'aita-consent-css';
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    banner = document.createElement('div');
    banner.id = 'aita-consent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML =
      '<p>We use Google Analytics to see how visitors use this site. It runs only if you accept. ' +
      'You can change your choice at any time from Cookie settings in the footer. ' +
      '<a href="/privacy-policy">Privacy policy</a></p>' +
      '<div class="aita-consent-row">' +
      '<button type="button" data-aita="deny">Reject</button>' +
      '<button type="button" data-aita="grant">Accept</button></div>';
    banner.addEventListener('click', function (e) {
      var a = e.target && e.target.getAttribute && e.target.getAttribute('data-aita');
      if (a === 'grant') { grant(); closeBanner(); }
      else if (a === 'deny') { deny(); closeBanner(); }
    });
    document.body.appendChild(banner);
    requestAnimationFrame(function () { requestAnimationFrame(function () { if (banner) banner.classList.add('is-in'); }); });
    if (focus) banner.querySelector('button').focus();
  }

  function addFooterLink() {
    var nav = document.querySelector('.footer-legal');
    if (!nav || document.getElementById('aita-cookie-settings')) return;
    var a = document.createElement('a');
    a.id = 'aita-cookie-settings';
    a.href = '#cookie-settings';
    a.textContent = 'Cookie settings';
    a.addEventListener('click', function (e) { e.preventDefault(); showBanner(true); });
    nav.appendChild(a);
  }

  var choice = read();
  if (choice === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
    loadGoogle();
  }
  function ready() {
    addFooterLink();
    if (!choice) showBanner(false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
