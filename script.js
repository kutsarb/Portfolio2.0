const check1 = 700;
const check2 = 710;
const check3 = 2800;



window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= check1) {
      opacity = 1 - currentScroll / check1;
    } else {
      opacity = .01;
    }
    document.querySelector(".page1").style.opacity = opacity;
  });
