
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river  = document.getElementById("river");
let boat = document.getElementById("boat");
let mountains7 = document.getElementById("mountains7");

window.onscroll = function(){
    let value = scrollY ;
    console.log(value) ;
    stars.style.left = value + 'px' ;
    moon.style.top = value + 'px' ;
    boat.style.top = value*0.5  + 'px' ;
    boat.style.left = value*1  + 'px' ;
    mountains3.style.top = value*0.5 + 'px' ;
    mountains4.style.top = value*0.5 + 'px' ;
    river.style.top = value*0.5 + 'px' ;
    mountains7.style.top = value*0.5 + 'px' ;

} 
