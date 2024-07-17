const numSlides = document.querySelectorAll('.carousel__item').length
const carouselList = document.querySelector('.carousel__list')
const carouselBtns = document.querySelectorAll('.carousel__btn')
console.log(carouselBtns);
let offset = 0;

if (numSlides>1) {
  carouselBtns[0].addEventListener('click', ()=>shift(-1));
  carouselBtns[1].addEventListener('click', ()=>shift(1));
}


function shift(dir) {
  offset += dir;
  offset %= numSlides;
  carouselList.style.transform = `translateX(${-Math.abs(offset) * 100/numSlides}%)`;
}
