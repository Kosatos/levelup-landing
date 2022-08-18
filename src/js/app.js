// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

window.onload = () => {
  //slider

  const reviewsSwiper = new Swiper('.slider-reviews', {
    pagination: {
      el: '.slider-reviews__nav',
      clickable: true,
    },

    loop: true,

    speed: 800,

    grabCursor: true,

    slidesPerView: 1,
    spaceBetween: 50,
  });

  //form

  const orderForm = document.getElementById('order-form');
  const nameInput = document.getElementById('order-name');
  const telInput = document.getElementById('order-tel');

  orderForm.reset();

  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    orderForm.reset();
  });

  nameInput.addEventListener('focus', () => {
    document.querySelector('.name-help').style.opacity = '1';
  });
  nameInput.addEventListener('blur', () => {
    document.querySelector('.name-help').style.opacity = '0';
  });

  telInput.addEventListener('focus', () => {
    document.querySelector('.tel-help').style.opacity = '1';
  });
  telInput.addEventListener('blur', () => {
    document.querySelector('.tel-help').style.opacity = '0';
  });
  telInput.addEventListener('input', function () {
    this.value = this.value.replace(/\D/, '');
  });

  //timer

  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24,
      deadline = new Date().getTime() + 30 * 60000;

    const countDown = new Date(deadline).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        (document.getElementById('hours').innerText = Math.floor(
          (distance % day) / hour
        )),
          (document.getElementById('minutes').innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById('seconds').innerText = Math.floor(
            (distance % minute) / second
          ));

        if (distance < 0) {
          clearInterval(x);
        }
      }, 0);
  })();

  //scroll

  const orderBtns = [...document.querySelectorAll('.btn-link')];

  orderBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      orderForm.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};
