// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// ===== FAQ TOGGLE =====
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(q => {
    q.classList.remove('open');
    q.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// ===== ADMIN PANEL TABS =====
function switchTab(tabName) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-content').forEach(c => c.classList.remove('active'));
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  document.getElementById(`tab-${tabName}`).classList.add('active');
}

// ===== ADMIN SAVE =====
function saveSection(sectionId) {
  const statusEl = document.getElementById(`status-${sectionId}`);
  if (statusEl) {
    statusEl.classList.add('show');
    setTimeout(() => statusEl.classList.remove('show'), 2000);
  }
}

// ===== COLOR PREVIEW =====
function updateColorPreview(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  if (input && preview) {
    preview.style.background = input.value;
    input.addEventListener('input', () => { preview.style.background = input.value; });
  }
}

// ===== CONTACT FORM SUBMIT =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = '✅ Sent! We'll get back to you soon.';
    btn.style.background = '#25d366';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      contactForm.reset();
    }, 4000);
  });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks && navLinks.classList.remove('open');
    }
  });
});

// ===== PRODUCT CARD ADD TO CART / WA ORDER =====
document.querySelectorAll('.btn-buy').forEach(btn => {
  btn.addEventListener('click', function() {
    const productName = this.closest('.product-card').querySelector('h3').textContent;
    const original = this.textContent;
    this.textContent = '✅ Added!';
    this.style.background = '#25d366';
    setTimeout(() => {
      this.textContent = original;
      this.style.background = '';
    }, 2000);
  });
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  const colorInputs = [
    ['adminColorGreen', 'prevGreen'],
    ['adminColorGold', 'prevGold'],
    ['adminColorBg', 'prevBg'],
  ];
  colorInputs.forEach(([inputId, previewId]) => updateColorPreview(inputId, previewId));
});
