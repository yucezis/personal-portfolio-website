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

// ---- DARK MODE TOGGLE LOGIC ----
const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement; // <html> etiketini hedefler

// Kullanıcının daha önceki tercihini kontrol et (Yohsa varsayılan light kalır)
const savedTheme = localStorage.getItem('theme') || 'light';
rootElement.setAttribute('data-theme', savedTheme);
themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Temayı HTML'e uygula
  rootElement.setAttribute('data-theme', newTheme);
  
  // Tercihi tarayıcı hafızasına kaydet
  localStorage.setItem('theme', newTheme);
  
  // İkonu güneşe veya aya çevir
  themeToggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});