/* Interactions for the homepage site content (.site-scope). */
(function () {
  "use strict";

  if (window.location.search.indexOf("noanim") !== -1) {
    document.documentElement.classList.add("no-anim");
  }

  /* ---------- Scroll reveals ---------- */
  var revealEls = document.querySelectorAll(".site-scope [data-reveal]");

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Rail/carousel ---------- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setupRail(rail, prevBtn, nextBtn, cardSelector, autoplayMs, loop) {
    if (!rail || !prevBtn || !nextBtn) return;

    var singleWidth;

    if (loop) {
      var originalCards = Array.prototype.slice.call(rail.querySelectorAll(cardSelector));
      originalCards.forEach(function (card) {
        var clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.removeAttribute("data-reveal");
        rail.appendChild(clone);
      });
      singleWidth = rail.scrollWidth / 2;
    }

    var step = function () {
      var card = rail.querySelector(cardSelector);
      return card ? card.getBoundingClientRect().width + 20 : 440;
    };

    var normalizeLoop = function () {
      if (!loop) return;
      if (rail.scrollLeft >= singleWidth - 2) {
        rail.scrollLeft -= singleWidth;
      } else if (rail.scrollLeft <= 2) {
        rail.scrollLeft += singleWidth;
      }
    };

    prevBtn.addEventListener("click", function () {
      rail.scrollBy({ left: -step(), behavior: "smooth" });
      if (loop) setTimeout(normalizeLoop, 450);
    });
    nextBtn.addEventListener("click", function () {
      rail.scrollBy({ left: step(), behavior: "smooth" });
      if (loop) setTimeout(normalizeLoop, 450);
    });

    var updateRailButtons = function () {
      if (loop) {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
        return;
      }
      var max = rail.scrollWidth - rail.clientWidth - 2;
      prevBtn.disabled = rail.scrollLeft <= 2;
      nextBtn.disabled = rail.scrollLeft >= max;
    };
    rail.addEventListener("scroll", updateRailButtons, { passive: true });
    window.addEventListener("resize", updateRailButtons);
    updateRailButtons();

    if (!autoplayMs || reduceMotion) return;

    var autoplayTimer = null;
    var stopAutoplay = function () {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    };
    var startAutoplay = function () {
      stopAutoplay();
      autoplayTimer = setInterval(function () {
        rail.scrollBy({ left: step(), behavior: "smooth" });
        setTimeout(normalizeLoop, 450);
      }, autoplayMs);
    };

    rail.addEventListener("mouseenter", stopAutoplay);
    rail.addEventListener("mouseleave", startAutoplay);
    rail.addEventListener("touchstart", stopAutoplay, { passive: true });
    prevBtn.addEventListener("click", stopAutoplay);
    nextBtn.addEventListener("click", stopAutoplay);

    startAutoplay();
  }

  setupRail(
    document.getElementById("care-rail"),
    document.getElementById("rail-prev"),
    document.getElementById("rail-next"),
    ".care-card",
    4000,
    true
  );

  setupRail(
    document.getElementById("testimonial-rail"),
    document.getElementById("testimonial-prev"),
    document.getElementById("testimonial-next"),
    ".testimonial-card",
    5000,
    true
  );

  /* ---------- FAQ: close others when one opens ---------- */
  var faqItems = document.querySelectorAll(".site-scope .faq-list details");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
})();
