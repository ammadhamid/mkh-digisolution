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
  if(window.innerWidth >= 786){
    gsap.from("#About-Us-Page-1 #main-About-us .left", {
        y: "50%",
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#About-Us-Page-1 #main-About-us .left",
          scroller: "body",
          start: "top 95%",
          end: "top 30%",
          scrub: 1,
          // markers: true,
        },
      });

      gsap.from("#About-Us-Page-1 #main-About-us #right", {
        y: "50%",
        opacity: 0,
        scale: 0.9,
        duration: 1.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#About-Us-Page-1 #main-About-us #right",
          scroller: "body",
          start: "top 95%",
          end: "top 30%",
          scrub: 1,
          // markers: true,
        },
      });
      gsap.from("#About-Us-Page-2", {
        y: "0%",
        opacity: 0, // Fade in from 0 (invisible)
        scale: 0.85, // Slightly more scale-in effect to add depth
        duration: 1.75, // Increased duration for smoother effect
        ease: "power2.out", // Keep the ease for a natural smoothness
        scrollTrigger: {
          trigger: "#About-Us-Page-2",
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
      gsap.from(".footer", {
        y: "0%",
        opacity: 0, // Fade in from 0 (invisible)
        scale: 0.85, // Slightly more scale-in effect to add depth
        duration: 1.75, // Increased duration for smoother effect
        ease: "power2.out", // Keep the ease for a natural smoothness
        scrollTrigger: {
          trigger: ".footer",
          scroller: "body",
          start: "top 80%",
          end: "top 20%",
          scrub: 0.5,
        },
      });
  }