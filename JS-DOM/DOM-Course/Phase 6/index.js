// document.getElementById("outer").addEventListener("click", () => {
//   console.log("outer fired"); // fires 3rd
// });

// document.getElementById("middle").addEventListener("click", () => {
//   console.log("middle fired"); // fires 2nd

// });

// document.getElementById("inner").addEventListener("click", () => {
//   console.log("inner fired"); // fires 1st
// });

document.getElementById("outer").addEventListener("click", () => {
  console.log("outer fired"); // fires 3rd
});

document.getElementById("middle").addEventListener("click", (e) => {
  console.log("middle fired"); // fires 2nd
  e.stopPropagation(); // stops bubbling to outer

  // also blocks other listeners on this element
  e.stopImmediatePropagation();
});

document.getElementById("inner").addEventListener("click", () => {
  console.log("inner fired"); // fires 1st
});

document.getElementById("middle").addEventListener("click", () => {
  console.log("middle second listener"); // will NOT fire
});

// const toggle = document.getElementById("toggle");
// const menu = document.getElementById("menu");

// function closeDropdown() {
//   menu.classList.remove("show");
//   console.log("Dropdown closed");
// }

// toggle.addEventListener("click", (e) => {
//   // e.stopPropagation(); // prevent immediate close
//   menu.classList.toggle("show");
// });

// // Clicking inside dropdown should NOT close it
// menu.addEventListener("click", (e) => {
//   e.stopPropagation();
// });

// // Clicking anywhere else closes dropdown
// document.addEventListener("click", closeDropdown);

//-- ----------------------------
// ❌ Naive approach (for demo)
// ----------------------------

const list = document.getElementById("list");
const addBtn = document.getElementById("add");

function handleDelete(e) {
  const item = e.target.closest(".todo-item");
  if (item) item.remove();
}

function attachNaiveListeners() {
  document.querySelectorAll(".todo-item .delete-btn").forEach((btn) => {
    btn.addEventListener("click", handleDelete);
  });
}

// Uncomment to test naive approach
// attachNaiveListeners();

// ----------------------------
// ✅ Event Delegation (BEST)
// ----------------------------
list.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn");
  if (!deleteBtn) return;

  const todoItem = deleteBtn.closest(".todo-item");
  const id = todoItem.dataset.id;

  console.log("Deleting item with id:", id);
  removeTodo(todoItem);
});

function removeTodo(item) {
  item.remove();
}

// ----------------------------
//  ➕ Add dynamic items
// ----------------------------
let counter = 3;
addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className = "todo-item";
  li.dataset.id = counter;
  li.innerHTML = `
      Task ${counter}
      <button class="delete-btn">Delete</button>
    `;
  list.appendChild(li);
  counter++;
});

// -----------------------------
// For demo: Product grid with event delegation
// -----------------------------
const grid = document.getElementById("grid");
console.log("Product grid:", grid);

const addProduct = document.getElementById("addProduct");
console.log("Add product button:", addProduct);

function addToCart(id) {
  console.log("Added to cart:", id);
}

function toggleWishlist(id, btn) {
  btn.classList.toggle("wishlist-active");
  console.log("Wishlist toggled:", id);
}

function navigateTo(url) {
  console.log("Navigate to:", url);
}

// ----------------------------
// Event Delegation
// ----------------------------

grid.addEventListener("click", (e) => {
  const addBtn = e.target.closest(".btn-add-cart");
  const wishBtn = e.target.closest(".btn-wishlist");
  const card = e.target.closest(".product-card");

  if (!card) return;
  // console.log("Clicked on card:", card);
  // console.log("Card dataset:", card.dataset);

  const id = card.dataset.productId;

  // Add to cart
  if (addBtn) {
    addToCart(id);
    return;
  }

  // Wishlist
  if (wishBtn) {
    toggleWishlist(id, wishBtn);
    return;
  }

  // Navigate
  navigateTo(`/products/${id}`);
});

// ----------------------------
// Add dynamic products
// ----------------------------
let counter1 = 103;

addProduct.addEventListener("click", () => {
  const div = document.createElement("div");
  div.className = "product-card";
  div.dataset.productId = counter1;
  div.innerHTML = `
      <h3>Product ${counter1}</h3>
      <button class="btn-add-cart">Add to Cart</button>
      <button class="btn-wishlist">♡ Wishlist</button>
    `;
  grid.appendChild(div);
  counter1++;
});

//-----------------------------
// For demo: Analytics and locked section
// -----------------------------

