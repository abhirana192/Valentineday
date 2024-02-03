function showMessage() {
    document.getElementById('message').innerHTML = 'Thank you for saying yes! 😊';
    document.getElementById('cuteGifContainer').style.display = 'block';
    changeBackground();
}

function moveButton() {
    alert('Sorry, I only accept "Yes".');
}

function changeBackground() {
    document.body.style.backgroundImage = "url('https://media.tenor.com/fOP9jA3HaMsAAAAi/hearts-of-happiness-hearts.gif')"; // Replace 'your_gif_background.gif' with your desired GIF path
    document.body.style.backgroundColor = "transparent"; // Set a transparent background color
}
