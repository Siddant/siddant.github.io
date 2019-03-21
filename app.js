document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navbar');

    const navigationBar = document.querySelector('.navbar-start');
    const navigationBarItems = document.querySelectorAll('.navbar-start .navbar-item');
    const section = document.querySelectorAll('.section');
    let nav_height = navigation.offsetHeight;

    console.log(navigationBarItems)
    console.log(section)
    console.log(nav_height)
    console.log(this)

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
        console.log('here')
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