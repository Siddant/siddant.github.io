let parallax;

function scrollTop(e) {
	e.preventDefault();
	window.scrollTo(0, 0);
}

function parallaxScroll() {
	let scrolledHeight = window.pageYOffset;
	parallax.style.backgroundPositionY = scrolledHeight - 2;
}

document.addEventListener('DOMContentLoaded', () => {
	parallax = document.querySelector('.parallax');
	window.addEventListener('scroll', parallaxScroll);
});
