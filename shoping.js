// add to cart ki  complet  js
// Event Listener for Add to Cart buttons
document.querySelectorAll('.cart-button').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id'); // Get the product ID from the button
        addToCart(productId); // Call the function to add the product to the cart
    });
});

// Function to Add Product to Cart
function addToCart(productId) {
    // Send an AJAX request to the server
    fetch('/add-to-cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify({ productId: productId }), // Send the product ID in the request body
    })
    .then(response => response.json()) // Parse the JSON response from the server
    .then(data => {
        if (data.success) { // If the server responds with success
            alert('Product added to cart! 🛒'); // Show a success message
            updateCartIcon(data.cartCount); // Optionally update the cart icon with the new count
        } else {
            alert('Error adding product to cart.'); // Show an error message if adding to cart failed
        }
    })
    .catch(error => {
        console.error('Error:', error); // Log any errors to the console
        alert('Error adding product to cart.'); // Show a generic error message
    });
}

// Function to Update the Cart Icon (Optional)
function updateCartIcon(newCartCount) {
    document.querySelector('.cart-count').textContent = newCartCount; // Update the cart count in the UI
}









document.querySelectorAll('.cart-button').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id'); // Get the product ID
        const inquiryForm = document.getElementById('inquiry-form');
        inquiryForm.style.display = 'flex'; // Show the inquiry form
        inquiryForm.setAttribute('data-product-id', productId); // Set product ID on form
    });
});

document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id'); // Get the product ID
        const buyForm = document.getElementById('buy-form');
        buyForm.style.display = 'flex'; // Show the buy form
        buyForm.setAttribute('data-product-id', productId); // Set product ID on form
    });
});

function closeForm(formId) {
    const form = document.getElementById(formId);
    form.style.display = 'none'; // Hide the form
}

document.querySelector('.inquiry-form form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('You will be contacted shortly! 📞');
    window.location.href = 'tel:+919251644967'; // Open dialer to the specified number
    closeForm('inquiry-form'); // Hide the form
});

document.querySelector('.buy-form form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Thank you for your purchase! 📞');
    window.location.href = 'tel:+919251644967'; // Open dialer to the specified number
    closeForm('buy-form'); // Hide the form
});












    // Burger menu toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
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

