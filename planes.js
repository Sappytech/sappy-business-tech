// Function to open the form
function openForm(plan) {
    document.getElementById("buyFormModal").style.display = "block";
    document.getElementById("planName").textContent = plan.toUpperCase();
    document.getElementById("selectedPlan").value = plan;
}

// Function to close the form
function closeForm() {
    document.getElementById("buyFormModal").style.display = "none";
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();
    
    // You can add form validation here if needed
    
    // Redirecting to a new page (e.g., thank you or payment page)
    window.location.href = "thank-you.html";
}










// loader page js

window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    setTimeout(() => {
        loading.style.display = 'none';
        content.style.display = 'block';
    }, 3000); // Adjust the timeout as needed
})

