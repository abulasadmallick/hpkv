document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
});


/*Hamburger Menu Toggle
document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
  });
  
  // Close menu on clicking a link (mobile responsive)
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu').classList.remove('active');
    });
  });*/
  
  // Form Validation
  document.querySelector('form').addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      e.preventDefault();
      return false;
    }
  
    // Simple Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      e.preventDefault();
      return false;
    }
  
    alert('Thank you for contacting us!');
  });
