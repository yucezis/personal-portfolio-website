const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Mobil menü aç/kapat
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

// Menüden bir linke tıklandığında menüyü kapat
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll yaparken elemanların görünür olma animasyonu (fade-in)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { 
    if (e.isIntersecting) { 
      e.target.classList.add('visible'); 
    } 
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));