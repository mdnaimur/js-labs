/**
 * Project requirement
 * chang the backgroup color by generationg random rgb color by clickng button
 *
 */

//steps

// steps 1 - create online handler
window.onload = () => {
  main();
};


function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  btn.addEventListener("click", function () {
    const bgColor = generateRGBColor();
    root.style.backgroundColor = bgColor;
  });
}

//steps 2 - random color generator funciton
function generateRGBColor() {
  //rgb(0,0,0), rgb(255,255,255)
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
}

//steps 3 - collect all neccessary refrances

// steps 4 - handle the click events

// document.getElementById("change-btn").addEventListener("click",()=>{

// })
