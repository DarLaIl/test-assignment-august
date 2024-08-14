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
  keyframes: [{ y: 0 }, { y: -220, delay: 1 }, { y: -50, delay: 1 }],
});
gsap.to('.img__middle', {
  keyframes: [{ y: 0 }, { y: 0, delay: 1 }, { y: 170, delay: 1 }],
});
gsap.to('.img__right', {
  keyframes: [{ y: 0 }, { y: -440, delay: 1 }, { y: -270, delay: 1 }],
});
gsap.fromTo(
  '.header',
  { y: -200 },
  { y: 0, delay: 2.5, ease: 'power1.out', duration: 1 }
);
gsap.to('.preloader', { backgroundColor: 'rgba(0, 0, 0, 0.1)', delay: 3 });
