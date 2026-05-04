/* ----------------------------
   Fake API
---------------------------- */
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

/* ----------------------------
   Main Loader
---------------------------- */
async function loadProducts(categoryId) {
  const grid = document.querySelector(".product-grid");

  // 1. Loading state
  grid.innerHTML = "";
  grid.append(createSkeletons(6));
  grid.dataset.state = "loading";

  try {
    const res = await fakeFetch(categoryId);

    if (!res.ok) throw new Error(`Server error`);

    const { products, total } = await res.json();

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

/* ----------------------------
   Render Products
---------------------------- */
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

/* ----------------------------
   Skeleton Loader
---------------------------- */
function createSkeletons(count) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.className = "skeleton";
    frag.appendChild(div);
  }
  return frag;
}

/* ----------------------------
   Error UI
---------------------------- */
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

/* ----------------------------
   Count UI
---------------------------- */
function updateCount(total) {
  document.getElementById("count").textContent = `Total products: ${total}`;
}
