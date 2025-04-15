document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const images = gallery.querySelectorAll("img");
    const startButton = document.querySelector("#start");
    const stopButton = document.querySelector("#stop");

    let currentIndex = 0;
    let slideshowInterval = null;

    
    const showImage = (index) => {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? "1" : "0"; 
            img.style.zIndex = i === index ? "1" : "0"; 
        });
    };

    
    const startSlideshow = () => {
        if (!slideshowInterval) {
            slideshowInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            }, 3000); 
        }
    };

    
    const stopSlideshow = () => {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    };

    
    startButton.addEventListener("click", startSlideshow);
    stopButton.addEventListener("click", stopSlideshow);

    
    showImage(currentIndex);
});


