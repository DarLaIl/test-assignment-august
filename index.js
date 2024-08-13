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
  keyframes: [{ y: 0 }, { y: -200, delay: 1 }, { y: -100, delay: 1 }],
});

gsap.to('.img__right', {
  keyframes: [{ y: 0 }, { y: -400, delay: 1 }, { y: -300, delay: 1 }],
});
gsap.to('.img__middle', {
  keyframes: [{ y: 0 }, { y: 100, delay: 2.5 }],
});
gsap.to('.preloader', { opacity: 0, display: 'none', delay: 3.5 });
//.to('.preloader', { visibility: 'hidden', opacity: 0, delay: 3.5 });
//  .set('.preloader', { css: { zIndex: -1 } });
