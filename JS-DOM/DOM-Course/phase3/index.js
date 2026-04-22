

const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    console.log('Theme toggled. Current body classes:', document.body.classList);

    isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    console.log('Theme saved to localStorage:', localStorage.getItem('theme'));
};


document.querySelector('#theme-toggle').addEventListener('click', toggleTheme);



const modal = document.querySelector('.modal');
const openBtn = document.querySelector('#open-modal');
const closeBtn = document.querySelector('#close-modal');


openBtn.addEventListener('click', () => {
    modal.classList.add('is-open');
    console.log('Modal opened. Current classes:', modal.classList);
}  );

closeBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
    console.log('Modal closed. Current classes:', modal.classList);
}
);


const nav = document.querySelector('.nav');
console.log('Navigation element:', nav);
console.log('Node name:', nav.nodeName);

const hamburger = document.querySelector('.hamburger');
console.log('Hamburger element:', hamburger);
console.log('Node name:', hamburger.nodeName);  

hamburger.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    console.log('Toggled navigation. Current classes:', nav.classList);
});



// const btn = document.querySelector('.add-to-cart');
// console.log(btn.parentNode);
// console.log(btn.parentElement);
// console.log(btn.childNodes);
// console.log(btn.children);
// console.log(btn.firstChild);
// console.log(btn.classList)
// console.log(btn.className);
// console.log(btn.id);
// console.log(btn.tagName);

// btn.classList.add('active');
// btn.classList.remove('active');

// btn.classList.toggle('active');
// btn.classList.toggle('active',true);
// btn.classList.toggle('active', true);  // force-add (second arg = condition)
// btn.classList.toggle('active', false); // force-remove
// btn.classList.contains('active');      // true/false — check
// btn.classList.replace('btn', 'link');  // swap one class for another


// btn.classList.add('active', 'highlighted', 'large');
// btn.classList.remove('active', 'highlighted');
// console.log('--- DOM Element Properties and Methods Demo ---');
// const box = document.querySelector('.box');

// console.log('Box class list:', box.classList);
// console.log('Box class name:', box.className);
// console.log('Box id:', box.id);
// console.log('Box tag name:', box.tagName);
// console.log('Box text content:', box.textContent);
// console.log('Box inner HTML:', box.innerHTML);
// console.log('style object:', box.style);


// box.style.backgroundColor = 'blue';
// box.style.color = 'white';
// box.style.fontSize = '20px';
// box.style.padding = '20px';
// box.style.borderRadius = '10px';


// console.log('--- Computed Styles ---');

// const computed = window.getComputedStyle(box);
// console.dir(computed);
// console.log('Computed styles for .box:', computed.datatset);
// console.log(computed);
// console.log('Computed background color:', computed.backgroundColor);
// console.log('Computed color:', computed.color);
// console.log('Computed font size:', computed.fontSize);
// console.log('Computed padding:', computed.padding);
// console.log('Computed border radius:', computed.borderRadius);





// const product = document.querySelector('.product');


// console.dir(product);
// console.log(product.dataset); // Accessing the dataset object
// console.log(product.childNodes)


// console.log('Product ID:', product.dataset.id);
// console.log('Product Category:', product.dataset.category);



// console.log('****************************************************************');
// const img = document.querySelector('.hero-img');
// const input = document.querySelector('#email')
// const link = document.querySelector('.cta');
// const cartCount = document.querySelector('#cart-count');
// console.log('Current image src:', img.src); // Absolute URL

// function changeImage() {
//     img.src = 'https://fastly.picsum.photos/id/574/200/300.jpg?hmac=8A2sOGZU1xgRXI46snJ80xNY3Yx-KcLVsBG-wRchwFg';
//     img.alt = 'New Image';
//     console.log('Image src updated to:', img.src);  
//     img.setAttribute('src', img.src); // Adding a custom data attribute
//     console.log('Image data-src attribute set to:', img.dataset.src); // Accessing the new data attribute
//     img.setAttribute('alt', 'Updated Image'); // Updating the alt attribute
//     console.log('Image alt updated to:', img.alt); // Accessing the updated alt attribute
// }


// console.dir(input.children);
// console.log("I am deep input.value",input.value);
// console.log("I am deep input.id",input.id);
// console.log("I am deep input.type",input.type);



