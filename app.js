document.addEventListener('DOMContentLoaded', () => {
    // Select the profile image
    const profileImg = document.getElementById('profile-picture');

    // Add a click event listener to toggle the zoom effect
    profileImg.addEventListener('click', () => {
        profileImg.classList.toggle('zoomed');
    });

    // Fetch data from JSON for videos and images (existing code)
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const videosContainer = document.getElementById('videos');
            const imagesContainer = document.getElementById('images');
            
            // Display videos (existing code)
            data.videos.forEach(video => {
                const videoElement = document.createElement('div');
                videoElement.classList.add('video');
                videoElement.innerHTML = `
                    <iframe src="${video.url}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                `;
                videosContainer.appendChild(videoElement);
            });

            // Display images (existing code)
            data.images.forEach(image => {
                const imageElement = document.createElement('div');
                imageElement.classList.add('image-card');
                imageElement.innerHTML = `
                    <img src="${image.url}" alt="${image.title}">
                    <h3>${image.title}</h3>
                    <p>${image.description}</p>
                `;
                imagesContainer.appendChild(imageElement);
            });
        })
        .catch(error => console.log('Error fetching JSON data:', error));
});
