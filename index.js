document.querySelector('.contacts__button').addEventListener('click', () => {
  let ball = document.querySelector('.contacts__ball--red');
  ball.classList.toggle('active');
  let otherBalls = document.querySelectorAll('.contacts__ball--white');
  otherBalls.forEach((ball) => {
    ball.classList.toggle('hidden');
  });
});

gsap.fromTo(
  '.img__left--left',
  { y: 250 },
  { y: 150, opacity: 1, ease: 'power1.inOut' }
);
gsap.fromTo(
  '.img__middle--middle',
  { y: 100 },
  {
    y: 0,
    opacity: 1,
    ease: 'power1.inOut',
  }
);
gsap.fromTo(
  '.img__right--right',
  { y: 400 },
  {
    y: 300,
    opacity: 1,
    ease: 'power1.inOut',
  }
);

gsap.to('.img__left', {
  keyframes: [{ y: 0 }, { y: -155, delay: 1 }, { y: -50, delay: 1 }],
});
gsap.to('.img__middle', {
  keyframes: [{ y: 0 }, { y: 0, delay: 1 }, { y: 100, delay: 1 }],
});
gsap.to('.img__right', {
  keyframes: [{ y: 0 }, { y: -300, delay: 1 }, { y: -200, delay: 1 }],
});
gsap.fromTo(
  '.header',
  { y: -200 },
  { y: 0, delay: 2.5, ease: 'power1.out', duration: 1 }
);
gsap.to('.preloader', { backgroundColor: 'rgba(0, 0, 0, 0.0)', delay: 3 });

gsap.fromTo(
  '.company-info__block',
  { y: 500 },
  { y: 0, ease: 'power1.inOut', duration: 1, delay: 2.5 }
);
gsap.fromTo(
  '.section-features',
  { y: 500 },
  { y: 0, ease: 'power1.inOut', duration: 1, delay: 2.5 }
);