// /* 🔹 Check link attribute */
// function checkLink() {
//   if (link.hasAttribute('target')) {
//     console.log('Opens in:', link.getAttribute('target'));
//   }
//   link.href = 'https://google.com';
// }


// function enableInput() {
//   input.removeAttribute('disabled');
//   input.value = 'user@email.com';
// }

// console.log('Image title:', img.children); // Accessing the new property

// console.log('Current image src:', img.parentElement); // Absolute URL
// console.log('Current child nodes alt:', img.childNodes); // Absolute URL
// console.log("previous sibling:", img.previousSibling); // Absolute URL
// console.log("next sibling:", img.nextSibling); // Absolute URL
// console.log("parent element:", img.parentElement); // Absolute URL
// console.log("children:", img.children); // HTMLCollection of child elements (empty for <img>)
// console.log("first child:", img.firstChild); // null (no child nodes)
// console.log("last child:", img.lastChild); // null (no child nodes)
// console.log("getAttribute('src'):", img.getAttribute('src')); // Original src value
// console.log("getAttribute('alt'):", img.getAttribute('alt')); // Original alt value
// console.log("src property:", img.src); // Absolute URL of the image
// console.log('Current image src:', img.getAttribute('src'));
// console.log('Current image alt:', img.getAttribute('alt'));
// console.log('Current image src via property:', img.src);
// console.log('Current image alt via property:', img.alt);    
// console.log('Current image src via dataset:', img.dataset.src); // undefined, no data-src attribute
// console.log('Current image alt via dataset:', img.dataset.alt); // undefined, no data-alt attribute
// console.log('Current image src via getAttribute:', img.getAttribute('src')); // same as above
// console.log('Current image alt via getAttribute:', img.getAttribute('alt')); // same as
// console.log(img.nodeName); // "IMG"
// console.log(img.nodeType); // 1 (Element node)
// console.log(img.textContent); // "" (img has no text content)
// console.log(img.innerHTML); // "" (img has no inner HTML)
// console.log(img.innerText); // "" (img has no inner text)



// const price = document.querySelector('.price');

// // Log current price
// console.log('Current price:', price.textContent);
// function updatePrice() {
//     // Extract numeric value from price text
//     const currentPrice = parseFloat(price.textContent.replace(/[^0-9.]/g, ''));
//     if (isNaN(currentPrice)) {
//         console.error('Invalid price format:', price.textContent);
//         return;
//     }

//     // Apply a 20% discount
//     const discountedPrice = (currentPrice * 0.8).toFixed(2);
//     price.textContent = `${discountedPrice}`;
//     console.log('Updated price:', price.textContent);
// }

// // cart couuter logic
// const cartCount = document.querySelector('#cart-count');

// function addToCart(){
//     const currentCount = parseInt(cartCount.textContent,10);
//     cartCount.textContent = currentCount + 1;
//     console.log('Cart count updated:', cartCount.textContent);
// }

function addToCart() {
    let count = parseInt(cartCount.textContent);
    console.log('Current cart count:', count);
    if (isNaN(count)) {
        console.error('Invalid cart count:', cartCount.textContent);
        return;
    }
    count += 1;
    cartCount.textContent = count;
    console.log('Cart count updated:', cartCount.textContent);
}


// function runDemo() {
//     const userInput = '<img src="x" onerror="alert(\'XSS Attack!\')">';
//     console.log('User Input:', userInput);

//     // Unsafe: Using innerHTML
//     const unsafeCard = document.getElementById('unsafe');
//     unsafeCard.innerHTML = userInput; // This will execute the onerror script
//     console.warn('Unsafe usage of innerHTML can lead to XSS vulnerabilities!');
//     console.log("I am innerHTML:", unsafeCard.innerHTML);

//     // Safe: Using textContent
//     const safeCard = document.getElementById('safe');
//     safeCard.textContent = userInput; // This will display the input as text, not HTML
//     console.log("I am textContent:", safeCard.textContent);
// }

// const card = document.querySelector('.card');
// console.log(card.nodeName);
// console.log(card.nodeType);
// console.log(card.textContent);
// card.textContent = 'Hello <strong>World</strong>';
// console.log("I am textContent:", card.textContent);
// console.log("I am innerHTML:", card.innerHTML);
// card.innerHTML = 'Hello <strong>World</strong>';
// console.log("I am innerHTML:", card.innerHTML);
// card.innerText = 'Hello <strong>World</strong>';
// console.log("I am innerText:", card.innerText);

