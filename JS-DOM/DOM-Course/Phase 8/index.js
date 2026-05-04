// const container = document.getElementById("container");
// if (!container) {
//   throw new Error("Container not found in DOM");
// }
// const boxes = [];

// for (let i = 0; i < 20; i++) {
//   const div = document.createElement("div");
//   div.className = "box";
//   div.textContent = i + 1;
//   container.appendChild(div);
//   boxes.push(div);
// }

// function badResize(elements) {
//   console.log("BAD resize running....");
//   elements.forEach((el) => {
//     const w = el.offsetWidth;
//     el.style.width = w * 1.2 + "px";
//   });
// }

// function goodResize(elements) {
//   console.log("GOOD resize running ....");

//   const widths = elements.map((el) => el.offsetWidth);

//   elements.forEach((el, i) => {
//     el.style.width = widths[i] * 1.2 + "px";
//   });
// }

// /* ----------------------------
//    ⚡ RAF — next frame optimization
// ---------------------------- */
// function rafResize(elements) {
//   console.log("RAF resize running...");

//   const widths = elements.map((el) => el.offsetWidth);

//   requestAnimationFrame(() => {
//     elements.forEach((el, i) => {
//       el.style.width = widths[i] * 1.2 + "px";
//     });
//   });
// }

/* ----------------------------
   DATA
---------------------------- */
// let items = [];
// for (let i = 1; i <= 20; i++) {
//   items.push({ id: i, name: "Item " + i });
// }

// /* ----------------------------
//    REAL DOM LIST
// ---------------------------- */
// const naiveList = document.getElementById("naiveList");
// const virtualList = document.getElementById("virtualList");

// /* ----------------------------
//    INITIAL RENDER
// ---------------------------- */
// function renderNaive() {
//   naiveList.innerHTML = "";
//   items.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item.name;
//     naiveList.appendChild(li);
//   });
// }

// function renderVirtual() {
//   virtualList.innerHTML = "";
//   items.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item.name;
//     li.dataset.id = item.id;
//     virtualList.appendChild(li);
//   });
// }

// renderNaive();
// renderVirtual();

// /* ----------------------------
//    ❌ NAIVE RENDER (BAD)
// ---------------------------- */
// function naiveRender() {
//   console.log("Naive re-render: destroys everything");

//   naiveList.innerHTML = "";

//   items.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item.name;
//     naiveList.appendChild(li);
//   });
// }

// /* ----------------------------
//    SIMULATE ONE CHANGE
// ---------------------------- */
// function changeOneItem() {
//   console.log("Changing only item 5");

//   items[4].name = "UPDATED ITEM 5";
// }

// /* ----------------------------
//    🧠 VIRTUAL DOM (SIMPLIFIED)
// ---------------------------- */
// function diff(oldItems, newItems) {
//   const patches = [];

//   for (let i = 0; i < oldItems.length; i++) {
//     if (oldItems[i].name !== newItems[i].name) {
//       patches.push({
//         index: i,
//         value: newItems[i].name,
//       });
//     }
//   }

//   return patches;
// }

// function virtualUpdate() {
//   console.log("Virtual DOM update (only changed item)");

//   const newItems = JSON.parse(JSON.stringify(items));

//   const patches = diff(items, newItems);

//   patches.forEach((p) => {
//     const li = virtualList.children[p.index];
//     if (li) {
//       li.textContent = p.value;
//       li.classList.add("highlight");

//       setTimeout(() => li.classList.remove("highlight"), 500);
//     }
//   });
// }

// const host = document.querySelector("#widget");

// // Create shadow root
// const shadow = host.attachShadow({ mode: "open" });

// shadow.innerHTML = `
//   <style>
//     p {
//       color: red;
//       font-size: 22px;
//     }

//     .box {
//       padding: 10px;
//       border: 1px solid #ddd;
//       background: white;
//       border-radius: 8px;
//     }
//   </style>

//   <div class="box">
//     <p>I am INSIDE Shadow DOM (red color)</p>
//     <slot></slot>
//   </div>
// `;

// class MyCard extends HTMLElement {
//   constructor() {
//     super();

//     const shadow = this.attachShadow({ mode: "open" });

//     shadow.innerHTML = `
//       <style>
//         .card {
//           padding: 16px;
//           border: 1px solid #e5e7eb;
//           border-radius: 10px;
//           background: white;
//           width: 250px;
//         }

//         h2 {
//           margin: 0 0 10px;
//           font-size: 18px;
//         }

//         p {
//           color: gray;
//           font-size: 14px;
//         }
//       </style>

//       <div class="card">
//         <h2><slot name="title">Default Title</slot></h2>
//         <slot></slot>
//       </div>
//     `;
//   }
// }

// // Register custom element
// customElements.define("my-card", MyCard);

/* ----------------------------
   1. TRANSFORM ANIMATION (GOOD)
---------------------------- */
// let pos = 0;
// function startAnimation() {
//   const el = document.getElementById("box");

//   function animate() {
//     pos += 5;

