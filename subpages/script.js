// var crsr = document.querySelector("#cursor");
// var Blur = document.querySelector("#cursor-blur");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   Blur.style.left = dets.x - 250 + "px";
//   Blur.style.top = dets.y - 250 + "px";
// });

// gsap.to(".animation-abs-btn" ,{
// })

// DOM elements
const menuBtn = document.querySelector("#menu");
const mobNav = document.querySelector("#mobile-nlinks");
const mobClose = document.querySelector("#nav #mobile-nlinks #close");

const dropdownPairs = [
  {
    button: document.querySelector(".graphic-design"),
    container: document.querySelector(".graphic-design-dropdown"),
  },
  {
    button: document.querySelector(".web-dev"),
    container: document.querySelector(".web-dev-dropdown"),
  },
  {
    button: document.querySelector(".social-media-advertising"),
    container: document.querySelector(".SMA-dropdown"),
  },
  {
    button: document.querySelector(".content-marketing"),
    container: document.querySelector(".CM-dropdown"),
  },
  {
    button: document.querySelector(".seo"),
    container: document.querySelector(".SEO-dropdown"),
  },
  
];

const toggleDisplay = (element, display) => {
  element.style.display = display;
};

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleDisplay(mobNav, "inline");
});

mobClose.addEventListener("click", (e) => {
  e.preventDefault();
  toggleDisplay(mobNav, "none");
});

const setupHoverListeners = (button, container) => {
  const showContainer = () => toggleDisplay(container, "flex");
  const hideContainer = () => {
    if (!container.matches(":hover")) {
      toggleDisplay(container, "none");
    }
  };

  button.addEventListener("mouseenter", showContainer);
  button.addEventListener("mouseleave", hideContainer);
  container.addEventListener("mouseleave", hideContainer);
};

dropdownPairs.forEach((pair) => {
  setupHoverListeners(pair.button, pair.container);
});
