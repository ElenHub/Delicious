/*==================== Show menu ====================*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
   nav = document.getElementById(navId)
   
   // Validate that variables exist
   if(toggle && nav){
       toggle.addEventListener('click', ()=>{
           // We add the show-menu class to the div tag with the nav__menu class
           nav.classList.toggle('show-menu')
       })
   }
}
showMenu('nav-toggle','nav-menu')


/*====================  SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
   const scrollY = window.pageYOffset

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      } else {
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
   const scrollTop = document.getElementById('scroll-top');
   // Когда высота прокрутки превышает 560 пикселей в окне просмотра, добавьте класс show-scroll к тегу a с классом scroll-top
   if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//Ранее выбранная тема (если выбран пользователь)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//Мы получаем текущую тему интерфейса, проверяя класс dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// Мы проверяем, выбрал ли пользователь ранее тему
if (selectedTheme) {
   //Если проверка выполнена, мы спрашиваем, в чем была проблема, чтобы узнать, активировали мы или деактивировали темную
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
   themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Активируйте / деактивируйте тему вручную с помощью кнопки
themeButton.addEventListener('click', () => {
   //Добавьте или удалите темную тему / тему значков
   document.body.classList.toggle(darkTheme)
   themeButton.classList.toggle(iconTheme)
   //Мы сохраняем тему и текущую иконку, которую выбрал пользователь
   localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 2000,
   reset: true
});

sr.reveal(`.home__data, .home__img,
           .about__data, .about__img,
           .services__content, .menu__content,
           .app__data, .app__img,
           .contact__data, .contact__button,
           .footer__content`, {
   interval: 200
})