//     // GOOD: GPU compositing only
//     el.style.transform = `translateX(${pos}px)`;

//     if (pos < 300) {
//       requestAnimationFrame(animate);
//     }
//   }

//   animate();
// }

/* ----------------------------
   2. DEBOUNCE
---------------------------- */
// function debounce(fn, delay) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(...args), delay);
//   };
// }

// const scrollText = document.getElementById("scrollText");

// window.addEventListener(
//   "scroll",
//   debounce(() => {
//     scrollText.textContent = "Debounced scroll event fired";
//   }, 150),
// );

/* ----------------------------
   3. THROTTLE
---------------------------- */
// function throttle(fn, interval) {
//   let last = 0;

//   return (...args) => {
//     const now = Date.now();
//     if (now - last >= interval) {
//       last = now;
//       fn(...args);
//     }
//   };
// }

// window.addEventListener(
//   "scroll",
//   throttle(() => {
//     console.log("Throttled scroll:", window.scrollY);
//   }, 100),
// );

/* ----------------------------
   4. INTERSECTION OBSERVER
---------------------------- */
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("is-visible");
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   { threshold: 0.1 },
// );

// document
//   .querySelectorAll(".animate-on-scroll")
//   .forEach((el) => observer.observe(el));

// /* ----------------------------
//    5. RESIZE OBSERVER
// ---------------------------- */
// const chart = document.getElementById("chart");

// const ro = new ResizeObserver((entries) => {
//   for (let entry of entries) {
//     const { width, height } = entry.contentRect;
//     chart.textContent = `Width: ${Math.round(width)}px, Height: ${Math.round(height)}px`;
//   }
// });

// ro.observe(chart);

// const feed = document.getElementById("feed");

// let page = 1;

// /* fake data generator */
// function createItem(i) {
//   return `
//     <div class="feed-item">
//       <h3>Post ${i}</h3>
//       <p>This is a demo feed item loaded dynamically.</p>
//     </div>
//   `;
// }

// /* render initial items */
// function loadInitial() {
//   for (let i = 1; i <= 10; i++) {
//     feed.innerHTML += createItem(i);
//   }
//   revealItems();
// }

/* ----------------------------
   FIXED VERSION (optimized idea)
---------------------------- */
// function revealItems() {
//   const items = document.querySelectorAll(".feed-item");

//   items.forEach((item) => {
//     const top = item.getBoundingClientRect().top;

//     if (top < window.innerHeight) {
//       item.classList.add("show");
//     }
//   });
// }

/* ----------------------------
   INFINITE SCROLL
---------------------------- */
// window.addEventListener("scroll", () => {
//   const scrollBottom = window.scrollY + window.innerHeight;

//   const pageBottom = document.body.offsetHeight;

//   // when near bottom
//   if (scrollBottom >= pageBottom - 50) {
//     loadMore();
//   }

//   revealItems();
// });

// /* ----------------------------
//    LOAD MORE DATA (simulated API)
// ---------------------------- */
// function loadMore() {
//   document.getElementById("loading").style.display = "block";

//   setTimeout(() => {
//     const start = page * 10 + 1;

//     for (let i = start; i < start + 10; i++) {
//       const div = document.createElement("div");
//       div.innerHTML = createItem(i);
//       feed.appendChild(div.firstElementChild);
//     }

//     page++;
//     document.getElementById("loading").style.display = "none";
//   }, 800);
// }

/* start */
// loadInitial();

// SYNCHRONOUS — each line waits for the previous to finish
// const aa = getDataFromMemory(); // instant
// const bb = processData(aa); // instant
// console.log(bb); // instant
// // Total: milliseconds. Fine.

// // THE PROBLEM — what if one step takes 3 seconds?
// const a = getDataFromServer(); // 3 seconds — BLOCKS everything
// const b = processData(a); // can't run until a is done
// console.log(b); // can't run until b is done
// // During those 3 seconds: your UI is completely frozen.
// // No clicks, no scrolling, no animations. The page is dead.

// async function run() {
//   const a = await getDataFromServer(); // non-blocking wait
//   const b = processData(a);
//   console.log(b);
// }

// run();

// function getDataFromServer() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("server data");
//       console.log("this time get datafrom server");
//     }, 2000);
//   });
// }

// function getDataFromServer() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("server data");
//     }, 2000);
//   });
// }

// function fakeFetch(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id === 2) {
//         reject({ status: 404 });
//       } else {
//         resolve({
//           ok: true,
//           json: () =>
//             Promise.resolve({
//               id,
//               name: "User " + id,
//               role: "Developer",
//             }),
//         });
//       }
//     }, 1000);
//   });
// }

// function renderUser(user) {
//   document.getElementById("user").innerHTML = `
//     <div class="user-box">
//       <h3>${user.name}</h3>
//       <p>Role: ${user.role}</p>
//     </div>
//   `;
// }

// function showError(err) {
//   document.getElementById("user").innerHTML = "";
//   document.getElementById("status").innerHTML =
//     `<p class="error">❌ Error: HTTP ${err.status || err}</p>`;
// }

