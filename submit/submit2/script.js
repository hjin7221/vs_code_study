const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('navbar__icons');

toggleBtn.addEventListener('click',() => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

const images = document.querySelectorAll('.img');
let current = 0;

function showSlide() {
  for(let i=0; i<images.length; i++) {
    images[i].classList.remove('on');
  }
  current++;
  if(current > images.length) {
    current = 1;
  }
  images[current - 1].classList.add('on');
  setTimeout(showSlide, 2000);
}

showSlide();