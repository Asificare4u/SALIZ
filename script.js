// Function to check collision between two elements
function isColliding(elem1, elem2) {
    const rect1 = elem1.getBoundingClientRect();
    const rect2 = elem2.getBoundingClientRect();

    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}

// Function to handle collision detection and move images
function handleCollisions() {
    const images = document.querySelectorAll('.bio-image, .bio-image-small');
    
    images.forEach((image, index) => {
        for (let i = index + 1; i < images.length; i++) {
            if (isColliding(image, images[i])) {
                // Add the 'moving' class to images when they collide
                image.classList.add('moving');
                images[i].classList.add('moving');
            }
        }
    });
}

// Function to remove the moving class after animation
function resetMovingClass() {
    const images = document.querySelectorAll('.bio-image, .bio-image-small');
    images.forEach(image => {
        image.classList.remove('moving');
    });
}

// Run collision detection every 100ms
setInterval(handleCollisions, 100);

// Optional: To reset animation after some time (example: 2 seconds)
setInterval(resetMovingClass, 2000);
