  // mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const navlinks = document.querySelector('.navlinks');
  if(toggle){
    toggle.addEventListener('click', () => {
      const open = navlinks.style.display === 'flex';
      navlinks.style.display = open ? 'none' : 'flex';
      navlinks.style.flexDirection = 'column';
      navlinks.style.position = 'absolute';
      navlinks.style.top = '64px';
      navlinks.style.right = '28px';
      navlinks.style.background = '#172a23';
      navlinks.style.border = '1px solid rgba(232,226,212,0.14)';
      navlinks.style.padding = '18px 24px';
      navlinks.style.gap = '16px';
    });
  }

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
