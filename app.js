document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navigationBar = document.querySelector('.navbar-start');

    function toggleHamburger() {
        if (hamburger.classList.length > 2) {
            hamburger.classList.remove('is-active')
            navigationBar.style.display = 'none'
        } else {
            hamburger.classList.add('is-active')
            navigationBar.style.display = 'flex'
        }
    }

    hamburger.addEventListener('click', toggleHamburger);

})
