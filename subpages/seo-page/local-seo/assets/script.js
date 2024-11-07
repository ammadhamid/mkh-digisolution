$(document).ready(function () {

    $('#newsletter_form').submit(function (e) { 
      e.preventDefault();
      
      let formData = $(this).serialize();
  
      $.ajax({
        type: "POST",
        url: "../../../../backend/newsletter/index.php",
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