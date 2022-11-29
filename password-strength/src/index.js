billan = 100000000000 ; 
const LCL = 26 , UCL = 26 , D = 10 , SC = 33 ;
const threewiks = 1814400; 
const maxyear = 12614400000 ;


/* selecting the input field and the spans */
const input = document.querySelector("input") ; 
const spans = document.querySelectorAll("span") ; 


/* defining the regex */
const lowercase = /[a-z]+/g ; 
const uppercase = /[A-Z]+/g ; 
const digit = /\d+/g ; 
const special = /[^A-Za-z0-9]+/g ; 

/* calculate the time on seconds */
var obj = {
  lowercase: [] , 
  uppercase: [] , 
  digit: [] , 
  special: [] , 
} ; 
var lc , uc , sp , d ; 

function calculate (value) {
    while((arra =  lowercase.exec(value)) !== null) {
      obj.lowercase.push(arra[0]) ; 
    }
    while((array = digit.exec(value)) !== null) {
      obj.digit.push(array[0]) ; 
    }
    while((ar = uppercase.exec(value)) !== null ){
      obj.uppercase.push(ar[0]) ; 
    }
    while((ar = special.exec(value)) !== null ){
      obj.special.push(ar[0]) ; 
    }
    lc = Number( obj.lowercase.join("").length) == 0 ? 0 : 1 ; 
    uc = Number( obj.uppercase.join("").length) == 0 ? 0 : 1 ; 
    sp = Number( obj.special.join("").length) == 0 ? 0 : 1; 
    d = Number( obj.digit.join("").length) == 0 ? 0 : 1; 
    var len = Number(value.length) ; 
    console.log(obj , lc ,uc ,sp ,d , len ) ; 

    return  Math.pow((LCL*lc + UCL*uc + SC*sp + D*d) , len )/billan ; 
}


/* sets the colors  */
function setcolors(tim) {
  if(tim<threewiks) {
    spans[0].style.backgroundColor = "#ef3131" ; 
    spans.forEach((Element , index) => {
      if(index!= 0) {
        Element.style.backgroundColor = "gray" ; 
      }
    })
  }else if(tim>threewiks && tim < maxyear) {
    spans[2].style.backgroundColor = "gray" ; 
    spans.forEach((Element , index) => {
      if(index!=2) {
        Element.style.backgroundColor =  "#f9df1d"
      }
    })
  }else {
    spans.forEach((Element ) => {
        Element.style.backgroundColor =  "#27f131"
      }
    )
  }
}

/* convert time  */
function secondsToDhms(seconds) {
    if(seconds < 1) {
      return "0 Seconds" ; 
    }
    seconds = Number(seconds);
    let d = Math.floor(seconds / (3600*24));
    let h = Math.floor(seconds % (3600*24) / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 60);

    let dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

/* reset colors  */
function reset() {
  spans.forEach(Element => {
    Element.style.backgroundColor = "gray" ; 
  })
}
/* main */
input.addEventListener("keyup" , function() {
  let timer = calculate(this.value) ; 
  console.log(timer) ; 
  setcolors(timer) ; 
  spans[3].firstChild.textContent= secondsToDhms(timer)
  if(this.value.length == 0) {
    reset() ; 
  }
})