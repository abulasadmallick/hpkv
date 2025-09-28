// gallery.js

document.addEventListener('DOMContentLoaded', () => {
    // Select all images across all galleries
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    // Convert NodeList to an Array to easily find the index
    const imagesArray = Array.from(galleryImages);
    let currentIndex = 0;

    const openLightbox = (index) => {
        currentIndex = index;
        lightboxImg.src = imagesArray[currentIndex].src;
        lightbox.style.display = 'flex';
    };

    const closeLightbox = () => {
        lightbox.style.display = 'none';
    };

    const showPrevImage = () => {
        currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
        lightboxImg.src = imagesArray[currentIndex].src;
    };

    const showNextImage = () => {
        currentIndex = (currentIndex + 1) % imagesArray.length;
        lightboxImg.src = imagesArray[currentIndex].src;
    };

    // Add click event to each gallery image
    imagesArray.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    // Add event listeners for lightbox controls
    if (lightbox) {
        closeBtn.addEventListener('click', closeLightbox);
        prevBtn.addEventListener('click', showPrevImage);
        nextBtn.addEventListener('click', showNextImage);

        // Close lightbox if the background is clicked
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'ArrowLeft') showPrevImage();
                if (e.key === 'ArrowRight') showNextImage();
                if (e.key === 'Escape') closeLightbox();
            }
        });
    }
});