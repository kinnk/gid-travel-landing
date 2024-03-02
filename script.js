const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const html = document.querySelector('html');

menuBtn.addEventListener('click', function(event){
  menu.style.display = 'block';
  overlay.style.display = 'block';
  html.style.overflow = 'hidden';
  menuBtn.style.display = 'none';
})

document.addEventListener('click', function(event){
  if(event.target.classList.value !== 'overlay') return 
  else{
    menu.style.display = 'none';
    overlay.style.display = 'none';
    html.style.overflow = 'visible';
    menuBtn.style.display = 'block';
  }
})
