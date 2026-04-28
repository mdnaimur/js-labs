console.log("Script loaded");
btn = document.querySelector(".btn");
btn.addEventListener("click", () => console.log("Button Clicked"));

btn.addEventListener("click", () => console.log("second"));

const onceBtn = document.getElementById("once-btn");
console.log(onceBtn);
const removeBtn = document.getElementById("remove-btn");
const anonBtn = document.getElementById("anon-btn");
const box = document.getElementById("box");

function handleOnceClick() {
  console.log("Clicked ONCE button");
}

onceBtn.addEventListener("click", handleOnceClick, {
  once: true,
});

// ----------------------------
// 2. removeEventListener (correct way)
// ----------------------------
function handleClick() {
  console.log("Removable listener fired");
}

removeBtn.addEventListener("click", handleClick);

// Remove after 3 seconds
setTimeout(() => {
  removeBtn.removeEventListener("click", handleClick);
  console.log('Listener removed from "Add & Remove" button');
}, 3000);

// ----------------------------
// 3. Anonymous function issue
// ----------------------------
anonBtn.addEventListener("click", () => {
  console.log("Anonymous listener fired");
});

// document.body.addEventListener('click', () => {
//   console.log('BODY (bubble)');
// });

// document.body.addEventListener('click', () => {
//   console.log('BODY (capture)');
// }, { capture: true });

// box.addEventListener('click', () => {
//   console.log('BOX clicked');
// });

// window.addEventListener('scroll', () => {
//     console.log('Scrolling...');
// }, { passive: true });

btn.addEventListener("click", function (event) {
  // Who fired it
  event.target; // the element that was actually clicked
  console.log("Its Event target", event.target);
  event.currentTarget; // the element the listener is attached to
  console.log("Its Event currentTarget", event.currentTarget);
  // (different during bubbling — Phase 6)
  event.type;
  console.log("Its Event type", event.type); // "click"

  // Where it happened
  event.clientX; // X position relative to viewport
  event.clientY; // Y position relative to viewport
  event.pageX; // X position relative to full document
  event.pageY; // Y position relative to full document

  // What modifier keys were held
  event.shiftKey; // true/false
  event.ctrlKey;
  event.altKey;
  event.metaKey; // Cmd on Mac

  // Control flow
  event.preventDefault(); // stop the browser's default action
  event.stopPropagation(); // stop the event from bubbling (Phase 6)
});

// Button Event Demo

const btnSubmit = document.querySelector("#submit");
// console.log("I am working ", btnSubmit.dataset);
const menu = document.getElementById("menu");

// Fake async function (simulate API call)

function saveData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve() : reject();
    }, 1500);
  });
}

function showCustomMenu(x, y) {
  menu.style.left = x + "px";
  menu.style.top = y + "px";
  menu.style.display = "block";
}

// Hide menu on click elsewhere
// document.addEventListener("click", () => {
//   menu.style.display = "none";
// });

btnSubmit.addEventListener("click", (e) => {
  console.log("clicked at", e.clientX, e.clientY);
  showCustomMenu(e.clientX, e.clientY);
});

// btnSubmit.addEventListener("dblclick", () => {
//   console.log("double clicked");
// });

btnSubmit.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  showCustomMenu(e.clientX, e.clientY);
});

btnSubmit.addEventListener("click", async (e) => {
  const button = e.currentTarget;
  if (button.dataset.loading === "true") return;

  button.dataset.loading = "true";
  button.textContent = "Saving…";
  button.disabled = true;
  // Reset classes
  button.classList.remove("is-success", "is-error");
  try {
    await saveData();
    button.textContent = "Saved!";
    button.classList.add("is-success");
  } catch (error) {
    button.textContent = "Error!";
    button.classList.add("is-error");
  } finally {
    button.dataset.loading = "false";
    button.disabled = false;
  }
});

// Keyboard Events Demo

const modal = document.getElementById("modal");
const searchInput = document.querySelector("#search");
const results = document.querySelectorAll(".results li");

function closeModal() {
  modal.classList.remove("active");
  console.log("Modal closed");
}

function openSearch() {
  modal.classList.add("active");
  console.log("Search opened");
}

function saveDocument() {
  console.log("Document saved (fake)");
}

function submitSearch() {
  console.log("Search submitted:", searchInput.value);
}
function focusFirstResult() {
  if (results.length > 0) {
    results[0].focus?.(); // safe optional focus
    console.log("Focused first result");
  }
}

document.addEventListener("keydown", (e) => {
  console.log("Key down:", e.key);
  console.log("Code:", e.code);

  if (e.key === "Escape") {
    console.log("Escape key pressed");

    closeModal();
  }

  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    console.log("Cmd/Ctrl + K pressed");
    openSearch();
  }

  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
    e.preventDefault();
    saveDocument();
    console.log("Cmd/Ctrl + S pressed - Save action triggered");
  }
});
// --- Input-specific handling ---

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitSearch();
  }
  if (e.key === "ArrowDown") {
    focusFirstResult();
  }

  if (e.key === "Escape") {
    searchInput.blur();
    console.log("Input blurred");
  }
});

// Form validation demo

const input = document.querySelector("#bio");
const form = document.querySelector("#myForm");
const charCount = document.getElementById("charCount");

function validateField(email) {
  const errorEl = document.getElementById("emailError");
  if (email.name === "email") {
    if (!email || !email.value.includes("@")) {
      errorEl.textContent = "Invalid email";
      return false;
    } else {
      errorEl.textContent = "";
      return true;
    }
  }
}

async function submitToAPI(data) {
  console.log("Submitting to API:", data);
  // fake delay
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const formObj = Object.fromEntries(data);
    console.log("Form data as object:", formObj);
    const isValid = validateField(formObj.email);

    // if (!isValid) {
    //   console.log("Form validation failed, not submitting");
    //   return;
    // }

    await submitToAPI(formObj.email);
    alert("Form submitted!");
  });
}

if (input && charCount) {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    console.log("Current value:", value);
    charCount.textContent = `${value.length}/100`;
  });

  input.addEventListener("blur", (e) => {
    validateField(e.target);
  });

  input.addEventListener("focus", (e) => {
    e.target.closest(".field")?.classList.add("is-focused");
    console.log("closest .field", e.target.closest(".field"));
    console.log(
      "closest .field?.classList",
      e.target.closest(".field")?.classList,
    );
    console.log("e.target", e.target);
  });

  input.addEventListener("blur", (e) => {
    e.target.closest(".field")?.classList.remove("is-focused");
  });
}

// Select demo
const dropdown = document.querySelector("select");
dropdown.addEventListener("change", (e) => {
  console.log("Selected:", e.target.value);
});

const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener("change", (e) => {
  console.log("Checkbox is now:", e.target.checked);
});
