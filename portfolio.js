// Getting URL parameters
const params = new URLSearchParams(window.location.search);

// Creating a table or list to display the data
const userInfoContainer = document.getElementById('userInfo');

params.forEach((value, key) => {
    const infoItem = document.createElement('p');
    infoItem.textContent = `${key}: ${value}`;
    userInfoContainer.appendChild(infoItem);
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

