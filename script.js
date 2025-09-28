document.addEventListener('DOMContentLoaded', () => {
    // Function to load the common header/navigation component
    const loadHeaderNav = () => {
        const headerContainer = document.getElementById('header-nav-container');
        if (headerContainer) {
            fetch('header-nav.html')
                .then(response => response.text())
                .then(html => {
                    headerContainer.innerHTML = html;
                    // Re-initialize hamburger menu after content loads
                    initializeHamburger();
                })
                .catch(err => console.error("Could not load header/nav:", err));
        }
    };

    // Function to initialize the hamburger menu (mobile menu)
    const initializeHamburger = () => {
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');

        if (hamburger && menu) {
            hamburger.addEventListener('click', () => {
                menu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }
    };

    // Call the function to load header/nav on page load
    loadHeaderNav();

    // The rest of your script.js logic can go here (e.g., gallery functions, form submissions)
});
