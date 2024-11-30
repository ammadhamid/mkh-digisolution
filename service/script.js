// var crsr = document.querySelector("#cursor");
// var Blur = document.querySelector("#cursor-blur");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   Blur.style.left = dets.x - 250 + "px";
//   Blur.style.top = dets.y - 250 + "px";
// });

// const digiMarketing = document.querySelector(".digital-marketing");
// digiMarketing.addEventListener("click", () => {
//   window.location.href = "../subpages/smm/main/smm.html";
// });
gsap.to("#nav", {
  backgroundColor: "#fff",
  duration: 0.5,
  height: "110px",
  display : "fixed",
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

gsap.from(".Service-page-2" , {
  y: "50%",
  opacity : 0.9,
  scale : 0.9,
  duration : 1,
  ease : "power3.out",
  scrollTrigger: {
    trigger: ".Service-page-2",
    scroller: "body",
    start: "top 95%",
    end: "top 30%",
    scrub: 1,
    // markers: true,
  },
})
gsap.from(".animation-of-service-page", {
  y: "0%",
  opacity: 0, 
  scale: 0.85, 
  duration: 1.5, 
  ease: "power2.out", 
  scrollTrigger: {
    trigger: ".animation-of-service-page",
    scroller: "body",
    start: "top 80%",
    end: "top 20%",
    scrub: 0.5,
  },
});
gsap.from("#main-page-of-services", {
  y: "0%",
  opacity: 0, 
  scale: 0.85, 
  duration: 1.5, 
  ease: "power2.out", 
  scrollTrigger: {
    trigger: "#main-page-of-services",
    scroller: "body",
    start: "top 80%",
    end: "top 20%",
    scrub: 0.5,
  },
});
gsap.from(".animation-of-service-page-2", {
  y: "0%",
  opacity: 0, 
  scale: 0.85, 
  duration: 1.5, 
  ease: "power2.out", 
  scrollTrigger: {
    trigger: ".animation-of-service-page-2",
    scroller: "body",
    start: "top 80%",
    end: "top 20%",
    scrub: 0.5,
  },
});
gsap.from("#page7", {
  y: "0%",
  opacity: 0, // Fade in from 0 (invisible)
  scale: 0.85, // Slightly more scale-in effect to add depth
  duration: 1.5, // Increased duration for smoother effect
  ease: "power2.out", // Keep the ease for a natural smoothness
  scrollTrigger: {
    trigger: "#page7",
    scroller: "body",
    start: "top 80%",
    end: "top 20%",
    scrub: 0.5,
  },
});

function callContainers(el, url) {
  el.addEventListener("click", () => {
    window.location.href = url;
  });
}

const urlContainer = [
  {
    container: document.querySelector(".gd"),
    url: "../subpages/creative-graphic-design/main/creative-design.html",
  },
  {
    container: document.querySelector(".wd"),
    url: "../subpages/web-dev/main/web-dev.html",
  },
  {
    container: document.querySelector(".socailmm"),
    url: "../subpages/smm/main/smm.html",
  },
  {
    container: document.querySelector(".cm"),
    url: "../subpages/content-marketing/main/copy-writing.html",
  },
  {
    container: document.querySelector(".search-eo"),
    url: "../subpages/seo-page/main/seo.html",
  },
  {
    container: document.querySelector(".influencer-m"),
    url: "../subpages/influencer-marketing/main/influencer-marketing.html",
  },
];

urlContainer.forEach((pair) => {
  callContainers(pair.container, pair.url);
});

