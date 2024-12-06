document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const submenuParents = document.querySelectorAll(".has-submenu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Toggle submenus in the hamburger menu
  submenuParents.forEach(parent => {
    parent.addEventListener("click", (e) => {
      if (menu.classList.contains("show")) {
        e.stopPropagation(); // Prevent parent menu closing
        parent.classList.toggle("open");
      }
    });
  });

  // Close menu on clicking a link (for mobile responsiveness)
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });

  // Form Validation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        e.preventDefault();
        return false;
      }

      // Simple Email Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return false;
      }

      alert("Thank you for contacting us!");
    });
  }
});
