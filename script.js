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

// Albums data
const albums = [
    { name: "Album 1", path: "images/Folder1" }];

// Generate album thumbnails
const galleryContainer = document.getElementById("gallery-container");
albums.forEach(album => {
    const albumDiv = document.createElement("div");
    albumDiv.classList.add("album");

    // First image of album as thumbnail
    const thumbnail = document.createElement("img");
    thumbnail.src = `${album.path}/img1.jpg`; // Adjust naming convention if needed
    thumbnail.alt = album.name;

    const caption = document.createElement("p");
    caption.textContent = album.name;

    albumDiv.appendChild(thumbnail);
    albumDiv.appendChild(caption);
    galleryContainer.appendChild(albumDiv);

    // Add click event to show album images
    albumDiv.addEventListener("click", () => showAlbum(album.path));
});

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const close = document.getElementById("close");

function showAlbum(path) {
    lightboxContent.innerHTML = ""; // Clear previous content
    for (let i = 1; i <= 10; i++) { // Assume up to 10 images per album
        const img = document.createElement("img");
        img.src = `${path}/img${i}.jpg`;
        img.alt = `Image ${i}`;
        img.onerror = () => img.remove(); // Remove if image doesn't exist
        lightboxContent.appendChild(img);
    }
    lightbox.classList.remove("hidden");
}

close.addEventListener("click", () => lightbox.classList.add("hidden"));