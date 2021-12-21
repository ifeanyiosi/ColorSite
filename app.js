const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')

//display mobile menu
const mobileMenu = () => {
 menu.classList.toggle('is-active')
 menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// show active menu when scrolling
const highlightMenu = () => {
 const elem = document.querySelector('.highlight')
 const homeMenu = document.querySelector('#home-page')
 const aboutMenu = document.querySelector('#about-page')
 const servicesMenu = document.querySelector('#services-page')
 let scrollPos = window.scrollY

 // add highlights class to menu
 if(window.innerWidth > 960 && scrollPos < 600){
  homeMenu.classList.add('highlight');
  aboutMenu.classList.remove('highlight');
  
  return
 } else if (window.innerWidth > 960 && scrollPos < 1400){
 aboutMenu.classList.add('highlight');
  homeMenu.classList.remove('highlight');
  servicesMenu.classList.remove('highlight');
  return
 } else if (window.innerWidth > 960 && scrollPos < 2345){
  servicesMenu.classList.add('highlight')
  aboutMenu.classList.remove('highlight')
  return
 }

 if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
  elem.classList.remove('highlight')
 }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);