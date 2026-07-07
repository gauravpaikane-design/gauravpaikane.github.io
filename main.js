// gauravpaikane.com — interactions
(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll progress bar
  const bar = document.getElementById("progress");
  if (bar) {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      bar.style.width = (p * 100).toFixed(2) + "%";
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  // Count-up stats
  const nums = document.querySelectorAll(".stat .num[data-count]");
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    if (reduced) { el.textContent = target.toLocaleString("en-IN") + suffix; return; }
    const dur = 1400, t0 = performance.now();
    const step = (t) => {
      const k = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-IN") + suffix;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const io2 = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { animate(e.target); io2.unobserve(e.target); }
      }),
      { threshold: 0.4 }
    );
    nums.forEach((el) => io2.observe(el));
  } else {
    nums.forEach(animate);
  }

  // Journey rail fill follows scroll
  const rail = document.querySelector(".journey .rail .fill");
  const journey = document.querySelector(".journey");
  if (rail && journey) {
    const onScroll2 = () => {
      const r = journey.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(Math.max((vh * 0.7 - r.top) / r.height, 0), 1);
      rail.style.height = (progress * 100).toFixed(1) + "%";
    };
    document.addEventListener("scroll", onScroll2, { passive: true });
    onScroll2();
  }
})();
