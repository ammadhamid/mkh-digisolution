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

const redirectpage = (page) => {
  window.location.href = page;
};

// const fullStackPage = document.querySelector('#full-stack-web-dev');
// const ecommercePage = document.querySelector('#E-commerce-page')

// fullStackPage.addEventListener('click' , ()=>{
//   redirectpage('../../index/index.html')
// })

// ecommercePage.addEventListener('click' , () =>{
//   redirectpage('../../index/index.html')
// });

gsap.to("#nav", {
  backgroundColor: "#fff",
  duration: 0.5,
  height: "110px",
  opacity: 0.9,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
if (window.innerWidth >= 786) {
  // hero left
  gsap.from(".hero #left", {
    y: "50%",
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero #left",
      scroller: "body",
      start: "top 95%",
      end: "top 30%",
      scrub: 1,
      // markers: true,
    },
  });
  gsap.from(".hero .right", {
    y: "50%",
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero .right",
      scroller: "body",
      start: "top 95%",
      end: "top 30%",
      scrub: 1,
      // markers: true,
    },
  });
  gsap.from("#main .how-we-work ", {
    x: "-100%",
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "top 95%",
      end: "top 10%",
      scrub: 2,
    },
  });
  gsap.from("#page3", {
    y: "0%",
    opacity: 0, // Fade in from 0 (invisible)
    scale: 0.85, // Slightly more scale-in effect to add depth
    duration: 1.5, // Increased duration for smoother effect
    ease: "power2.out", // Keep the ease for a natural smoothness
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 80%",
      end: "top 20%",
      scrub: 0.5,
    },
  });

  gsap.from(".indi-skills-1", {
    x: "-100%",
    opacity: 0,
    scale: 0.9,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".indi-skills-1",
      scroller: "body",
      start: "top 100%",
      end: "top 40%",
      scrub: 1,
    },
  });
  gsap.from(".indi-skills-2", {
    x: "200%",
    opacity: 0,
    scale: 0.9,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".indi-skills-1",
      scroller: "body",
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
    },
  });

  gsap.from(".best-services", {
    x: "200%",
    opacity: 0,
    scale: 0.9,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".best-services",
      scroller: "body",
      start: "top 100%",
      end: "top 40%",
      scrub: 1,
    },
  });


    gsap.from("#page4 .container" , {
      y : "50%",
      opacity : 0,
      scale : 0.9,
      duration : 2 ,
      ease : "power3.out",
      scrollTrigger : {
        trigger: "#page4",
        scroller: "body",
        start: "top 100%",     
        end: "top 40%",    
        scrub: 1,
      }
    });

  }


const ChangePageArr = [
  {
    element: document.querySelector("#full-stack-web-dev"),
    page: "../../index/index.html",
  },
  {
    element: document.querySelector("#E-commerce-page"),
    page: "../../index/index.html",
  },
  {
    element: document.querySelector("#custom-web-dev"),
    page: "../../index/index.html",
  },
  {
    element: document.querySelector("#wordpress-web"),
    page: "../../index/index.html",
  },
  {
    element: document.querySelector("#shopify-web"),
    page: "../../index/index.html",
  },
  {
    element: document.querySelector("#ui-ux-design"),
    page: "../../index/index.html",
  },
];

ChangePageArr.forEach(({ element, page }) => {
  if (element) {
    element.addEventListener("click", () => {
      redirectpage(page);
    });
  }
});

function animateCounter(el, target, duration) {
  let startTime = null;
  const startValue = 0;
  const suffix = el.getAttribute("data-suffix") || "";

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const value = Math.floor(progress * (target - startValue) + startValue);

    el.textContent = value + suffix;

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  // IntersectionObserver to trigger the animation when the element enters the viewport
  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px 0px 100% 0px", // Trigger when the element enters 50% of the viewport height
    threshold: 0, // Trigger as soon as any part of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute("data-target"), 10);
        animateCounter(counter, target, 3000);
        observer.unobserve(counter); // Stop observing once the animation starts
      }
    });
  }, observerOptions);

  counters.forEach((counter) => {
    observer.observe(counter); // Observe each counter element
  });
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftButton = document.querySelector(".nav-button.left");
const rightButton = document.querySelector(".nav-button.right");
let currentIndex = 0;

function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function getVisibleSlides() {
  return window.innerWidth >= 768 ? 3 : 1;
}

leftButton.addEventListener("click", () => {
  const visibleSlides = getVisibleSlides();
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - visibleSlides;
  }
  updateSlider();
});

rightButton.addEventListener("click", () => {
  const visibleSlides = getVisibleSlides();
  if (currentIndex < slides.length - visibleSlides) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});

window.addEventListener("resize", updateSlider);
updateSlider();

const inActive = document.querySelector(".inactive");
inActive.addEventListener("click" , (e) =>{
  e.preventDefault();
});

inActive.style.cursor = "context-menu";
