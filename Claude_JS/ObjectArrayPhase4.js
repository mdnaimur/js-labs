// const student = {
//   name: "Ayesha Khan",
//   age: 22,
//   grade: "A",
//   isEnrolled: true,
//   address: {
//     // nested object
//     city: "Dhaka",
//     country: "Bangladesh",
//   },
// };

// console.log(student.name);
// console.log(student["age"]);
// console.log(student.address.city);
// const field = "grade";
// console.log(student[field]);

const student = { name: "Ayesha", grade: "A" };

// Add a new property
student.email = "ayesha@example.com";

// Update existing property
student.grade = "A+";

console.log(student);
// Delete a property
delete student.email;

console.log(student); // { name: "Ayesha", grade: "A+" }

const student1 = { name: "Ayesha" };
student1.name = "Sara"; // allowed — modifying the object
console.log(student1);
// student1 = { name: "Sara" }; // TypeError! — reassigning the variable

console.log("___________".repeat(10));

const bankAccount = {
  owner: "Rahul",
  balance: 5000,

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
  },

  getStatement() {
    return `Account owner: ${this.owner} | Balance: ${this.balance}`;
  },
};

bankAccount.deposit(1000); // Deposited 1000. New balance: 6000
bankAccount.withdraw(2000); // Withdrew 2000. New balance: 4000
console.log(bankAccount.getStatement()); // Account owner: Rahul | Balance: 4000

console.log("\n" + "═".repeat(50));
console.log("🔍 DEBUG SEPARATOR");
console.log("═".repeat(50));

const user = { name: "Sara", age: 28, city: "Chittagong", role: "admin" };

// Destructuring — pull out properties into variables
const { name, age } = user;
console.log(name); // "Sara"
console.log(age); // 28

// Rename while destructuring
const { name: fullName, role: userRole } = user;
console.log(fullName); // "Sara"

// Default values while destructuring
const { theme = "light" } = user; // user has no theme, so default is used
console.log(theme); // "light"

// Spread operator — copy/merge objects
const updatedUser = { ...user, age: 29, city: "Dhaka" };
console.log(updatedUser);
// { name: "Sara", age: 29, city: "Dhaka", role: "admin" }
// Original user is unchanged — this is immutable update pattern used in React

console.log("\n" + "═".repeat(50));
console.log("🔍 DEBUG SEPARATOR");
console.log("═".repeat(50));

const scores = [95, 87, 72, 90, 65];

// Accessing items
console.log(scores[0]); // 95  — first item
console.log(scores[scores.length - 1]); // 65  — last item

// Adding and removing
scores.push(88); // add to end    → [95, 87, 72, 90, 65, 88]
scores.unshift(100); // add to front  → [100, 95, 87, 72, 90, 65, 88]
scores.pop(); // remove last   → [100, 95, 87, 72, 90, 65]
scores.shift(); // remove first  → [95, 87, 72, 90, 65]

// Finding things
console.log(scores.includes(90)); // true
console.log(scores.indexOf(72)); // 2
console.log(scores.indexOf(999)); // -1 (not found)

console.log("\n" + "═".repeat(50));
console.log("🔍 DEBUG SEPARATOR");
console.log("═".repeat(50));

const products = [
  { id: 1, name: "Laptop", price: 999, category: "electronics", inStock: true },
  { id: 2, name: "T-Shirt", price: 29, category: "clothing", inStock: true },
  { id: 3, name: "Phone", price: 699, category: "electronics", inStock: false },
  { id: 4, name: "Jeans", price: 59, category: "clothing", inStock: true },
  { id: 5, name: "Tablet", price: 499, category: "electronics", inStock: true },
];

// Returns a NEW array — never mutates the original
const inStockItems = products.filter((product) => product.inStock);
// [{Laptop}, {T-Shirt}, {Jeans}, {Tablet}]

console.log("\n\n inStockItems", inStockItems);

const electronics = products.filter((p) => p.category === "electronics");
// [{Laptop}, {Phone}, {Tablet}]
console.log("\n\n electronics filter by category", electronics);
const affordable = products.filter((p) => p.price < 100 && p.inStock);
// [{T-Shirt}, {Jeans}]

console.log("\n\n affordable filter by price and isStock", affordable);

// Returns a new array of the same length — every item transformed
const names = products.map((p) => p.name);
// ["Laptop", "T-Shirt", "Phone", "Jeans", "Tablet"]

console.log("\n\n names map by ", names);

const withDiscount = products.map((p) => ({
  ...p,
  discountedPrice: (p.price * 0.9).toFixed(2),
}));
// Each product now has a discountedPrice property added

console.log("\n\n withDiscount map by ", withDiscount);

console.log("\n" + "═".repeat(50));
console.log("🔍 DEBUG SEPARATOR ===  Reduce ");
console.log("═".repeat(50));
// accumulator starts at 0, adds each price
const totalValue = products.reduce((total, p) => total + p.price, 0);
console.log(totalValue); // 2285

// Count items per category
const categoryCounts = products.reduce((counts, p) => {
  counts[p.category] = (counts[p.category] ?? 0) + 1;
  return counts;
}, {});

console.log("\n\n categoryCounts map by ", categoryCounts);

console.log("\n" + "═".repeat(50));
console.log("🔍 DEBUG SEPARATOR ===  find ");
console.log("═".repeat(50));

// Returns the item itself (or undefined if not found)
const laptop = products.find((p) => p.name === "Laptop");
console.log(laptop); // { id: 1, name: "Laptop", price: 999, ... }

const cheap = products.find((p) => p.price < 50);
console.log(cheap); // { id: 2, name: "T-Shirt", ... }

console.log("\n" + "═".repeat(50));
console.log("🔍 DEBUG SEPARATOR ===  sort ");
console.log("═".repeat(50));

// IMPORTANT: always pass a compare function for numbers
const byPrice = [...products].sort((a, b) => a.price - b.price);
// Cheapest first: [T-Shirt, Jeans, Tablet, Phone, Laptop]
console.log("\n\n byPrice sort by ", byPrice);
const byPriceDesc = [...products].sort((a, b) => b.price - a.price);
// Most expensive first
console.log("\n\n byPriceDesc sort  by ", byPriceDesc);
// Alphabetical sort
const byName = [...products].sort((a, b) => a.name.localeCompare(b.name));
console.log("\n\n byName sort by ", byName);

// Real query: "total value of in-stock electronics, sorted by price"
const result = products
  .filter((p) => p.inStock && p.category === "electronics")
  .sort((a, b) => a.price - b.price)
  .map((p) => `${p.name}: $${p.price}`);

console.log(result);
// ["Tablet: $499", "Laptop: $999"]

console.log("\n".repeat(10) + "═".repeat(50));
console.log("🔍 DEBUG SEPARATOR ===  JSON ");
console.log("═".repeat(50));

const student10 = {
  name: "Bilal",
  grades: [90, 85, 92],
  address: { city: "Dhaka" },
};

// Convert JS object → JSON string (to send to a server)
const jsonString = JSON.stringify(student10);
console.log(jsonString);
// '{"name":"Bilal","grades":[90,85,92],"address":{"city":"Dhaka"}}'
console.log(typeof jsonString); // "string"

// Convert JSON string → JS object (when you receive from a server)
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // "Bilal"
console.log(parsed.grades[0]); // 90

// Pretty print JSON (useful for debugging)
console.log(JSON.stringify(student10, null, 2));
