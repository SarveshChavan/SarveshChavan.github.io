// Mobile menu toggle functions
function toggleMenu() { 
  document.getElementById('mobileMenu').classList.toggle('open'); 
}

function closeMenu() { 
  document.getElementById('mobileMenu').classList.remove('open'); 
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 65);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.07 });

// Observe all elements with data-animate attribute
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
