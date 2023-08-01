var typed = new Typed('.multiple', {
    strings: ["Intern","Devops Engineer", "Frontend Developer"],
    typeSpeed: 50
  });


  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
  });

  ScrollReveal().reveal('.home-text, .section-title', { origin: 'top'});
  ScrollReveal().reveal('.about-left', { origin: 'left'});
  ScrollReveal().reveal(' .about-right', { origin: 'right'});
  ScrollReveal().reveal('.home-img , .about-last, .service-item, .portfolio-item', { origin: 'bottom'});
