const input = document.querySelector("#bio");
const form = document.querySelector("#myForm");
const charCount = document.getElementById("charCount");

// ---- Helper functions ----
function validateField(el) {
  if (el.name === "email") {
    const errorEl = document.getElementById("emailError");
    if (!el.value.includes("@")) {
      errorEl.textContent = "Invalid email";
    } else {
      errorEl.textContent = "";
    }
  }
}

async function submitToAPI(data) {
  console.log("Submitting to API:", data);
  // fake delay
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

// ---- Input events ----
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
});

input.addEventListener("blur", (e) => {
  e.target.closest(".field")?.classList.remove("is-focused");
});

// ---- Form submit ----
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  console.log("Email:", data.get("email"));
  console.log("Password:", data.get("password"));

  await submitToAPI(Object.fromEntries(data));
  alert("Form submitted!");
});

// ---- Select ----
const dropdown = document.querySelector("select");
dropdown.addEventListener("change", (e) => {
  console.log("Selected:", e.target.value);
});

// ---- Checkbox ----
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener("change", (e) => {
  console.log("Checked:", e.target.checked);
});
