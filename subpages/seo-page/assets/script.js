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

$(document).ready(function () {

  $('#newsletter_form').submit(function (e) { 
    e.preventDefault();
    
    let formData = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "../../../backend/newsletter/index.php",
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
});

const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

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
    element : document.querySelector('#custom-web-dev'),
    page : "../../index/index.html"
  },
  {
    element : document.querySelector('#wordpress-web'),
    page : '../../index/index.html'
  },
  {
    element : document.querySelector('#shopify-web'),
    page : '../../index/index.html'
  },
  {
    element : document.querySelector('#ui-ux-design'),
    page : '../../index/index.html',
  }
];

ChangePageArr.forEach(({ element, page }) => {
  if (element) {
    element.addEventListener("click", () => {
      redirectpage(page);
    });
  }
});

