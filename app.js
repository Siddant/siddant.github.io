// let parallax;

// function scrollTop(e) {
// 	e.preventDefault();
// 	window.scrollTo(0, 0);
// }

// function parallaxScroll() {
// 	let scrolledHeight = window.pageYOffset;
// 	parallax.style.backgroundPositionY = scrolledHeight - 2;
// }

// document.addEventListener('DOMContentLoaded', () => {
// 	parallax = document.querySelector('.parallax');
// 	window.addEventListener('scroll', parallaxScroll);
// });


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');

    function toggleHamburger() {
        if (hamburger.classList.length > 2) {
            hamburger.classList.remove('is-active')
        } else {
            hamburger.classList.add('is-active')

        }
    }

    console.log(hamburger)

    hamburger.addEventListener('click', toggleHamburger);


})
