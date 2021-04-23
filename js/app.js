document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.navigation')
  const menu = document.querySelector('.navigation-mobile')
  const navigationBar = document.querySelector('.navigation')
  const sections = Array.from(document.querySelectorAll('.section'))
  const timeLine = document.querySelectorAll('.timeline li')

  const navHeight = navigation?.offsetHeight

  const heroHeight = sections[0].offsetHeight / 1.75

  function handleScrollEvent() {
    let currentPostion =
      document.documentElement.scrollTop || document.body.scrollTop
    if (currentPostion >= heroHeight) {
      navigationBar?.classList?.add('scroll-activate')
      navigation?.classList?.add('shadow')
    } else {
      navigationBar?.classList.remove('scroll-activate')
      navigation?.classList.remove('shadow')
    }

    sections.forEach((elem) => {
      let top = elem.offsetTop - navHeight
      let bottom = elem.offsetHeight + top
      if (
        (currentPostion >= top && currentPostion <= bottom) ||
        (elem.className == 'footer section' &&
          currentPostion + 500 >= top &&
          currentPostion + 500 <= bottom)
      ) {
        const currentElm = document
          .getElementById(elem.getAttribute('id'))
          .getAttribute('id')
        const nav = navigation
          .getElementsByClassName('active')[0]
          .getAttribute('href')
          .replace('#', '')

        if (currentElm !== nav) {
          navigation
            .getElementsByClassName('active')[0]
            .classList.remove('active')
          document
            .querySelector(`[href='#${elem.getAttribute('id')}']`)
            .classList.add('active')
        }
      }
    })
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  function callbackFunc() {
    for (let i = 0; i < timeLine.length; i++) {
      if (isElementInViewport(timeLine[i])) {
        timeLine[i].classList.add('in-view')
      }
    }
  }

  new Rellax('.rellax', {
    speed: 8,
    center: false,
    round: true,
    vertical: true,
    horizontal: false,
  })

  $('.project-link').each((_, value) =>
    $(value).animatedModal({ color: 'white' })
  )

  if (menu) {
    const btn = menu?.querySelector('.navigation-mobile-burger')
    btn.addEventListener('click', (evt) => {
      menu?.classList?.toggle('active')
    })
  }

  if (navigationBar) {
    window.addEventListener('scroll', handleScrollEvent)
  }

  window.addEventListener('load', callbackFunc)
  window.addEventListener('resize', callbackFunc)
  window.addEventListener('scroll', callbackFunc)
})
