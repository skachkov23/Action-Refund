//burger-menu
const burgerMenu = document.querySelector('.burger__menu');
const bodyMenu = document.querySelector('.menu__body');
if (burgerMenu) {
    burgerMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        bodyMenu.classList.toggle('_active');
    });
}

//smooth link
const navLinks = document.querySelectorAll('.nav__link[data-goto]');
if (navLinks.length > 0) {
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', onNavLinkClick);
  });

  function onNavLinkClick(element) {
    const navLink = element.target;
    if(navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
      const gotoBlock = document.querySelector(navLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

      if (burgerMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        burgerMenu.classList.remove('_active');
        bodyMenu.classList.remove('_active');
      }


      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      element.preventDefault();
    }
  }
}

// onClick Text
const title = document.querySelectorAll('.page__terms-title-nav');
const text = document.querySelectorAll('.page__terms-text');
const arrow = document.querySelectorAll('.page__terms-nav')

for (let i = 0; i < title.length; i++) {
  title[i].addEventListener('click', (e) => {
    text[i].classList.toggle('hidden-text')
    arrow[i].classList.toggle('round')
  })
}
