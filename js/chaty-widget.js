(function () {
  'use strict';

  var PHONE_URL = 'tel:+18009065980';
  var EMAIL_URL = 'mailto:admin@aitaxadvisers.com';
  var FB_URL    = 'https://www.facebook.com/Americantax2018';
  var MSG_URL   = 'https://m.me/Americantax2018';

  var BLUE      = '#005895';
  var NAVY      = '#0A1128';
  var LEFT      = 20;
  var BOTTOM    = 28;
  var TRIG_SIZE = 52;
  var CHAN_SIZE  = 46;
  var GAP        = 10;

  var isMobile = window.innerWidth <= 768;

  var AIT_LOGO_HTML = '<img src="images/aitaxadvisors-company-logo-aitaxadvisors-American-International-Tax-Advisers-aitaxadvisers.webp" width="52" height="52" alt="" aria-hidden="true" style="width:52px;height:52px;display:block;pointer-events:none;object-fit:cover;border-radius:50%;">';

  var CHAT_ICON =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="' + NAVY + '"/>' +
    '<circle cx="8"  cy="11" r="1.3" fill="#ffffff"/>' +
    '<circle cx="12" cy="11" r="1.3" fill="#ffffff"/>' +
    '<circle cx="16" cy="11" r="1.3" fill="#ffffff"/>' +
    '</svg>';

  var PHONE_SVG =
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>' +
    '</svg>';

  var EMAIL_SVG =
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>' +
    '<polyline points="22,6 12,13 2,6"/>' +
    '</svg>';

  var FB_SVG =
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>' +
    '</svg>';

  var MSG_SVG =
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.664V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.559-6.963 3.13 3.26 5.889-3.26-6.56 6.963z"/>' +
    '</svg>';

  // Array order = bottom to top when open (index 0 is closest to trigger)
  var channels = [
    { label: 'Phone',     url: PHONE_URL, svg: PHONE_SVG },
    { label: 'Email',     url: EMAIL_URL, svg: EMAIL_SVG },
    { label: 'Facebook',  url: FB_URL,    svg: FB_SVG    },
    { label: 'Messenger', url: MSG_URL,   svg: MSG_SVG   }
  ];

  function createWidget() {
    var isOpen = false;

    /* --- trigger --- */
    var trigger = document.createElement('div');
    trigger.id = 'ait-chat-trigger';
    trigger.setAttribute('role', 'button');
    trigger.setAttribute('tabindex', '0');
    trigger.setAttribute('aria-label', 'Open contact options');
    trigger.style.cssText = [
      'position:fixed',
      'bottom:' + BOTTOM + 'px',
      'left:' + LEFT + 'px',
      'width:' + TRIG_SIZE + 'px',
      'height:' + TRIG_SIZE + 'px',
      'background:' + BLUE,
      'border-radius:50%',
      'cursor:pointer',
      'z-index:10010',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'overflow:hidden',
      'transition:transform 0.2s ease',
      'box-shadow:0 4px 18px rgba(0,88,149,0.35)'
    ].join(';');
    trigger.innerHTML = CHAT_ICON;
    document.body.appendChild(trigger);

    /* --- "Contact us" label (desktop only) --- */
    var chatNow = null;
    if (!isMobile) {
      chatNow = document.createElement('div');
      chatNow.style.cssText = [
        'position:fixed',
        'bottom:' + (BOTTOM + TRIG_SIZE / 2 - 11) + 'px',
        'left:' + (LEFT + TRIG_SIZE + 12) + 'px',
        'background:rgba(10,17,40,0.92)',
        'color:#f0ece4',
        'padding:6px 13px',
        'font-family:\'Inter\',system-ui,sans-serif',
        'font-size:11px',
        'letter-spacing:0.12em',
        'text-transform:uppercase',
        'white-space:nowrap',
        'pointer-events:none',
        'opacity:0',
        'transition:opacity 0.18s ease',
        'z-index:10009'
      ].join(';');
      chatNow.textContent = 'Contact us';
      document.body.appendChild(chatNow);
    }

    /* --- channel rows --- */
    var channelEls = [];

    channels.forEach(function (ch, idx) {
      var targetBottom = BOTTOM + TRIG_SIZE + GAP + idx * (CHAN_SIZE + GAP);

      var row = document.createElement('div');
      row.style.cssText = [
        'position:fixed',
        'bottom:' + BOTTOM + 'px',
        'left:' + LEFT + 'px',
        'display:flex',
        'align-items:center',
        'gap:10px',
        'opacity:0',
        'pointer-events:none',
        'transition:bottom 0.28s ease, opacity 0.22s ease',
        'z-index:10009'
      ].join(';');

      var link = document.createElement('a');
      link.href = ch.url;
      link.setAttribute('aria-label', ch.label);
      link.style.cssText = 'display:flex;align-items:center;gap:10px;text-decoration:none;';
      if (ch.url.indexOf('http') === 0) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }

      var circle = document.createElement('div');
      circle.style.cssText = [
        'width:' + CHAN_SIZE + 'px',
        'height:' + CHAN_SIZE + 'px',
        'background:#0f1c3f',
        'border:1px solid rgba(255,255,255,0.09)',
        'border-radius:50%',
        'display:flex',
        'align-items:center',
        'justify-content:center',
        'flex-shrink:0',
        'color:#8a9bc2',
        'transition:background 0.18s ease, color 0.18s ease, border-color 0.18s ease'
      ].join(';');
      circle.innerHTML = ch.svg;

      var label = document.createElement('span');
      label.className = 'ait-chat-label';
      label.style.cssText = [
        'font-family:\'Inter\',system-ui,sans-serif',
        'font-size:11px',
        'letter-spacing:0.14em',
        'text-transform:uppercase',
        'color:' + BLUE,
        'white-space:nowrap',
        'opacity:0',
        'transition:opacity 0.18s ease, color 0.18s ease'
      ].join(';');
      label.textContent = ch.label;

      link.addEventListener('mouseenter', function () {
        circle.style.background = '#16295c';
        circle.style.color = '#ffffff';
        circle.style.borderColor = 'rgba(0,88,149,0.4)';
        if (!isMobile) label.style.opacity = '1';
      });
      link.addEventListener('mouseleave', function () {
        circle.style.background = '#0f1c3f';
        circle.style.color = '#8a9bc2';
        circle.style.borderColor = 'rgba(255,255,255,0.09)';
        label.style.opacity = '0';
      });

      link.appendChild(circle);
      link.appendChild(label);
      row.appendChild(link);
      document.body.appendChild(row);

      channelEls.push({ el: row, bottom: targetBottom, label: label });
    });

    /* --- adaptive label color: read what's actually behind the widget --- */
    function sampleLuminanceAt(x, y) {
      // Hide our own elements for one frame so elementFromPoint sees the
      // page content underneath rather than the widget itself.
      trigger.style.visibility = 'hidden';
      if (chatNow) chatNow.style.visibility = 'hidden';
      channelEls.forEach(function (item) { item.el.style.visibility = 'hidden'; });

      var el = document.elementFromPoint(x, y);

      trigger.style.visibility = 'visible';
      if (chatNow) chatNow.style.visibility = 'visible';
      channelEls.forEach(function (item) { item.el.style.visibility = 'visible'; });

      var node = el;
      while (node && node !== document.documentElement) {
        var bg = window.getComputedStyle(node).backgroundColor;
        var m = bg.match(/rgba?\(([^)]+)\)/);
        if (m) {
          var parts = m[1].split(',').map(function (s) { return parseFloat(s); });
          var a = parts.length > 3 ? parts[3] : 1;
          if (a > 0.4) {
            var luminance = (0.299 * parts[0] + 0.587 * parts[1] + 0.114 * parts[2]) / 255;
            return luminance < 0.5 ? 'dark' : 'light';
          }
        }
        node = node.parentElement;
      }
      return 'dark'; // body background is navy site-wide if nothing more specific is found
    }

    function updateLabelThemes() {
      channelEls.forEach(function (item) {
        var y = window.innerHeight - item.bottom - (CHAN_SIZE / 2);
        var x = LEFT + CHAN_SIZE + 40;
        var theme = sampleLuminanceAt(x, y);
        item.label.style.color = theme === 'dark' ? '#f5f3ee' : BLUE;
      });
    }

    var themeScrollQueued = false;
    function queueThemeUpdate() {
      if (themeScrollQueued || !isOpen) return;
      themeScrollQueued = true;
      requestAnimationFrame(function () {
        themeScrollQueued = false;
        if (isOpen) updateLabelThemes();
      });
    }
    window.addEventListener('scroll', queueThemeUpdate, { passive: true });

    /* --- open / close --- */
    function openWidget() {
      isOpen = true;
      trigger.innerHTML = AIT_LOGO_HTML;
      if (chatNow) chatNow.style.opacity = '0';
      channelEls.forEach(function (item, idx) {
        item.el.style.transitionDelay = (idx * 0.07) + 's';
        item.el.style.bottom = item.bottom + 'px';
        item.el.style.opacity = '1';
        item.el.style.pointerEvents = 'auto';
      });
      setTimeout(updateLabelThemes, 300); // after the open transition settles
    }

    function closeWidget() {
      isOpen = false;
      trigger.innerHTML = CHAT_ICON;
      channelEls.forEach(function (item) {
        item.el.style.transitionDelay = '0s';
        item.el.style.bottom = BOTTOM + 'px';
        item.el.style.opacity = '0';
        item.el.style.pointerEvents = 'none';
      });
    }

    /* --- close timer (desktop hover-to-close) --- */
    var closeTimer = null;
    function startCloseTimer() {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () { if (isOpen) closeWidget(); }, 260);
    }
    function cancelCloseTimer() { clearTimeout(closeTimer); }

    /* --- events --- */
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      cancelCloseTimer();
      isOpen ? closeWidget() : openWidget();
    });

    trigger.addEventListener('mouseenter', function () {
      trigger.style.transform = 'scale(1.08)';
      if (!isMobile) {
        cancelCloseTimer();
        if (!isOpen) openWidget();
      } else {
        if (!isOpen && chatNow) chatNow.style.opacity = '1';
      }
    });
    trigger.addEventListener('mouseleave', function () {
      trigger.style.transform = 'scale(1)';
      if (chatNow) chatNow.style.opacity = '0';
      if (!isMobile) startCloseTimer();
    });

    /* --- keep open while mouse is over any channel row --- */
    channelEls.forEach(function (item) {
      item.el.addEventListener('mouseenter', function () { if (!isMobile) cancelCloseTimer(); });
      item.el.addEventListener('mouseleave', function () { if (!isMobile) startCloseTimer(); });
    });

    document.addEventListener('click', function (e) {
      if (!isOpen) return;
      var onChannel = channelEls.some(function (item) { return item.el.contains(e.target); });
      if (!onChannel && !trigger.contains(e.target)) closeWidget();
    });

    /* --- "Contact us" on mouse entering bottom-left zone (desktop only) --- */
    if (!isMobile && chatNow) {
      document.addEventListener('mousemove', function (e) {
        if (isOpen) return;
        var inZone = e.clientX < window.innerWidth * 0.25 && e.clientY > window.innerHeight * 0.78;
        chatNow.style.opacity = inZone ? '1' : '0';
      });
    }
  }

  function initWhenReady() {
    var preloader = document.getElementById('preloader');
    if (!preloader) {
      // No preloader on this page   init now
      createWidget();
      return;
    }

    var started = false;
    function startOnce() {
      if (started) return;
      started = true;
      observer.disconnect();
      createWidget();
    }

    // The site's preloader is hidden via style.display = 'none' (GSAP
    // onComplete) rather than removed from the DOM, and on some pages it
    // never runs its hide animation at all (e.g. skip-preloader referrer
    // logic). Watch for either the node being removed OR its inline style
    // hiding it, and fall back to a hard timeout so the widget always
    // appears even if neither signal fires.
    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        if (m.type === 'childList') {
          var removed = m.removedNodes;
          for (var j = 0; j < removed.length; j++) {
            if (removed[j].id === 'preloader') { startOnce(); return; }
          }
        }
        if (m.type === 'attributes' && m.target === preloader) {
          var style = preloader.getAttribute('style') || '';
          var computedHidden = window.getComputedStyle(preloader).display === 'none';
          if (style.indexOf('display: none') !== -1 || style.indexOf('display:none') !== -1 || computedHidden) {
            startOnce();
            return;
          }
        }
      }
    });
    observer.observe(document.body, { childList: true });
    observer.observe(preloader, { attributes: true, attributeFilter: ['style', 'class'] });

    // Hard fallback: never let a stuck/skipped preloader hide the widget forever.
    setTimeout(startOnce, 2500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhenReady);
  } else {
    initWhenReady();
  }
})();
