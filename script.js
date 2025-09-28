document.addEventListener("DOMContentLoaded", () => {

    /**
     * Attaches event listeners to the navigation menu for mobile responsiveness.
     * This function should only be called after the header content is loaded.
     */
    const setupNavigation = () => {
        const hamburger = document.getElementById("hamburger");
        const menu = document.getElementById("menu");

        if (!hamburger || !menu) {
            console.error("Hamburger or menu not found. Navigation setup failed.");
            return;
        }

        // Toggle the main menu for mobile view
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("show");
        });

        // Handle submenu clicks in mobile view using event delegation
        menu.addEventListener('click', (e) => {
            const submenuParent = e.target.closest('.has-submenu');
            // Only toggle submenu if we are in mobile view (menu has .show class)
            if (submenuParent && menu.classList.contains('show')) {
                e.preventDefault(); // Prevent link navigation
                submenuParent.classList.toggle('submenu-open');
            }
        });
    };

    /**
     * Fetches an HTML component and injects it into a specified container.
     * @param {string} url - The URL of the HTML component to fetch.
     * @param {string} containerId - The ID of the container element.
     * @param {function} [callback] - An optional callback function to run after loading.
     */
    const loadComponent = (url, containerId, callback) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${url}: ${response.status} ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                const container = document.getElementById(containerId);
                if (container) {
                    container.innerHTML = data;
                    // If a callback function is provided, execute it
                    if (callback) {
                        callback();
                    }
                } else {
                    console.error(`Container with ID #${containerId} not found.`);
                }
            })
            .catch(error => console.error(error));
    };

    // --- Load all common components ---
    // The navigation setup is passed as a callback to the header loading function.
    // This guarantees the menu elements exist before the script tries to access them.
    loadComponent('header.html', 'header-container', setupNavigation);
    loadComponent('footer.html', 'footer-container');
    loadComponent('sidebar.html', 'sidebar-container');
});