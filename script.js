document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const submenuParents = document.querySelectorAll(".has-submenu");

  // Toggle the main menu
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Ensure submenus are hidden by default
  submenuParents.forEach(parent => {
    const submenu = parent.querySelector(".submenu");
    if (submenu) submenu.style.display = "none"; // Hide submenu initially

    // Toggle submenu visibility when parent is clicked
    parent.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent event bubbling

      if (menu.classList.contains("show")) { // Only allow submenu toggle in mobile view
        submenu.style.display = 
          submenu.style.display === "none" || submenu.style.display === ""
            ? "block"
            : "none";
      }
    });
  });

  // Close menu on clicking a link (for mobile responsiveness)
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");

      // Hide all submenus when menu is closed
      submenuParents.forEach(parent => {
        const submenu = parent.querySelector(".submenu");
        if (submenu) submenu.style.display = "none";
      });
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
    let backPressCount = 0;
    const exitTimeLimit = 2000; // 2 seconds
    let lastPressTime = 0;

    window.addEventListener('popstate', () => {
      const currentTime = new Date().getTime();

      // If the back button is pressed within 2 seconds, exit the browser
      if (currentTime - lastPressTime <= exitTimeLimit) {
        // Close the browser window or navigate to a safe location
        window.close(); // This will work only for windows opened by JavaScript.
      } else {
        lastPressTime = currentTime;
        // Push a new state to prevent the page from navigating away
        history.pushState(null, null, location.href);
      }
    });

    // Push an initial state to the history stack
    history.pushState(null, null, location.href);


fetch('sidebar.html') 
        .then(response => response.text()) 
        .then(data => { 
            document.getElementById('sidebar-container').innerHTML = data; 
        }); 

fetch('header.html') 
        .then(response => response.text()) 
        .then(data => { 
            document.getElementById('header-container').innerHTML = data; 
        }); 

