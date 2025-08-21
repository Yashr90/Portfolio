document.getElementById('year').textContent = new Date().getFullYear();

    // Ensure safe rel for blank-target links
    document.querySelectorAll('a[target="_blank"]').forEach(a=>{
      a.setAttribute('rel','noopener noreferrer');
    });

    // Smooth scrolling for in-page nav
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const target = this.getAttribute('href');
        if(target.length>1){
          e.preventDefault();
          const el = document.querySelector(target);
          if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        }
      });
    });
  