// function showLoading() {
//   document.getElementById("status").innerHTML = `<p>⏳ Loading...</p>`;
// }

// function loadUserPromise(id) {
//   showLoading();

//   fakeFetch(id)
//     .then((res) => {
//       if (!res.ok) throw new Error(`HTTP ERROR`);
//       return res.json();
//     })
//     .then((user) => {
//       document.getElementById("status").innerHTML =
//         `<p class="success">✔ Loaded with Promise Chain</p>`;
//       renderUser(user);
//     })
//     .catch((err) => {
//       showError(err);
//     });
// }

// async function loadUserAsync(id) {
//   showLoading();

//   try {
//     const res = await fakeFetch(id);

//     if (!res.ok) throw new Error(`HTTP ERROR`);

//     const user = await res.json();

//     document.getElementById("status").innerHTML =
//       `<p class="success">✔ Loaded with Async/Await</p>`;

//     renderUser(user);
//   } catch (err) {
//     showError(err);
//   }
// }

// function fakeFetch(url, options) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         ok: true,
//         json: () =>
//           Promise.resolve({
//             url,
//             method: options.method,
//             body: options.body || null,
//           }),
//       });
//     }, 800);
//   });
// }

// function showResult(data) {
//   document.getElementById("result").innerHTML =
//     `<p class="success">✔ Success</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
// }

// async function createProduct() {
//   console.log("i m running inside create Product");
//   const name = document.getElementById("name").value;
//   const price = document.getElementById("price").value;
//   if (!name) {
//     console.log("name not found");
//   }

//   const res = await fakeFetch("/api/products", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer token123",
//     },
//     body: JSON.stringify({ name, price }),
//   });

//   const data = await res.json();
//   console.log(data);
//   showResult(data);
// }

// async function updateProduct() {
//   const id = document.getElementById("updateId").value;
//   const name = document.getElementById("updateName").value;

//   const res = await fakeFetch(`/api/products/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name }),
//   });

//   const data = await res.json();
//   showResult(data);
// }

// async function deleteProduct() {
//   const id = document.getElementById("deleteId").value;

//   const res = await fakeFetch(`/api/products/${id}`, {
//     method: "DELETE",
//   });

//   const data = await res.json();
//   showResult(data);
// }

// async function uploadProfile() {
//   const name = document.getElementById("username").value;
//   const fileInput = document.getElementById("file");

//   const formData = new FormData();
//   formData.append("name", name);
//   formData.append("avatar", fileInput.files[0]);

//   const res = await fakeFetch("/api/profile", {
//     method: "POST",
//     body: formData,
//   });

//   const data = await res.json();
//   showResult(data);
// }

function fakeFetch(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryId === 2) {
        reject(new Error("Server crashed"));
      } else {
        resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              total: 3,
              products: [
                { id: 1, name: "Apple", price: 1.2 },
                { id: 2, name: "Banana", price: 0.8 },
                { id: 3, name: "Cherry", price: 2.5 },
              ],
            }),
        });
      }
    }, 1000);
  });
}

async function loadProducts(categoryId) {
  const grid = document.querySelector(".product-grid");
  console.log(grid);
  console.log("gird dataset", grid.dataset);
  // 1. Loading state
  grid.innerHTML = "";
  grid.append(createSkeletons(6));
  grid.dataset.state = "loading";

  try {
    const res = await fakeFetch(categoryId);
    console.log("i am res data", res);
    console.log("i am res json", res.json());

    if (!res.ok) throw new Error(`Server error`);

    const { products, total } = await res.json();
    console.log("product and total", products, total);

    // 2. Success
    grid.dataset.state = "success";
    renderProducts(grid, products);
    updateCount(total);
  } catch (err) {
    // 3. Error
    grid.dataset.state = "error";
    grid.innerHTML = "";
    grid.append(createErrorState(err, () => loadProducts(categoryId)));
  }
}

function renderProducts(container, products) {
  if (products.length === 0) {
    container.innerHTML = '<p class="empty">No products found.</p>';
    return;
  }

  const fragment = document.createDocumentFragment();

  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const name = document.createElement("h2");
    name.textContent = product.name;

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = `£${product.price.toFixed(2)}`;

    const btn = document.createElement("button");
    btn.className = "btn btn--add";
    btn.textContent = "Add to cart";

    card.append(name, price, btn);
    fragment.appendChild(card);
  });

  container.replaceChildren(fragment);
}

function createSkeletons(count) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.className = "skeleton";
    frag.appendChild(div);
  }
  return frag;
}

function createErrorState(err, onRetry) {
  const div = document.createElement("div");
  div.className = "error-state";

  const msg = document.createElement("p");
  msg.textContent = `Failed to load: ${err.message}`;

  const btn = document.createElement("button");
  btn.textContent = "Try again";
  btn.addEventListener("click", onRetry);

  div.append(msg, btn);
  return div;
}

function updateCount(total) {
  document.getElementById("count").textContent = `Total products: ${total}`;
}
