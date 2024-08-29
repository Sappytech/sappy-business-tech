// Elements
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Event listeners to switch between forms
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Handling form submission
document.querySelectorAll('.form-container form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formType = this.querySelector('h1').textContent.includes('Create Account') ? 'Sign Up' : 'Sign In';

        // Collecting all input values
        const formData = new FormData(this);
        const userData = Object.fromEntries(formData.entries());

        // Strong validation
        for (let [key, value] of formData.entries()) {
            if (!value.trim()) {
                alert(`Please fill in the ${key} field.`);
                return;
            }
        }

        if (formType === 'Sign Up') {
            const password = formData.get('Password');
            const confirmPassword = formData.get('Confirm Password');

            // Password confirmation validation
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // Security question answers validation
            const securityAnswer1 = formData.get('Answer to Security Question 1');
            const securityAnswer2 = formData.get('Answer to Security Question 2');

            if (securityAnswer1.trim() === '' || securityAnswer2.trim() === '') {
                alert('Please provide answers to both security questions.');
                return;
            }
        }

        // Storing data in localStorage
        localStorage.setItem('profileData', JSON.stringify(userData));

        // Redirect to loginredirct.html
        window.location.href = 'loginredirct.html';
    });
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

