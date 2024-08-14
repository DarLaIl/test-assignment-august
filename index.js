document.querySelector('.contacts__button').addEventListener('click', () => {
  let ball = document.querySelector('.contacts__ball--red');
  ball.classList.toggle('active');
  let otherBalls = document.querySelectorAll('.contacts__ball--white');
  otherBalls.forEach((ball) => {
    ball.classList.toggle('hidden');
  });
});

gsap.fromTo('.img__left--left', { y: 100 }, { y: 0, ease: 'power1.inOut' });
gsap.fromTo(
  '.img__middle--middle',
  { y: 100 },
  {
    y: 0,
    ease: 'power1.inOut',
  }
);
gsap.fromTo(
  '.img__right--right',
  { y: 100 },
  {
    y: 0,
    ease: 'power1.inOut',
  }
);

gsap.to('.img__left', {
  keyframes: [{ y: 0 }, { y: -170, delay: 1 }, { y: -90, delay: 1 }],
});
gsap.to('.img__middle', {
  keyframes: [{ y: 0 }, { y: 0, delay: 1 }, { y: 80, delay: 1 }],
});
gsap.to('.img__right', {
  keyframes: [{ y: 0 }, { y: -337, delay: 1 }, { y: -257, delay: 1 }],
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
