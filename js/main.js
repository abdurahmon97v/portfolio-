let btn = document.querySelector('.hero__btn');
let header = document.querySelector('.wrapper-big__hearder');
var typed = new Typed('.hero__typer', {
  strings:['Student','Developer'],
  typeSpeed:50,
  backSpeed:50,
  loop:true
});


btn.addEventListener('click',function(){
  header.classList.toggle('translet');
})








