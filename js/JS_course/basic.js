// let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Start week");
//     break;
//   case "Friday":
//     console.log("End week");
//     break;
// }

// let score = 80;

// if (score >= 90) {
//   console.log("A");
// } else if (score >= 70) {
//   console.log("B");
// } else {
//   console.log("C");
// }

// let role = "admin";

// switch (role) {
//   case "admin":
//     console.log("Full access");
//     break;

//   case "user":
//     console.log("Limited access");
//     break;

//   default:
//     console.log("No access");
// }

// for (let i = 2; i <= 10; i +=2){
//   console.log(i);
// }

// function add(a, b) {
//   return a + b;
// }

// let result = add(3, 4);
// console.log(result);

// function declaration

// function greet() {
//   console.log("Hello");
// }

// const greet = function () {
//   console.lot("Hello");
// };

// const users = [1, 2, 3];

// const doubled = users.map((n) => n * 2);

// console.log(doubled);

// console.log(sum(2, 3));
// function sum(a, b) {
//   return a + b;
// }

// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const inc = counter();

// inc(); // 1
// inc(); // 2

// function outer() {
//   let counter = 0; // outer variable

//   // inner function (closure)
//   return function inner() {
//     counter++; // inner function has access to the outer function's variable
//     console.log(counter);
//   };
// }

// const increment = outer(); // `increment` now holds the inner function

// increment(); // 1
// increment(); // 2
// increment(); // 3

// const user = {
//   name: "Naim",
//   age: 25,
//   isAdmin: true,
// };

// console.log(user.name); // dot notation
// console.log(user["age"]); // bracket notation

// const users = [
//   { name: "Naim", age: 25 },
//   { name: "Rahim", age: 30 },
//   { name: "Qader", age: 37 },
// ];
// // add
// console.log(users[2].name);

// const nums = [1, 2, 3];

// const doubled = nums.map((n) => n * 2);

// console.log(doubled); // [2, 4, 6]

// const nums = [1, 2, 3, 4];

// const even = nums.filter((n) => n % 2 === 0);

// console.log(even); // [2, 4]

// const users = [{ id: 1 }, { id: 2 }];

// const user = users.find((u) => u.id === 2);
// nums.forEach((n) => console.log(n));

// console.log(this);

// const user = {
//   name: "Naimur",
//   greet() {
//     console.log(this.name);
//   },
// };

// user.greet();
// const obj = {
//   name: "JS",
//   show: function () {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 100);
//   },
// };

// obj.show();

// const name = localStorage.getItem("name");
// console.log(name);

// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);
// }

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("End");

// let data = [];

// function add() {
//   data.push(new Array(1000000).fill("x"));
// }

// setInterval(add, 1000);

function throttle(fn, limit) {
  let waiting = false;

  return function () {
    if (!waiting) {
      fn();
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
