// about.js
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    
    let index = 0;
    const totalSlides = document.querySelectorAll('.testimonial').length;
    const slideWidth = document.querySelector('.testimonial').offsetWidth;

    function updateSlidePosition() {
        sliderWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : totalSlides - 1;
        updateSlidePosition();
    });

    nextButton.addEventListener('click', () => {
        index = (index < totalSlides - 1) ? index + 1 : 0;
        updateSlidePosition();
    });

    // Optional: Auto-slide functionality
    setInterval(() => {
        nextButton.click();
    }, 5000); // Change slide every 5 seconds
});














// loader page js

window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    setTimeout(() => {
        loading.style.display = 'none';
        content.style.display = 'block';
    }, 3000); // Adjust the timeout as needed
})

