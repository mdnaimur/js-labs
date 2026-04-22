
console.log('Script loaded');
btn = document.querySelector(".btn");
btn.addEventListener("click", () => console.log("Button Clicked")); 

btn.addEventListener('click', () => console.log('second'));


const onceBtn = document.getElementById('once-btn');
console.log(onceBtn);
const removeBtn = document.getElementById('remove-btn');
const anonBtn = document.getElementById('anon-btn');
const box = document.getElementById('box');


function handleOnceClick() {
  console.log('Clicked ONCE button');
}

onceBtn.addEventListener('click', handleOnceClick, {
  once: true
});


// ----------------------------
// 2. removeEventListener (correct way)   
// ----------------------------
function handleClick() {
  console.log('Removable listener fired');
}

removeBtn.addEventListener('click', handleClick);

// Remove after 3 seconds   
setTimeout(() => {
    removeBtn.removeEventListener('click', handleClick);
    console.log('Listener removed from "Add & Remove" button');
}, 3000);

// ----------------------------
// 3. Anonymous function issue
// ----------------------------
anonBtn.addEventListener('click', () => {
  console.log('Anonymous listener fired');
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




btn.addEventListener('click', function(event) {
  // Who fired it
  event.target;           // the element that was actually clicked
  console.log("Its Event target",event.target);
  event.currentTarget;    // the element the listener is attached to
  console.log("Its Event currentTarget",event.currentTarget);
                          // (different during bubbling — Phase 6)
  event.type;   
  console.log("Its Event type",event.type);          // "click"

  // Where it happened
  event.clientX;          // X position relative to viewport
  event.clientY;          // Y position relative to viewport
  event.pageX;            // X position relative to full document
  event.pageY;            // Y position relative to full document

  // What modifier keys were held
  event.shiftKey;         // true/false
  event.ctrlKey;
  event.altKey;
  event.metaKey;          // Cmd on Mac

  // Control flow
  event.preventDefault();   // stop the browser's default action
  event.stopPropagation();  // stop the event from bubbling (Phase 6)
});