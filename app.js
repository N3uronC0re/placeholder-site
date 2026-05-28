/* ============================
   APP.JS - Interatividade
   ============================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- MOBILE MENU TOGGLE ----
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Fecha menu ao clicar em link
    nav.querySelectorAll('.header__nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- SCROLL REVEAL (INTERSECTION OBSERVER) ----
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ---- HEADER SHRINK ON SCROLL ----
  const header = document.getElementById('header');

  if (header) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        header.style.background = 'rgba(26, 26, 26, 0.98)';
      } else {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
      }
    });
  }
});
