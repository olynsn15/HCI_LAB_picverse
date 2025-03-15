var firstIndex = 0;

function automaticSlide() {
    setTimeout(automaticSlide, 3500); 
    const images = document.querySelectorAll('.slider-image');
    const artworkInfo = document.querySelector('.artwork-info');
    const artworkTitle = document.getElementById('artwork-title');
    const artworkArtist = document.getElementById('artwork-artist');

    artworkInfo.style.transition = "opacity 1.5s ease-in-out"; 
    artworkInfo.style.opacity = "0"; 

    
    images.forEach(img => {
        img.style.transition = "opacity 3s ease-in-out"; 
        img.style.opacity = "0"; 
    });

    firstIndex++;
    if (firstIndex > images.length) {
        firstIndex = 1;
    }

    const activeImage = images[firstIndex - 1];

    
    setTimeout(() => {
        activeImage.style.opacity = "1"; 
    }, 100); 

    setTimeout(() => {
        artworkTitle.textContent = activeImage.dataset.title;
        artworkArtist.textContent = activeImage.dataset.artist;
        artworkInfo.style.opacity = "1"; // Fade in text
    }, 1500); 
}

automaticSlide();


