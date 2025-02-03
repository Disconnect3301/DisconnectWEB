// const doodle = document.querySelector('.doodle');

// function updateDoodlePosition() {
//   doodle.style.top = `${window.scrollY + window.innerHeight / 2}px`;
//   doodle.style.left = `${window.scrollX + window.innerWidth / 2}px`;
// }

// window.addEventListener('scroll', updateDoodlePosition);
// window.addEventListener('load', updateDoodlePosition);

document.addEventListener("DOMContentLoaded", function() {
    const favoritesLink = document.getElementById("favorites-link");
    const favoritesContainer = document.getElementById("favorites-container");

    favoritesLink.addEventListener("click", function(event) {
        event.preventDefault();
        loadFavorites();
    });

    function loadFavorites() {
        fetch('/favorites/')
            .then(response => response.text())
            .then(html => {
                favoritesContainer.innerHTML = html;
                window.history.pushState({ page: 'favorites' }, 'Favorites', '/favorites/');
            });
    }
});

window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page === 'favorites') {
        // Restore the previous page's content
        favoritesContainer.innerHTML = '';
        // You can also restore the original HTML content here
        // favoritesContainer.innerHTML = originalHtmlContent;
    }
});
