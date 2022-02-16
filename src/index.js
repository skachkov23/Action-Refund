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

//slider
if (window.matchMedia("(max-width: 640px)").matches) {

  let slideIndex = 1;
  showSlides();
  
  function showSlides() {
      const logos = document.getElementsByClassName('page__company-logo');
      for (let i = 0; i < logos.length; i++) {
          logos[i].classList.add('mobile__logo_hidden');
      }
      slideIndex++;
      if (slideIndex > logos.length) {
        slideIndex = 1
      };
      logos[slideIndex-1].classList.remove("mobile__logo_hidden");
  
      setTimeout(showSlides, 1500); 
  }
  
}

// phone -

const ph = document.getElementById('phone')
    ph.addEventListener("keydown", (e) => {
        if(e.key === "Backspace" || e.key === "Delete"){
          return ph.value;
        }
        if(e.target.value.length === 3) {
          ph.value = ph.value + "-";
        }
        if(e.target.value.length === 7) {
          ph.value = ph.value + "-";
        }
    })
