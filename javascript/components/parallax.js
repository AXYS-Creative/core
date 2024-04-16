const initParallax = () => {
  const parallaxElements = document.querySelectorAll(".parallax-element");

  parallaxElements.forEach((element) => {
    const coefficient = 0.2;
    const elementOffsetTop = element.offsetTop;

    const applyParallax = () => {
      const scrollTop = window.scrollY;
      const parallaxOffset = (elementOffsetTop - scrollTop) * coefficient;
      element.style.translate = `-50% ${-parallaxOffset}px`;
    };

    applyParallax();

    window.addEventListener("scroll", applyParallax);
  });
};

initParallax();
