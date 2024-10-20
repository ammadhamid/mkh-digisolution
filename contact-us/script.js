// var crsr = document.querySelector("#cursor");
// var Blur = document.querySelector("#cursor-blur");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   Blur.style.left = dets.x - 250 + "px";
//   Blur.style.top = dets.y - 250 + "px";
// });

if(window.innerWidth >= 786){
    gsap.from(".contact-us-small" , {
        x: "-50%",
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-us-small",
          scroller: "body",
          start: "top 95%",
          end: "top 30%",
          scrub: 1,
          // markers: true,
        },
    });

    gsap.from(".form" , {
        x: "150%",
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".form",
          scroller: "body",
          start: "top 95%",
          end: "top 30%",
          scrub: 1,
          // markers: true,
        },
    })
    gsap.from("#page7 .page7-main" , {
        y: "50%",
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#page7",
          scroller: "body",
          start: "top 95%",
          end: "top 30%",
          scrub: 1,
        },
    })
    gsap.from(".footer .main" , {
        y: "50%",
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer",
          scroller: "body",
          start: "top 95%",
          end: "top 30%",
          scrub: 1,
        },
    })
}
