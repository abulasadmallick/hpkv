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

// Define the folder structure
const folderStructure = {
    folder1: ["images/folder1/image1.jpg", "images/folder1/image2.jpg"],
    folder2: ["images/folder2/image3.jpg", "images/folder2/image4.jpg"],
};

// Get the folder and image containers
const folderContainer = document.getElementById("folders");
const imageContainer = document.getElementById("images");

// Create folder buttons
Object.keys(folderStructure).forEach(folder => {
    const folderElement = document.createElement("div");
    folderElement.classList.add("folder");
    folderElement.textContent = folder;
    folderElement.addEventListener("click", () => displayImages(folder));
    folderContainer.appendChild(folderElement);
});

// Display images in the selected folder
function displayImages(folder) {
    imageContainer.innerHTML = ""; // Clear previous images
    folderStructure[folder].forEach(imagePath => {
        const imgElement = document.createElement("img");
        imgElement.src = imagePath;
        imageContainer.appendChild(imgElement);
    });
}

// Display the first folder by default
if (Object.keys(folderStructure).length > 0) {
    displayImages(Object.keys(folderStructure)[0]);
}
