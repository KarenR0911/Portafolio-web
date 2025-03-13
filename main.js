/*Dark mode */
const darkIcon = document.querySelector(".btn-Dark i");
btnDark.onclick = function () {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  darkIcon.classList = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
};
const toggleBtn = document.querySelector(".toggle_button");
const toggleBtnIcon = document.querySelector(".toggle_button i");
const dropdownMenu = document.querySelector(".dropdown_menu");

/*Dropdown */
toggleBtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

/*projects*/

let next= document.querySelector(".next")
let prev= document.querySelector(".prev")

next.addEventListener('click', function(){
  let items=document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
  let items=document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length-1])
})

/*contact */

const inputs= document.querySelectorAll(".input-contact");
inputs.forEach((inp) => {
  inp.addEventListener('focus', () => {
    inp.parentNode.classList.add("focus-inputs");
    inp.parentNode.classList.add("not-empty");
  });
  inp.addEventListener('blur', () => {
    if (inp.value ==""){
      inp.parentNode.classList.remove("not-empty");
    }
    inp.parentNode.classList.remove("focus-inputs");
  });
})

ScrollReveal({ 
  reset: true,
  distance: '50px',
  duration: 800,
  delay: 100

 });

 ScrollReveal().reveal('.home-img', {origin:'right'});
 ScrollReveal().reveal('.home-content p', {origin:'left'});
 ScrollReveal().reveal('.about-img, .about-content p', {origin:'bottom'});
 ScrollReveal().reveal('.about-content a', {origin:'right'});
 ScrollReveal().reveal('h1, h3', {origin:'top'});
 ScrollReveal().reveal('.services-1, .services-3', {origin:'left'});
 ScrollReveal().reveal('.services-2, .services-4', {origin:'right'});
 ScrollReveal().reveal('.projects-content', {origin:'bottom'});
 ScrollReveal().reveal('.form-contact', {origin:'bottom'});