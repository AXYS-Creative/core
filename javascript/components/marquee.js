if (gsap) {
  const customContent = [
    `
      <p class="h2"><strong>Unlock the full potential</strong>&nbsp;<span class="thin-text"> of your workforce.</span>&nbsp;</p>
    `,
  ];

  let currentScroll = 0;

  function updateMarquee(contentArray) {
    const duplicatedContent = contentArray.concat(contentArray);

    let marqueeContent = "";

    duplicatedContent.forEach((content) => {
      marqueeContent += content;
    });

    const marqueeInner = document.querySelector(".marquee-inner");
    marqueeInner.innerHTML = marqueeContent;
  }

  updateMarquee(customContent);

  function initializeMarquee(selector, duration) {
    return gsap.utils.toArray(selector).map((elem) =>
      gsap
        .to(elem, {
          xPercent: -50,
          repeat: -1,
          duration: duration,
          ease: "linear",
        })
        .totalProgress(0.5)
    );
  }

  window.addEventListener("scroll", () => {
    const isScrollingDown = window.scrollY > currentScroll;

    function adjustTimeScale(tweens) {
      tweens.forEach((tween, index) =>
        gsap.to(tween, {
          timeScale: (index % 2 === 0) === isScrollingDown ? 1 : -1,
        })
      );
    }

    adjustTimeScale(marqueeTweens);

    currentScroll = window.scrollY;
  });

  const marqueeTweens = initializeMarquee(
    ".marquee-inner",
    window.innerWidth > 768 ? 12 : 8
  );
}
