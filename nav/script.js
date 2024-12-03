// var crsr = document.querySelector("#cursor");
// var Blur = document.querySelector("#cursor-blur");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   Blur.style.left = dets.x - 250 + "px";
//   Blur.style.top = dets.y - 250 + "px";
// });


const dekstopdropdownPairs = [
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

dekstopdropdownPairs.forEach((pair) => {
  setupHoverListeners(pair.button, pair.container);
});

// mobile  Ki Scipt hai

const menuIcon = document.getElementById("menu");
const mobileNav = document.getElementById("mobile-nlinks");
const closeButton = document.getElementById("close");

menuIcon.addEventListener("click", (e) => {
  e.preventDefault();
  mobileNav.classList.toggle("active");
});

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  mobileNav.classList.remove("active");
});

const mobdropBtn = document.querySelector(".mob-dropbtn");

mobdropBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

mobdropBtn.addEventListener("dblclick", () => {
  window.location.href = "../../service/service.html";
});

const mobDropdownPairs = [
  {
    button: document.querySelector(".mob-graphic-btn"),
    container: document.querySelector(".mob-graphic-design-dropdown"),
  },
  {
    button: document.querySelector(".mob-web-dev-btn"),
    container: document.querySelector(".mob-web-dev-container"),
  },
  {
    button: document.querySelector(".mob-social-media"),
    container: document.querySelector(".mob-SMA-dropdown"),
  },
  {
    button: document.querySelector(".mob-content-marketing"),
    container: document.querySelector(".mob-CM-dropdown"),
  },
  {
    button: document.querySelector(".mob-seo"),
    container: document.querySelector(".mob-SEO-dropdown"),
  },
];
const setupClicklistener = (button, container) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (container.style.display === "flex") {
      container.style.display = "none";
    } else {
      container.style.display = "flex";
    }
  });
};

mobDropdownPairs.forEach((pair) => {
  setupClicklistener(pair.button, pair.container);
});

const getAQuoteBtn = document.querySelector(".btns .Quote");
const getAQuoteContainer = document.querySelector(".get-a-quote-container");
const getAQuoteCloseBtn = document.querySelector(".modal #close");
getAQuoteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleDisplay(getAQuoteContainer, "inline");
});
getAQuoteCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleDisplay(getAQuoteContainer, "none");
});

