// These are ALL falsy (treated as false in conditions)
false, 0, "", null, undefined, NaN

// Everything else is truthy — including:
"hello", 1, -1, [], {}, "false"

// Real-world consequence:
let username = "";  // empty string — falsy

if (username) {
  console.log("Welcome, " + username);
} else {
  console.log("Please enter a username");  // this runs
}


// Syntax: for (initialize; condition; update)
for (let i = 0; i < 5; i++) {
  console.log("Step:", i);
}
// Prints: Step: 0, Step: 1, Step: 2, Step: 3, Step: 4

// Real use: print a multiplication table
const number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} × ${i} = ${number * i}`);
}

// Keep asking until valid input
// let input = "";
// while (input !== "quit") {
//   input = prompt("Type something (or 'quit' to exit):");
//   console.log("You typed:", input);
// }

// Classic while pattern: countdown
let countdown = 5;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Blastoff!");


const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
  console.log(fruit);
}
// apple, banana, mango