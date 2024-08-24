// var crsr = document.querySelector("#cursor");
// var Blur = document.querySelector("#cursor-blur");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   Blur.style.left = dets.x - 250 + "px";
//   Blur.style.top = dets.y - 250 + "px";
// });
const svgElement = document.querySelector('#man-svg');
if (svgElement) {
    svgElement.remove();
    console.log("svg deleted");
}

$("#email-form").submit(function (e) {
  e.preventDefault();
  const formData = $(this).serialize();

  $.ajax({
    method: "POST",
    url: "../connection/newsletter.php",
    data: formData,
    success: function (res) {
      let response = JSON.parse(res);
      const responseElement = $("#subscription-response");
      responseElement.stop(true, true).css("display", "block");
      if (response.error) {
        responseElement
          .text(response.error)
          .css({ fontWeight: "bold", color: "red" })
          .delay(5000)
          .fadeOut(1000);
      } else {
        responseElement
          .text(response.message)
          .css({ fontWeight: "bold", color: "black" })
          .delay(5000)
          .fadeOut(1000);
          $("#email-form")[0].reset();
      }
    },
  });
});
