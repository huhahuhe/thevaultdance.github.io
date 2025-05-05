function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    this.reset();
  });
  