/* the burger menu  */
const menu = document.querySelector(".menu") ; 
const burgermenu = document.querySelector(".burger-menu") ; 
burgermenu.addEventListener("click" , function() {
  menu.classList.toggle("hidden") ; 
})