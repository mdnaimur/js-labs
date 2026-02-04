/**
 * Project requirement
 * chang the backgroup color by generationg random rgb color by clickng button
 * also display the hex code to a disbaled input field
 */

//steps

// steps 1 - create online handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById('root');
  const btn = document.getElementById('change-btn')
  const output = document.getElementById('output')

  btn.addEventListener('click', function (){
    const bgColor = generateHexColor();
   
    root.style.backgroundColor = bgColor;
     output.value = bgColor;
    console.log(bgColor)
    
  })
}

//steps 2 - random color generator funciton

function generateHexColor() {
  // #000000 #ffffff
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

//steps 3 - collect all neccessary refrances

// steps 4 - handle the click events

// document.getElementById("change-btn").addEventListener("click",()=>{

// })
