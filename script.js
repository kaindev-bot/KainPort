document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  document.querySelectorAll('.project-preview img').forEach((image) => {
    image.addEventListener('load', () => image.classList.add('loaded'));

    if (image.complete && image.naturalWidth > 0) {
      image.classList.add('loaded');
    }
  });

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealElements = document.querySelectorAll('.project-card, .stat-item, .skill-box, .about-section, .hero');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => {
      element.classList.add('reveal');
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => element.classList.add('revealed'));
  }
});
