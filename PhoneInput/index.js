
const dropdown = document.querySelector(".dropdown") ; 
const li = document.querySelectorAll("li") ; 
const img = document.querySelector(".img") ; 
const button = document.querySelector("button") ; 
const input = document.querySelector("input") ; 
const arr = [ "+123","+49" ,"+598", "+1 (234)"] ; 
/* seting the regexp  */
const us = /\+1\s\(\d{3}\)\s\d{3}-\d{4}/g ; 
const gr = /\+49\s\d{4}\s\d{8}/g ; 
const ur = /\+598\s\d{3}\s\d{3}\s\d{3}\s\d{3}/g ; 
const dz = /\+123\d\s\d{2}\s\d{2}\s\d{2}\s\d{2}/g ; 
/* default state */ 
input.value = arr[0] ; 
/* drop down menu */
var flags = ["algeria","germany" ,"urguay" ,"us"] ; 
img.setAttribute("data",flags[0]) ; 
var rex = dz ; 
button.addEventListener("click" , function() {
  dropdown.classList.toggle("hidden") ; 
})
li.forEach((Element , index)  => {
  Element.addEventListener("click", () => {
    let holder = img.src ; 
    let format = arr[index+1] ; 
    let atrr = flags[index+1] ; 
    flags[index+1] = flags[0] ; 
    flags[0] = atrr ; 
    input.value = format ; 
    arr[index+1] = arr[0] ; 
    arr[0] = format ; 
    img.src = Element.firstChild.src ; 
    Element.firstChild.src = holder ;
    console.log(flags[0])
    holder ="" ;  
    rex = setregex() ;
  })
})


/* setregex */
const setregex = function() {
  switch (flags[0]) {
    case "algeria": 
      return dz ; 
    case "germany" : 
      return gr ; 
    case "urguay" : 
      return ur ; 
    case "us" : 
      return us ; 
  }
}
/* handlling the event  */
input.addEventListener("keyup" , function() {
      if( this.value.match(rex)) {
        this.style.borderColor ="green" ; 
        this.style.outlineColor ="green" ; 
      }else {
        this.style.borderColor = "red" ; 
        this.style.outlineColor = "red" ; 
      }
})