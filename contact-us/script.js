$(document).ready(function () {

  $('#phone-contact-us').on('input', function () {
    let numberPattern = /[^0-9]/g
    let phone = $(this).val();
    if (numberPattern.test(phone)) {
      $(this).val(phone.replace(numberPattern, ''));
      $(this).addClass('invalid');
      $('#phone-contact-us-err').text('Please enter number')
    } else {
      $('#phone-contact-us-err').text('')
      $(this).removeClass('invalid');
    }
  })

  $('#form-contact-us').submit(function (e) {
    e.preventDefault();

    let formData = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '../backend/contact/index.php',
      data: formData,
      success: function (response) {
        Toastify({
          text: response,
          duration: 3000,
          position: "center",
          style: {
            borderRadius: '20px',
            background: "linear-gradient(to right, #212126, #9D2629)",
          }
        }).showToast();
        $('#form-contact-us')[0].reset();
      }
    });
  })

  $('#newsletter_form').submit(function (e) { 
    e.preventDefault();
    
    let formData = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "../backend/newsletter/index.php",
      data: formData,
      success: function (response) {
        let res = JSON.parse(response);
        if(res.success){
          Toastify({
            text: res.message,
            duration: 3000,
            position: "center",
            style: {
              borderRadius: '20px',
              background: "linear-gradient(to right, #212126, #9D2629)",
            }
          }).showToast();
          $('#newsletter_form')[0].reset();
        }else if(!res.success){
          Toastify({
            text: res.message,
            duration: 3000,
            position: "center",
            style: {
              borderRadius: '20px',
              background: "linear-gradient(to right, #212126, #9D2629)",
            }
          }).showToast();
        }
      }
    });
  });

})

// var crsr = document.querySelector("#cursor");
// var Blur = document.querySelector("#cursor-blur");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   Blur.style.left = dets.x - 250 + "px";
//   Blur.style.top = dets.y - 250 + "px";
// });

if (window.innerWidth >= 786) {
  gsap.from(".contact-us-small", {
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

  gsap.from(".form", {
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
  gsap.from("#page7 .page7-main", {
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
  gsap.from(".footer .main", {
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

