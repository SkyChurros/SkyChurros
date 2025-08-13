document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav.main-nav a');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
});
