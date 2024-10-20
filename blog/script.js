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
