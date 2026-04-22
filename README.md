


### Some common DOM inspect

``` js
console.dir()
console.log(document);           // The entire DOM
console.log(document.title);     // Page title
console.log(document.body);      // The <body> element as a JS object
console.log(document.URL);


const body = document.body;
console.log(body.nodeType);    // 1  (it's an element)
console.log(body.nodeName);    // "BODY"
console.log(body.nodeValue);   // null  (elements don't have a value; text nodes do)

// Text nodes are real nodes too — this trips up beginners
const heading = document.querySeconst heading = document.querySelector('h1');
console.log(heading.childNodes);


document.title               // Get/set the page title
document.URL                 // Current full URL
document.domain              // Domain name
document.readyState          // "loading" | "interactive" | "complete"

// Entry points into the tree
document.documentElement     // The <html> element
document.head                // The <head> element
document.body   


const hero       = document.querySelector('.hero');
const firstInput = document.querySelector('input[type="email"]');
const navLink    = document.querySelector('nav a.active');

// querySelectorAll → returns ALL matches as a static NodeList
const cards    = document.querySelectorAll('.card');
const sections = document.querySelectorAll('section[data-visible="true"]');

// NodeList is NOT an array — but you can iterate it
cards.forEach(card => console.log(card));

// Convert to array when you need array methods
const cardArray = Array.from(cards);
const filtered  = cardArray.filter(c => c.classList.contains('featured'));

const item = document.querySelector('.menu-item');

// Moving up
item.parentElement              // Direct parent
item.closest('.dropdown')       // Nearest ancestor matching selector ← very useful

// Moving sideways
item.previousElementSibling     // Previous sibling element
item.nextElementSibling         // Next sibling element

// Moving down
item.firstElementChild          // First child element
item.lastElementChild           // Last child element
item.children                   // All direct child elements
item.children[2]

const img   = document.querySelector('.hero-img');
const input = document.querySelector('#email');
const link  = document.querySelector('a.cta');

// getAttribute / setAttribute — the universal pair
img.getAttribute('src');                   // "/images/old.jpg"
img.setAttribute('src', '/images/new.jpg'); // swap the image
img.setAttribute('alt', 'New hero image'); // add/update alt text
```


SOME resource:

1. https://github.com/mrhm-dev/functional-javascript-tutorial
2. https://github.com/mrhm-dev/dom-project1
3. 