console.log("I am working");

let students = [
    { id: 1, name: "Ayesha Khan", subject: "Mathematics", score: 92 },
    { id: 2, name: "Bilal Ahmed", subject: "Physics", score: 78 },
    { id: 3, name: "Sara Malik", subject: "Chemistry", score: 85 },
    { id: 4, name: "Rahul Sharma", subject: "Mathematics", score: 61 },
    { id: 5, name: "Nadia Islam", subject: "Biology", score: 47 },
    { id: 6, name: "Tariq Hassan", subject: "Physics", score: 88 },
];



function render() {
    renderStats();
    renderTable();
}
render()


function computerStats() {
    const scores = students.map((s) => s.score);
    return {
        total: students.length,
        average: (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1),
        highest: Math.max(...scores),
        passing: students.filter((s) => s.scores >= 60).length,
    };
}

function renderStats() {

    const s = computerStats();
    console.log(" i am inside render compute:", s);
    const stats = document.getElementById("stats");
    stats.innerHTML = `
    
    <div class="stat-card">
     <stat class="value"> ${s.total}</stat>
     <div class="stat-level">Total Students</div>
    </div>

      
    <div class="stat-card">
     <stat class="value"> ${s.average}</stat>
     <div class="stat-level">Averge Score</div>
    </div>

      
    <div class="stat-card">
     <stat class="value"> ${s.highest}</stat>
     <div class="stat-level">Highest Score</div>
    </div>

      
    <div class="stat-card">
     <stat class="value"> ${s.passing}</stat>
     <div class="stat-level">Passing</div>
    </div>
    `
}


function toggleForm() {
    document.getElementById("addForm").classList.toggle("open");
}


function addStudent() {

    const name = document.getElementById("newName").value.trim();
    const score = parseInt(document.getElementById("newScore").value);
    const subject = document.getElementById("newSubject").value.trim();


    if (!name || isNaN(score) || score < 0 || score > 100 || !subject) {
        alert("Please fill in all fields coorectly.");
        return;
    }

    const newId = students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;

    students.push({ id: newId, name, subject, score });

    // Clear form
    document.getElementById("newName").value = "";
    document.getElementById("newScore").value = "";
    document.getElementById("newSubject").value = "";
    toggleForm();
    render();
}


function renderTable() {

    const tbody = document.getElementById("tableBody");
    const filtered_data = getFilteredStudents();
    console.log(filtered_data);

    tbody.innerHTML = filtered_data
        .map((s, index) => {
            const grade = getGrade(s.score);
            return `
            
            <tr>
             <td> ${index + 1} </td>
             <td> ${s.name} </td>
             <td> ${s.subject} </td>
             <td> ${s.score} </td>
             <td> <span class ="badge grade-${grade}" > ${grade}</span></td>
             <td> <button onclick ="removeStudent(${s.id})" style="color:#dc2626; border:none; background:none; cursor:pointer; font-size:18px" title="Remove">x</button> </td>

            </tr>
            `
        }).join("");

}

function getFilteredStudents() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const grade = document.getElementById("filterGrade").value;
    const sortKey = document.getElementById("sortBy").value;

    return [...students]
        .filter((s) => s.name.toLowerCase().includes(search))
        .filter((s) => (grade ? getGrade(s.score) === grade : true))
        .sort((a, b) => {
            if (sortKey === "name") return a.name.localeCompare(b.name);
            if (sortKey === "score") return b.score - a.score;
            if (sortKey == "grade") return getGrade(a.score).localeCompare(b.score);
        });
}

function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 60) return "C";
    return "F";
}

function removeStudent(id) {
    students = students.filter((s) => s.id != id);
    render();
}


/// student manage


const arr1 = [
    { id: 1, name: "Ayesha", score: 85 },
    { id: 2, name: "Bilal", score: 90 }
];

const arr2 = [
    { id: 2, name: "Bilal", score: 95 }, // duplicate
    { id: 3, name: "Sara", score: 78 }
];

// 🔹 Merge + deduplicate + sort
function mergeStudents(a, b) {
    const map = new Map();

    [...a, ...b].forEach(s => {
        map.set(s.id, s); // keeps latest
    });

    return Array.from(map.values())
        .sort((a, b) => b.score - a.score);
}
// 🔹 Render table
function renderTable(data) {
    if (!data) {
        console.error("No data provided to renderTable");
        return;
    }

    if (!Array.isArray(data)) {
        console.error("Invalid data:", data);
        return;
    }


    const tbody = document.getElementById("tableBody2");

    if (!tbody) {
        console.error("tableBody2 not found in DOM");
        return;
    }

    tbody.innerHTML = data.map(s => `
    <tr>
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.score}</td>
    </tr>
  `).join("");
}


// 🔹 JSON convert
function showJSON(data) {

    const jsonBox = document.getElementById("jsonBox");

    if (!jsonBox) {
        console.error("jsonBox not found");
        return;
    }


    const json = JSON.stringify(data, null, 2);
    document.getElementById("jsonBox").textContent = json;

    const parsed = JSON.parse(json);
    console.log("First student name:", parsed[0].name);
}
// 🔹 Events




// 🔹 Safe DOM Load
document.addEventListener("DOMContentLoaded", () => {

    const mergeBtn = document.getElementById("mergeBtn");
    const jsonBtn = document.getElementById("jsonBtn");

    if (!mergeBtn || !jsonBtn) {
        console.error("Buttons not found in DOM");
        return;
    }

    mergeBtn.addEventListener("click", () => {
        const merged = mergeStudents(arr1, arr2);
        renderTable(merged);
    });

    jsonBtn.addEventListener("click", () => {
        const merged = mergeStudents(arr1, arr2);
        showJSON(merged);
    });

});




// product Manaement

const orders = [
    { id: 1, product: "Laptop", category: "electronics", price: 999, status: "completed" },
    { id: 2, product: "T-Shirt", category: "clothing", price: 29, status: "completed" },
    { id: 3, product: "Phone", category: "electronics", price: 699, status: "pending" },
    { id: 4, product: "Tablet", category: "electronics", price: 499, status: "completed" },
    { id: 5, product: "Jeans", category: "clothing", price: 59, status: "cancelled" },
];


// calculate revenue 

function render2() {
    renderRevenue();
    renderTableProduct();
}
render2();


function calculateRevenue() {
    return orders
        .filter(o =>
            o.status === "completed" &&
            o.category === "electronics" &&
            o.price > 100
        )
        .reduce((sum, o) => sum + o.price, 0);
}

// 🔹 Render revenue
function renderRevenue() {
    const total = calculateRevenue();
    document.getElementById("revenue").textContent = "$" + total;
}

function renderTableProduct() {
    const table = document.getElementById("ordersTable");

    table.innerHTML = "";

    orders.forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.product}</td>
      <td>${order.category}</td>
      <td>$${order.price}</td>
      <td class="${order.status}">${order.status}</td>
    `;

        table.appendChild(row);
    });

}