// ===========================
//  CV ABHINAYA UTAMA - JS
// ===========================

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close menu when link clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = navbar.offsetHeight;
      const top = target.offsetTop - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== BACK TO TOP =====
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== PAKET TAB =====
function showPaket(type) {
  const grids = {
    cctv: document.getElementById('paket-cctv'),
    web: document.getElementById('paket-web'),
    videotron: document.getElementById('paket-videotron'),
  };
  const btns = document.querySelectorAll('.tab-btn');

  Object.values(grids).forEach(g => g && g.classList.add('hidden'));
  btns.forEach(b => b.classList.remove('active'));

  if (grids[type]) grids[type].classList.remove('hidden');

  const idx = { cctv: 0, web: 1, videotron: 2 };
  if (btns[idx[type]]) btns[idx[type]].classList.add('active');
}

// ===== CONTACT FORM → WHATSAPP =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = this.querySelector('input[type="text"]').value;
    const wa = this.querySelector('input[type="tel"]').value;
    const layanan = this.querySelector('select').value;
    const pesan = this.querySelector('textarea').value;

    const msg = `Halo CV Abhinaya Utama, saya ingin konsultasi.%0A%0A*Nama:* ${encodeURIComponent(nama)}%0A*WA:* ${encodeURIComponent(wa)}%0A*Layanan:* ${encodeURIComponent(layanan)}%0A*Pesan:* ${encodeURIComponent(pesan)}`;

    window.open(`https://wa.me/6287765922015?text=${msg}`, '_blank');
  });
}

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply initial styles + observe
const animateEls = document.querySelectorAll(
  '.layanan-card, .paket-card, .testimoni-card, .portfolio-item, .info-card, .feature-item'
);

animateEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
  observer.observe(el);
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active-link'));
        navLink.classList.add('active-link');
      }
    }
  });
});
