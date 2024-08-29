
// loader page js

window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    setTimeout(() => {
        loading.style.display = 'none';
        content.style.display = 'block';
    }, 1000); // Adjust the timeout as needed
})






function goToShop() {
    window.location.href = 'shoping.html'; // Replace 'shop.html' with the actual shop page URL
}










document.addEventListener("DOMContentLoaded", function() {
    // Function to handle counter animation
    const startCounterAnimation = () => {
        const counters = document.querySelectorAll('.count');
        counters.forEach(counter => {
            counter.innerText = '0';

            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const current = +counter.innerText;
                const increment = target / 200;

                if (current < target) {
                    counter.innerText = `${Math.ceil(current + increment)}`;
                    setTimeout(updateCounter, 10);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
        });
    };

    // Start the animation immediately on page load
    startCounterAnimation();

    // Set an interval to restart the animation every 10 seconds (10000 milliseconds)
    setInterval(startCounterAnimation, 10000);
});






    // Burger menu toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    });













// info-section ki open and close js 

document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.info-box');
    const triggerBottom = window.innerHeight / 5 * 4;

    function checkBoxes() {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top + window.pageYOffset;
            const scrollY = window.scrollY;

            if (scrollY > boxTop - triggerBottom) {
                box.classList.add('show-box');
                box.classList.remove('hide-box');
            } else {
                box.classList.add('hide-box');
                box.classList.remove('show-box');
            }
        });
    }

    window.addEventListener('scroll', checkBoxes);
    checkBoxes(); // Run once on page load
});




// about us ki open and close work js

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about-us-info, .about-us-image');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hide');
            } else {
                entry.target.classList.add('hide');
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    sections.forEach(section => {
        observer.observe(section);
    });
});











// Our ServiceS ki open and close js 
document.addEventListener('DOMContentLoaded', function() {
    const serviceBoxes = document.querySelectorAll('.service-box');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hide');
            } else {
                entry.target.classList.add('hide');
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    serviceBoxes.forEach(box => {
        observer.observe(box);
    });
});









document.addEventListener('DOMContentLoaded', function() {
    const ctaSection = document.querySelector('.call-to-action');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hide');
            } else {
                entry.target.classList.add('hide');
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    observer.observe(ctaSection);
});














document.addEventListener('DOMContentLoaded', function() {
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    // Observe each advantage element
    document.querySelectorAll('.advantage').forEach((element) => {
        observer.observe(element);
    });
});



















document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000); // Change slide every 5 seconds
});



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('nameInput').value;

    // Display the alert with the user's name and message
    alert(`${name}, hello! All your problems will be solved within 24 hours, and for solutions within 5 minutes, you can directly speak with Sappy's owner.`);

    // Initiate an automatic call to the provided sales number
    window.location.href = 'tel:+919251644967';

    // Clear the form fields
    document.getElementById('contactForm').reset();
});








const slider = document.querySelector('.product-slider');
const slides = document.querySelectorAll('.product-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.slider-dots');
let currentIndex = 0;

slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
    dotsContainer.appendChild(dot);
});

prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

function goToSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    currentIndex = index;
    slider.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
}

function updateDots() {
    dotsContainer.childNodes.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

goToSlide(0); // Initialize first slide













document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const selectedBusiness = document.getElementById("businessSelect").value;

    if (selectedBusiness) {
        alert(`Congratulations! Your business software is available in Sappy for ${selectedBusiness}.`);

        // Wait for the alert to finish before triggering the call
        setTimeout(function() {
            window.location.href = "tel:+919251644967";
        }, 1000); // 1-second delay
    } else {
        alert("Please select a business before subscribing.");
    }
});




















// Show form when CTA button is clicked
document.getElementById('ctaButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById('ctaFormContainer').style.display = 'flex'; // Show the form
});

// Hide form when close button is clicked
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('ctaFormContainer').style.display = 'none'; // Hide the form
});

// Hide form when clicking outside the form
document.getElementById('ctaFormContainer').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none'; // Hide the form
    }
});

// Handle form submission
document.querySelector('.cta-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Display alert message
    alert('Congratulations! You have been granted a 14-day free trial. During this trial period, you can explore all features of Sappy Tech. Enjoy!');
    
    // Reset the form
    this.reset();
    
    // Hide the form container
    document.getElementById('ctaFormContainer').style.display = 'none';
});
