const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

document.querySelector('.next').addEventListener('click', () => {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  items[currentIndex].classList.add('active');
});
