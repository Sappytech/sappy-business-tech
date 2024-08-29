// loader page js

window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    setTimeout(() => {
        loading.style.display = 'none';
        content.style.display = 'block';
    }, 3000); // Adjust the timeout as needed
})

