$(document).ready(function () {

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
});

const blog1 = document.querySelector(".blog-1");
const blog2 = document.querySelector(".blog-2");
const blog3 = document.querySelector(".blog-3");
blog1.addEventListener("click", (e) => {
  window.location.href = "./blog-1.html";
});

document.querySelector(".blog-2").addEventListener("click", () => {
  window.location.href = "./blog-3.html";
});

document.querySelector(".blog-3").addEventListener("click", () => {
  window.location.href = "./blog-2.html";
});
