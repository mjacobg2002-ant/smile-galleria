/* Smile Galleria — interactions (no dependencies) */
(function () {
  'use strict';

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primaryNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // Appointment form — validate + friendly confirmation.
  // TODO(practice): connect to your provider (Formspree, practice CRM, email).
  var form = document.getElementById('bookForm');
  var note = document.getElementById('formNote');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.className = 'form-note';
      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      var email = form.email.value.trim();
      if (!name || !phone || !email) {
        note.textContent = 'Please add your name, phone, and email so we can confirm your visit.';
        note.classList.add('err');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        note.textContent = 'That email doesn’t look quite right — mind checking it?';
        note.classList.add('err');
        return;
      }
      note.textContent = 'Thank you, ' + name.split(' ')[0] + '! Our team will reach out shortly to confirm your appointment.';
      note.classList.add('ok');
      form.reset();
    });
  }

  // Gentle reveal on scroll (respects reduced motion)
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.section-head, .service-card, .review-card, .np-steps li, .welcome-copy, .cosmetic-copy, .comfort-copy, .about-copy').forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .6s cubic-bezier(.2,.7,.2,1) ' + (i % 6) * 0.05 + 's, transform .6s cubic-bezier(.2,.7,.2,1) ' + (i % 6) * 0.05 + 's';
      io.observe(el);
    });
  }
})();
