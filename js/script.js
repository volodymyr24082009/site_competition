// Додаємо функціонал для кнопок та інтерактивності
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена');
    // Тут можна додати функції для подальшої взаємодії
});
document.addEventListener('DOMContentLoaded', function() {
    const fadeElems = document.querySelectorAll('.fade-in');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    fadeElems.forEach(elem => observer.observe(elem));
  });