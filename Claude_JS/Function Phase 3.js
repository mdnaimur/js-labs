const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const truncate = (str, maxLength = 50) =>
  str.length > maxLength ? str.slice(0, maxLength) + "...." : str;

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g);

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const formatCurrency = (amount, currency = "USD") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
    amount,
  );

// Validation Utlities

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPassword = (password) =>
  password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);

const unique = (arr) => [...new Set(arr)];

const groupBy = (arr, key) =>
  arr.reduce((groups, item) => {
    const group = item[key];
    groups[group] = groups[group] ?? [];
    groups[group].push(item);
    return groups;
  }, {});

// const groupBy = (arr, key) => {
//   console.log("Input array:", arr);
//   console.log("Grouping key:", key);

//   return arr.reduce((groups, item, index) => {
//     console.log(`\n--- Iteration ${index} ---`);
//     console.log("Current item:", item);

//     const group = item[key];
//     console.log(`Value of item[${key}]:`, group);

//     console.log("Groups before update:", groups);

//     groups[group] = groups[group] ?? [];
//     console.log(`Initialized groups[${group}] if not exists:`, groups[group]);

//     groups[group].push(item);
//     console.log(`After pushing item into groups[${group}]:`, groups[group]);

//     console.log("Groups after update:", groups);

//     return groups;
//   }, {});
// };

// function groupBy(arr, key) {
//   const groups = {};

//   for (let item of arr) {
//     const group = item[key];

//     if (!groups[group]) {
//       groups[group] = [];
//     }

//     groups[group].push(item);
//   }

//   return groups;
// }

const students = [
  { name: "Ayesha", grade: "A" },
  { name: "Bilal", grade: "B" },
  { name: "Sara", grade: "A" },
];

console.log(groupBy(students, "grade"));

// const users = [
//   { name: "Naim", role: "admin" },
//   { name: "Rahim", role: "user" },
//   { name: "Karim", role: "admin" },
// ];

// console.log(groupBy(users, "role"));

console.log(capitalize("hello world"));

console.log(truncate("This is a long title that goes on forever", 20));

console.log(slugify("Hello World! My Post"));

console.log(clamp(150, 0, 100));
console.log(clamp(-10, 0, 100));
console.log(formatCurrency(1999.5));
console.log(formatCurrency(1999.5, "EUR"));
console.log(isValidEmail("user@example.com"));
console.log(isValidEmail("not-an-email"));
console.log(isValidPassword("Secure123"));
console.log(isValidPassword("weak"));
console.log(unique([1, 2, 2, 3, 3, 4]));
