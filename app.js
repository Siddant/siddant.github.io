document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navbar');

    const navigationBar = document.querySelector('.navbar-start');
    const navigationBarItems = document.querySelectorAll('.navbar-start .navbar-item');
    const navigationBarItemsArray = Array.from(navigationBarItems)

    const section = document.querySelectorAll('.section');
    let navHeight = navigation.offsetHeight;

    console.log(navigationBarItems)


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
        section.forEach(elem => {
            let top = elem.offsetTop - navHeight
            let bottom = elem.offsetHeight + top

            if (currentPostion >= top && currentPostion <= bottom) {
                // navigationBarItems.classList.remove('is-active')
                // console.log(navigation.getElementsByClassName('is-active')[0].classList.remove('is-active'))

                navigation.getElementsByClassName('is-active')[0].classList.remove('is-active');
                // navigation.getElementsByTagName(`a[href=${elem.getAttribute('id')}]`);
                document.querySelector(`[href='#${elem.getAttribute('id')}']`).classList.add('is-active');



                // console.log(`#${elem.getAttribute('id')}`)
                // console.log(document.querySelector("[href='#home']"))

            }

        })

        console.log(currentPostion)
    }

    hamburger.addEventListener('click', toggleHamburger);
    window.addEventListener('scroll', handleScrollEvent);

    AOS.init();

})


/*var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
}); */