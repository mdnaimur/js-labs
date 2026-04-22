








async function renderProducts(apiUrl) {
  const grid = document.querySelector('.product-grid');

  // 1. Show loading state
  grid.innerHTML = '<p class="loading">Loading…</p>';

  try {
    const res      = await fetch(apiUrl);
    const products = await res.json();

    // 2. Build everything off-DOM
    const fragment = document.createDocumentFragment();

    products.forEach(p => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.dataset.id = p.id;

      // Safe text insertion — no XSS risk
      const name = document.createElement('h2');
      name.textContent = p.name;

      const price = document.createElement('span');
      price.className = 'price';
      price.textContent = `£${p.price.toFixed(2)}`;

      const btn = document.createElement('button');
      btn.className = 'btn btn--add';
      btn.textContent = 'Add to cart';
      btn.dataset.productId = p.id;

      card.append(name, price, btn);
      fragment.appendChild(card);
    });

    // 3. Single DOM swap — replaces loading state
    grid.replaceChildren(fragment);

  } catch (err) {
    grid.innerHTML = '<p class="error">Failed to load products.</p>';
    console.error('Render error:', err);
  }
}




const products = [
  { id: 1, name: 'Shoes', price: 89 },
  { id: 2, name: 'Bag',   price: 120 },
];

// innerHTML template literal — concise, fast to write
const grid = document.querySelector('.grid');


// grid.innerHTML = products.map(p => `
//   <div class="card" data-id="${p.id}">
//     <h2 class="card__title">${p.name}</h2>
//     <span class="card__price">£${p.price}</span>
//     <button class="btn">Add to cart</button>
//   </div>
// `).join('');


function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
grid.innerHTML = products.map(p => `
  <div class="card">
    <h2>${escapeHtml(p.name)}</h2>
    <span class="card__price">£${escapeHtml(p.price)}</span>
    <button class="btn">Add to cart</button>
  </div>
`).join('');

// const card = document.createElement('div');
// card.className = 'card';
// card.dataset.id = '42';

// const title = document.createElement('h2');
// title.textContent = 'New Product';
// title.className = 'card__title';

// const btn = document.createElement('button');
// btn.textContent = 'Add to cart';
// btn.className = 'btn';

// card.appendChild(title);
// card.appendChild(btn);

// document.querySelector('.product-grid').appendChild(card);

// const list = document.querySelector('ul');
// const newItem = document.createElement('li');


// for (let i = 0; i < 100; i++) {
//   const li = document.createElement('li');
//   li.textContent = 'Item ' + i;
//   list.appendChild(li);
// }


// let html = '';

// for (let i = 0; i < 1000; i++) {
//   html += `<li>Item ${i}</li>`;
// }


// console.log(document);  
// const fragment = document.createDocumentFragment();
// console.time('Creating list items');


// for (let i = 0; i < 1000; i++) {
//   const li = document.createElement('li');
//   li.textContent = 'Item ' + i;
//   fragment.appendChild(li);
// }

// console.timeEnd('Creating list items');
// list.appendChild(fragment);

// document.querySelector('ul').innerHTML = html;
// console.log('New item created:', newItem);
// console.log('List before appending new item:', list);
// console.log('List items before appending new item:', list.children);
// console.log('List items count before appending new item:', list.children.length);
// console.log('Appending new item to the list...');
// console.log('New item text content before appending:', newItem.textContent);





// newItem.textContent = 'New Item1';
// newItem.textContent = 'New Item2';

// const third = list.children[2];
// console.log('Third item before inserting new item:', third);
// list.insertBefore(newItem, third);

// console.log('List items after inserting new item:', list.children);

// list.prepend(newItem);
// list.append(newItem);
// list.append("Plain text too");

// // const card = document.querySelector('.card');
// card.before(newItem);    // insert before card (as sibling)
// card.after(newItem);     // insert after card (as sibling)

// card.insertAdjacentHTML('beforebegin', '<div class="badge">New</div>');
// card.insertAdjacentHTML('afterbegin',  '<span class="tag">Sale</span>');
// card.insertAdjacentHTML('beforeend',   '<button>Buy</button>');
// card.insertAdjacentHTML('afterend',    '<div class="divider"></div>');



// Modern: element removes itself

// const card = document.querySelector('.card');
// card.remove(); 

// const oldHeader = document.querySelector('h1')
// const newHeader = document.createElement('h2');
// newHeader.textContent = 'Updated heading';
// oldHeader.replaceWith(newHeader);

// console.log("Form validation script loaded.");

// function validateForm() {
//     console.log("Validating form...");
//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let password = document.getElementById("password").value.trim();
//     let age = document.getElementById("age").value.trim();
//     let errorMsg = "";

//     if (name === "") {
//         errorMsg += "Name is required.<br>";
//     }
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email === "") {
//         errorMsg += "Email is required.<br>";
//     } else if (!emailPattern.test(email)) {
//         errorMsg += "Please enter a valid email address.<br>";
//     }

//     if (password === "") {
//         errorMsg += "Password is required.<br>";
//     }

//     if (age === "") {
//         errorMsg += "Age is required.<br>";
//     } else if (isNaN(age) || age <= 0) {
//         errorMsg += "Please enter a valid age.<br>";
//     }
//     if (errorMsg !== "") {
//         errorMsg += "<br>";
//         document.getElementById("errorMsg").innerHTML = errorMsg;
//         return false;
//     }
//      alert("Form submitted successfully!");
//     return true;
// }




// function validateForm() {
//     const nameInput = document.getElementById('name');
//     const emailInput = document.getElementById('email');
//     const errorDiv = document.getElementById('errorMsg');
//     let errors = [];

//     // Validate name
//     if (nameInput.value.trim() === '') {
//         errors.push('Name is required.');
//     }

//     // Validate email
//     if (emailInput.value.trim() === '') {
//         errors.push('Email is required.');
//     } else if (!isValidEmail(emailInput.value.trim())) {
//         errors.push('Please enter a valid email address.');
//     }

//     console.log('Validation completed. Errors:', errors);
//     // Display errors
//     errorDiv.innerHTML = '';
//     if (errors.length > 0) {
//         errors.forEach(error => {
//             const errorElement = document.createElement('p');
//             errorElement.textContent = error;
//             errorElement.className = 'error';
//             errorDiv.appendChild(errorElement);
//         });
//         return false;
//     }

//     return true;
// }

// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }
