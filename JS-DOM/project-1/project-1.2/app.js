/**
 * project requirement
 * change backgroup color by generation random color rgb color by clicking button
 * show the color value in text field
 * copying the color from text field
 *
 */

// steps

//steps 1: create online handeler
window.onload = () => {
  main();
};

// step 1.1: collect all necessary reference
// step 1.2: handle click events
// step 3: handle the copy event
function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const changeBtn = document.getElementById("change-btn");
  const cpyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", function () {
    const bgColor = generateHexColor();

    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
  cpyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
  });
}

// step 1.3: copy click events HI #000000 #7857b #206a1b #509ff6 #afc8bb #a658ad

// step 2: random color generator
function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
}

function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`;
}
