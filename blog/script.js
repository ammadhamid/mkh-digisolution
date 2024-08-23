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
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParsr = require('body-parser');
const  dotEnv = require('dotenv');

const app = express();

const svgElement = document.querySelector('#man-svg');
if (svgElement) {
    svgElement.remove();
    console.log("svg deleted");
}
