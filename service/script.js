// var crsr = document.querySelector("#cursor");
// var Blur = document.querySelector("#cursor-blur");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   Blur.style.left = dets.x - 250 + "px";
//   Blur.style.top = dets.y - 250 + "px";
// });


const innerContainer = document.querySelectorAll(".inner-conatiner");
for (const conatiner of innerContainer) {
    conatiner.addEventListener("click" , redirectPage = ()=>{
        window.location.href = '../subpages/web-dev.html';
    });
}