const analytics = {
  track: (event, data) => {
    console.log("Analytics:", event, data);
  },
};

function showLockedMessage() {
  alert("This section is locked!");
}

// ----------------------------
// Scenario 1: Focus tracking
// ----------------------------

document.addEventListener(
  "focus",
  (e) => {
    analytics.track("field_focused", {
      field: e.target.name,
    });
  },
  true, // capture phase
);

// ----------------------------
// Scenario 2: Locked section
// ----------------------------
const lockedSection = document.querySelector(".locked");

lockedSection.addEventListener(
  "click",
  (e) => {
    e.stopPropagation(); // stop event from continuing
    e.preventDefault(); // block default action
    showLockedMessage();
  },
  true, // capture phase (VERY IMPORTANT)
);

// This would normally fire, but won't due to capture blocking
document.querySelector(".locked button").addEventListener("click", () => {
  console.log("Button clicked (should NOT fire)");
});

//-----------

const formBox = document.getElementById("formBox");
const hoverBox = document.getElementById("hoverBox");
const log = document.getElementById("log");

function print(msg) {
  log.innerHTML += msg + "<br>";
}

// ----------------------------
// ❌ blur (does NOT bubble)
// ----------------------------
formBox.addEventListener("blur", () => {
  print("❌ blur fired on formBox (rare / may not work as expected)");
});

// ----------------------------
// ✅ focusout (DOES bubble)
// ----------------------------
formBox.addEventListener("focusout", (e) => {
  print("✅ focusout fired (bubbles) from: " + e.target.placeholder);
});

// ----------------------------
// ❌ focus (does NOT bubble)
// ----------------------------
formBox.addEventListener("focus", () => {
  print("❌ focus fired on formBox (may NOT work)");
});

// ----------------------------
// ✅ focusin (DOES bubble)
// ----------------------------
formBox.addEventListener("focusin", (e) => {
  print("✅ focusin fired (bubbles) from: " + e.target.placeholder);
});

// ----------------------------
// ❌ mouseenter (no bubble)
// ----------------------------
hoverBox.addEventListener("mouseenter", () => {
  print("❌ mouseenter (no bubbling)");
});

// ----------------------------
// ❌ mouseleave (no bubble)
// ----------------------------
hoverBox.addEventListener("mouseleave", () => {
  print("❌ mouseleave (no bubbling)");
});

// ----------------------------
// ✅ mouseover (bubbles)
// ----------------------------
hoverBox.addEventListener("mouseover", (e) => {
  print("✅ mouseover (bubbles) from: " + e.target.className);
});

// ----------------------------
// ✅ mouseout (bubbles)
// ----------------------------
hoverBox.addEventListener("mouseout", (e) => {
  print("✅ mouseout (bubbles) from: " + e.target.className);
});

// -----------
// Pattern 1 : tabs
// -----------

document.querySelector(".tab-bar").addEventListener("click", (e) => {
  const tab = e.target.closest("[data-tab]");
  if (!tab) return;

  document
    .querySelectorAll("[data-tab]")
    .forEach((t) => t.classList.toggle("active-tab", t === tab));

  document
    .querySelectorAll("[data-panel]")
    .forEach((p) =>
      p.classList.toggle("active", p.dataset.panel === tab.dataset.tab),
    );
});

function sortTable(col, dir) {
  const tbody = document.getElementById("tableBody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  const index = col === "name" ? 0 : 1;

  rows.sort((a, b) => {
    const A = a.children[index].textContent;
    const B = b.children[index].textContent;

    if (index === 1) {
      return dir === "asc" ? A - B : B - A;
    }

    return dir === "asc" ? A.localeCompare(B) : B.localeCompare(A);
  });

  tbody.append(...rows);
}

document.querySelector("thead").addEventListener("click", (e) => {
  const th = e.target.closest("th[data-sort]");
  if (!th) return;

  const col = th.dataset.sort;
  const dir = th.dataset.dir === "asc" ? "desc" : "asc";
  th.dataset.dir = dir;

  sortTable(col, dir);
});

document.querySelector(".accordion").addEventListener("click", (e) => {
  const trigger = e.target.closest(".accordion__trigger");
  if (!trigger) return;

  const item = trigger.closest(".accordion__item");
  const isOpen = item.classList.contains("is-open");

  document
    .querySelectorAll(".accordion__item")
    .forEach((i) => i.classList.remove("is-open"));

  if (!isOpen) item.classList.add("is-open");
});
