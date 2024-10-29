
const callNav = () => {
  fetch("../nav/nav.html")
    .then((res) => {
      let textRes = res.text();
      console.log(textRes);
    })
    .then((data) => {
      document.querySelector(".nav-wrapper").innerHTML = data;
      console.log("Aaaaa");
    })
    .catch((err) => {
      console.log(err);
      console.log("Aaaaa");
    });
};

// callNav();
// const navCss = fetch('../nav/nav.css');
const navHtml = fetch("../nav/nav.html");

navHtml.then((res) => {
  let data = res.text();

  data.then((htmlString) => {
    // Parse the fetched HTML string into a DOM element
    let parser = new DOMParser();
    let doc = parser.parseFromString(htmlString, 'text/html');

    // Extract the specific element you want (in this case, div#nav)
    let navData = doc.querySelector('.nav-wrapper');


    // Now insert the innerHTML of the navData into your target element
    let navWrapper = document.querySelector('.nav-wrapper');
    navWrapper.innerHTML = navData ? navData.innerHTML : "Nav not found";
  });
});
// navCss.then((res)=>{
//   res.text().then((res)=>{
//     console.log(res)
//   })  
// })


