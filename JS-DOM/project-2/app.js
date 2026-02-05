/*
FEATURES
1. Random background color
2. Show HEX code in input
3. Copy color code
4. Toast message (auto hide + clickable)
5. Color preview box
6. Copy button feedback
7. HEX to RGB conversion
*/

// global
let toastDiv = null;
let historyContainer = null;

// steps

// steps 1: create online handler and collected neccessary reference
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const cpyBtn = document.getElementById("copy-btn");
  const output = document.getElementById("output");
  const preview = document.getElementById("color-preview");

  historyContainer = document.getElementById("color-history");

  btn.addEventListener("click", function () {
    const bgColor = generateHexColor();

    root.style.backgroundColor = bgColor;
    preview.style.display = "block";
    preview.style.backgroundColor = bgColor;
    // 🔁 small pop animation
    preview.style.transform = "scale(1.1)";
    setTimeout(() => {
      preview.style.transform = "scale(1)";
    }, 150);

    output.value = bgColor;
    addToHistory(bgColor);
  });

  cpyBtn.addEventListener("click", function () {
    if (!output.value) return;
    navigator.clipboard.writeText(output.value).then(() => {
      //   generateToastMessage(`${output.value} copied`);
      showToast(`${output.value} copied`);
      cpyBtn.innerText = "Copied ✔";

      setTimeout(() => {
        cpyBtn.innerText = "Copy";
      }, 1200);
    });
  });
}

function addToHistory(color) {
  const colorDiv = document.createElement("div");
  colorDiv.className = "color-item";
  colorDiv.style.backgroundColor = color;
  colorDiv.title = color;

  colorDiv.addEventListener("click", () => {
    document.getElementById("root").style.backgroundColor = color;
    document.getElementById("color-preview").style.backgroundColor = color;
    document.getElementById("output").value = color;
  });

  historyContainer.prepend(colorDiv);

  // limit history to 8 colors
  if (historyContainer.children.length > 8) {
    historyContainer.removeChild(historyContainer.lastChild);
  }
}

// steps 2: generated random number #000000

function generateHexColor() {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");

  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");

  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");

  return `#${red}${green}${blue}`;
}
function showToast(msg) {
  if (toastDiv) {
    toastDiv.remove();
    toastDiv = null;
  }

  toastDiv = document.createElement("div");
  toastDiv.className = "toast-message toast-message-slide-in";
  toastDiv.innerText = msg;
  toastDiv.addEventListener("click", removeToast);
  document.body.appendChild(toastDiv);
  setTimeout(removeToast, 2500);
}

function removeToast() {
  if (!toastDiv) return;
  toastDiv.classList.remove("toast-message-slide-in");
  toastDiv.classList.add("toast-message-slide-out");

  toastDiv.addEventListener("animationend", function () {
    toastDiv?.remove();
    toastDiv = null;
  });
}

function generateToastMessage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";

  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });
  document.body.appendChild(div);
}
