document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navigationBar = document.querySelector('.navbar-start');

    function toggleHamburger() {
        if (hamburger.classList.length > 2) {
            hamburger.classList.remove('is-active')
            navigationBar.style.height = '0vh'
            navigationBar.style.fontSize = '0vh'


        } else {
            hamburger.classList.add('is-active')
            navigationBar.style.height = '42vh'
            navigationBar.style.fontSize = '3vh'

        }
    }

    hamburger.addEventListener('click', toggleHamburger);

})
