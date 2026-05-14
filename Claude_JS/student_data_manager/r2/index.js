

// Todo : 1 data input
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
    renderTable()
}
render()

function renderStats() {

    const s = computeStats();
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

function computeStats() {
    const scores = students.map((s) => s.score)

    return {
        total: students.length,
        average: (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1),
        highest: Math.max(...scores),
        passing: students.filter((s) => s.score >= 60).length,
    }

}

function renderTable() {

    const tbody = document.getElementById("tableBody");
    const filtered_data = getFilteredStudents();
    console.log("Hey i am from table: ", filtered_data);

    tbody.innerHTML = filtered_data.map((s, index) => {
        const grade = getGrade(s.score);
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${s.name}</td>
            <td>${s.subject}</td>
            <td>${s.score}</td>
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
            if (sortKey === "grade") return getGrade(a.grade).localeCompare(b.score);
        });

}


function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 60) return "C";


    return "F"
}


function removeStudent(id) {
    students = students.filter((s) => s.id != id);
    render();

}




/// form add student and its number

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




///---------------------------------------
// merge
// -----------------------


let students2 = [
    { id: 1, name: "Ayesha Khan", subject: "Mathematics", score: 92 },
    { id: 2, name: "Ahmed ALI", subject: "Physics", score: 78 },
    { id: 3, name: "Malik Khan", subject: "Chemistry", score: 85 },
    { id: 4, name: "Sharma shop", subject: "Mathematics", score: 61 },
    { id: 5, name: "Islam Mia", subject: "Biology", score: 47 },
    { id: 6, name: "Tariq Hassan", subject: "Physics", score: 88 },
    { id: 7, name: "Hassan Masud", subject: "Physics", score: 98 },
    { id: 8, name: " Rahim", subject: "CSE", score: 88 },
];





function renderTable2(data) {
    if (!data) {
        alert(" data not found");
        return;
    }

    if (!Array.isArray(data)) {
        console.log("invalid data! data is not required format", data);
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


// function mergeStudents(a, b) {
//     const map = new Map();

//     [...a, ...b]
//         .filter(s => s && s.id && typeof s.score === "number")
//         .forEach(s => {
//             map.set(s.id, {
//                 ...s,
//                 name: s.name.trim() // ✅ fix spaces
//             });
//         });

//     return Array.from(map.values())
//         .sort((a, b) => a.id - b.id);
// }

function mergeStudents(a, b) {
    const studentData = new Map();

    [...a, ...b]
        .filter(s => s && s.id && typeof s.score === "number")
        .forEach((s, i) => {

            if (!s || !s.id) {
                console.warn("Invalid student:", s);
                return;
            }

            studentData.set(s.id, {
                ...s,
                name: s.name.trim()
            });
        });
    const arr = Array.from(studentData.values());

    console.log("Before sort:", arr);
    return Array.from(studentData.values())
        .sort((a, b) => b.score - a.score);
};

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

document.addEventListener("DOMContentLoaded", () => {
    const mergeBtn = document.getElementById("mergeBtn");
    const jsonBtn = document.getElementById("jsonBtn");

    if (!mergeBtn || !jsonBtn) {
        console.error("Buttons not found in DOM");
        return;
    }

    mergeBtn.addEventListener("click", () => {
        const merged = mergeStudents(students, students2);
        renderTable2(merged);
    });

    jsonBtn.addEventListener("click", () => {
        const merged = mergeStudents(students, students2);
        showJSON(merged);
    });



})


const mergedStudents = mergeStudents(students, students2);
console.log("I marge two student", mergedStudents);

function groupBySubject(data) {
    return data.reduce((acc, s) => {
        if (!acc[s.subject]) {
            acc[s.subject] = [];
        }
        acc[s.subject].push(s);
        console.log("I am group By subject=: ", acc);
        return acc;
    }, {});
}


function getAverageScores(grouped) {
    const result = {};

    for (let subject in grouped) {
        const total = grouped[subject].reduce((sum, s) => sum + s.score, 0);
        result[subject] = Math.round(total / grouped[subject].length);
    }

    return result;
}


function getTopStudents(grouped) {
    const result = {};

    for (let subject in grouped) {
        result[subject] = grouped[subject].reduce((top, s) =>
            s.score > top.score ? s : top
        );
    }

    return result;
}

function getPassFail(data) {
    let pass = 0;
    let fail = 0;

    data.forEach(s => {
        if (s.score >= 60) pass++;
        else fail++;
    });

    return { pass, fail };
}

const grouped = groupBySubject(mergedStudents);
const averages = getAverageScores(grouped);
const toppers = getTopStudents(grouped);
const stats = getPassFail(mergedStudents);

console.log("Grouped:", grouped);
console.log("Averages:", averages);
console.log("Top Students:", toppers);
console.log("Pass/Fail:", stats);


function renderAnalytics() {
    const container = document.getElementById("analytics");

    container.innerHTML = `
    <h2>📊 Analytics Dashboard</h2>

    <h3>Average Scores</h3>
    <pre>${JSON.stringify(averages, null, 2)}</pre>

    <h3>Top Students</h3>
    <pre>${JSON.stringify(toppers, null, 2)}</pre>

    <h3>Pass / Fail</h3>
    <p>Pass: ${stats.pass} | Fail: ${stats.fail}</p>
  `;
}