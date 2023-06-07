document.addEventListener("DOMContentLoaded", function () {
  /* =================================================
    iOSでの高さ調整
  =================================================== */
  function getViewportHeight() {
    return Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
  }

  function setElementHeightToViewport(element) {
    var viewportHeight = getViewportHeight();
    element.style.height = viewportHeight + "px";
  }

  var element = document.querySelector(".l-mv");
  if (element) {
    setElementHeightToViewport(element);
  }

  /* =================================================
    background-image
  =================================================== */
  var mv = document.querySelector(".l-mv");
  var images = [
    "./src/images/top_01.jpg",
    "./src/images/top_02.jpg",
    "./src/images/top_03.jpg",
    "./src/images/top_04.jpg",
  ];
  var currentIndex = 0;
  var interval = 4000;

  const showImage = (index) => {
    mv.style.backgroundImage = `url(${images[index]})`;
  };

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, interval);

  showImage(currentIndex);

  var target = ".c-mask-animation, .c-mask-animation--fixed";
  var tl = gsap.timeline();
  tl.delay(1);

  tl.fromTo(
    ".c-loading__line",
    {
      scaleX: 0,
      scaleY: 0.03,
    },
    {
      scaleX: 1,
      duration: 2,
    }
  )
    .fromTo(
      ".c-loading__line",
      {
        scaleY: 0,
      },
      { scaleY: 1, duration: 0.8 }
    )
    .to(".c-loading__bg", {
      opacity: 0,
    })
    .to(".l-header", {
      opacity: 1,
    })
    .to(target, {
      autoAlpha: 1,
    })
    .to(
      target,
      {
        "--translateX": "101%",
        duration: 0.5,
      },
      "<.1"
    );
});
