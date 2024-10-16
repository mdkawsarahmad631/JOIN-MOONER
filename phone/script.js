document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach((slider, index) => {
        const images = slider.querySelectorAll('img');
        let currentIndex = 0;
        
        function showNextImage() {
            const currentImage = images[currentIndex];
            const nextIndex = (currentIndex + 1) % images.length;
            const nextImage = images[nextIndex];
            
            // Move current image to the left
            currentImage.classList.add('prev');
            
            // Move next image from right to center
            nextImage.classList.add('active');
            
            // After transition, remove classes and update currentIndex
            setTimeout(() => {
                currentImage.classList.remove('active', 'prev');
                currentIndex = nextIndex;
            }, 500);
        }
        
        // Set first image as active
        images[0].classList.add('active');
        
        // Change image every 4 seconds for the first phone, and 4.5 seconds for the second phone
        setInterval(showNextImage, index === 0 ? 4000 : 4500);
    });
});
