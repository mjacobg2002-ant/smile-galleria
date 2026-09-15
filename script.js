/* Smile Galleria — interactions (no dependencies) */
(function () {
  'use strict';

  /* ---------------------------------------------------------------
     CONFIG
     Set to false to remove the "Homepage Redesign Concept" badge and
     the footer concept disclaimer before handing off to production.
  ----------------------------------------------------------------- */
  var SHOW_CONCEPT_BADGE = true;

  if (SHOW_CONCEPT_BADGE) {
    document.body.classList.add('show-concept-badge');
  } else {
    var note = document.querySelector('[data-concept-note]');
    if (note) note.remove();
  }

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Mobile navigation drawer ---------------- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primaryNav');

  function focusableIn(el) {
    return Array.prototype.slice.call(
      el.querySelectorAll('a[href], button:not([disabled])')
    ).filter(function (n) { return n.offsetParent !== null; });
  }

  function openNav() {
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
    var f = focusableIn(nav);
    if (f.length) f[0].focus();
    document.addEventListener('keydown', onKeydown);
  }

  function closeNav(returnFocus) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeydown);
    if (returnFocus) toggle.focus();
  }

  function onKeydown(e) {
    if (e.key === 'Escape') { closeNav(true); return; }
    if (e.key !== 'Tab') return;
    // Focus trap while the drawer is open
    var f = focusableIn(nav);
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      if (nav.classList.contains('open')) closeNav(true); else openNav();
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && nav.classList.contains('open')) closeNav(false);
    });
  }

  /* ---------------- Appointment form (DEMO) ----------------
     Front-end validation + a clearly-labeled demo confirmation.
     Nothing is transmitted. To go live, send these fields to a secure
     booking provider / CRM. Do not log or expose patient data.
  ---------------------------------------------------------- */
  var form = document.getElementById('bookForm');
  var formNote = document.getElementById('formNote');
  if (form && formNote) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      formNote.className = 'form-note';
      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      var email = form.email.value.trim();
      if (!name || !phone || !email) {
        formNote.textContent = 'Please add your name, phone, and email so we can confirm your visit.';
        formNote.classList.add('err');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formNote.textContent = 'That email doesn’t look quite right — mind checking it?';
        formNote.classList.add('err');
        return;
      }
      // Demo only — do NOT claim the request was sent.
      formNote.textContent = 'Thanks, ' + name.split(' ')[0] + '! This is a demo form, so nothing was sent — please call (703) 992-7272 to book, or connect this form to your booking system.';
      formNote.classList.add('ok');
      form.reset();
    });
  }

  /* ---------------- Hide mobile action bar over the footer ---------------- */
  var mobileBar = document.querySelector('.mobile-bar');
  var footer = document.querySelector('.site-footer');
  if (mobileBar && footer && 'IntersectionObserver' in window) {
    var fo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        mobileBar.style.transform = entry.isIntersecting ? 'translateY(110%)' : 'translateY(0)';
      });
    }, { rootMargin: '0px 0px -40% 0px' });
    fo.observe(footer);
    mobileBar.style.transition = 'transform .3s cubic-bezier(.2,.7,.2,1)';
  }

  /* ---------------- Gentle reveal on scroll (respects reduced motion) ---------------- */
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
    document.querySelectorAll('.section-head, .service-card, .review-card, .np-steps li, .welcome-copy, .cosmetic-copy, .comfort-copy, .ortho-copy, .about-copy').forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .6s cubic-bezier(.2,.7,.2,1) ' + (i % 6) * 0.05 + 's, transform .6s cubic-bezier(.2,.7,.2,1) ' + (i % 6) * 0.05 + 's';
      io.observe(el);
    });
  }
})();
