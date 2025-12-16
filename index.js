document.addEventListener('DOMContentLoaded', () => {
  
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    
    const icon = toggle.querySelector('i');
    if (links.classList.contains('open')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      const icon = toggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
  });
});
