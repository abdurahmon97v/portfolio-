let btn = document.querySelector('.hero__btn');
let header = document.querySelector('.wrapper-big__hearder');
var typed = new Typed('.hero__typer', {
  strings:['Student','Developer'],
  typeSpeed:50,
  backSpeed:50,
  loop:true
});


btn.addEventListener('click',function(){
  header.classList.toggle('translet')
})

let array = document.querySelectorAll('.portfolio__start')
let bx = document.querySelectorAll('.bx-power-off')
array.forEach((item) => {
  
  item.addEventListener('click', ()=>{
    item.classList.add('none');
    
  })
  bx.forEach((item2) => {
    item2.addEventListener('click', ()=>{
      
      item.classList.remove('none')
    })
    
  })
})







