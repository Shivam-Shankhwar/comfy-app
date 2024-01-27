// Getters
const next = document.querySelector('.nextSlide');
const prev = document.querySelector('.prevSlide');
const slides = document.querySelectorAll('.slide');

let progressTimer = 1;
let curSlide = 0;
const maxSlide = slides.length;

const slideChange = curSlide => {
  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${100 * (index - curSlide)}%)`)
  );

  progressTimer = 0;
};

next.addEventListener('click', e => {
  //preventDefault just in case
  e.preventDefault();

  if (curSlide === maxSlide - 1) return;
  else curSlide++;

  slideChange(curSlide);
});

prev.addEventListener('click', e => {
  //preventDefault just in case
  e.preventDefault();

  if (curSlide === 0) return;
  else curSlide--;

  slideChange(curSlide);
});

// setInterval(() => {
//   progressTimer += 20;
//   document.documentElement.style.setProperty(
//     '--slider-progress',
//     `${progressTimer}%`
//   );
// }, 1000);

setInterval(() => {
  if (curSlide === maxSlide - 1) curSlide = 0;
  else curSlide++;

  slideChange(curSlide);
  progressTimer = 1;
}, 5 * 1000);

slideChange(0);
