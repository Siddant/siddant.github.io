document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navbar');

    const navigationBar = document.querySelector('.navbar-start');
    // const navigationBarItems = document.querySelectorAll('.navbar-start .navbar-item');

    const sections = document.querySelectorAll('.section');
    const navHeight = navigation.offsetHeight;
    const footerHeight = sections[1].offsetHeight

    console.log(footerHeight)
    console.log(sections[4].offsetHeight)


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


    function handleScrollEvent() {
        let currentPostion = document.documentElement.scrollTop || document.body.scrollTop
        sections.forEach(elem => {
            let top = elem.offsetTop - navHeight
            let bottom = elem.offsetHeight + top
            if (currentPostion >= top && currentPostion <= bottom || (elem.className == 'footer section' && currentPostion + 200 >= top && currentPostion + 200 <= bottom)) {
                console.log(elem.className)
                navigation.getElementsByClassName('is-active')[0].classList.remove('is-active');
                document.querySelector(`[href='#${elem.getAttribute('id')}']`).classList.add('is-active');
            }
        })
    }

    hamburger.addEventListener('click', toggleHamburger);
    window.addEventListener('scroll', handleScrollEvent);

    AOS.init();

})
