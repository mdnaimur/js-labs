console.log("I am working ");
// DATA — our core dataset
let students = [
    { id: 1, name: "Ayesha Khan", subject: "Mathematics", score: 92 },
    { id: 2, name: "Bilal Ahmed", subject: "Physics", score: 78 },
    { id: 3, name: "Sara Malik", subject: "Chemistry", score: 85 },
    { id: 4, name: "Rahul Sharma", subject: "Mathematics", score: 61 },
    { id: 5, name: "Nadia Islam", subject: "Biology", score: 47 },
    { id: 6, name: "Tariq Hassan", subject: "Physics", score: 88 },
];

function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 75) return "B";
    if (score >= 60) return "C";
    return "F";
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
            if ((sortKey === "grade")) return getGrade(a.score).localeCompare(getGrade(b.score));
        });
}

function computeStats() {
    const scores = students.map((s) => s.score);
    console.log(scores);

    return {
        total: students.length,
        average: (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1),
        highest: Math.max(...scores),
        passing: students.filter((s) => s.scores >= 60).length,
    };
}

function render() {
    renderStats();
    renderTable();
}

function renderStats() {
    const s = computeStats();
    document.getElementById("stats").innerHTML = `
    <div class = "stat-card">
        <div class="stat-value">  ${s.total} </div>
        <div class="stat-level">
                Total Students
        </div>
    </div>
        <div class="stat-card">
            <div class="stat-value">${s.average}</div>
            <div class="stat-label">Average Score</div>
        </div>

        <div class="stat-card">
            <div class="stat-value">${s.highest}</div>
            <div class="stat-label">Highest Score</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${s.passing}</div>
            <div class="stat-label">Passing</div>
        </div>
    `;
}

function renderTable() {
    const filtered = getFilteredStudents();
    const tbody = document.getElementById("tableBody");
    console.log("Filtered:", filtered);

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#999;padding:2rem;">No students found.</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered
        .map((s, index) => {
            const grade = getGrade(s.score);
            return `
    <tr>
        <td> ${index + 1}</td>
          <td>${s.name}</td>
            <td>${s.subject}</td>
            <td>${s.score}</td>
            <td><span class="badge grade-${grade}">${grade}</span></td>
            <td><button onclick="removeStudent(${s.id})" style="color:#dc2626;border:none;background:none;cursor:pointer;font-size:18px;" title="Remove">×</button></td>
    </tr>
    `;
        })
        .join("");
}

function removeStudent(id) {
    students = students.filter((s) => s.id !== id);
    render();
}

function toggleForm() {
    document.getElementById("addForm").classList.toggle("open");
}

function addStudent() {
    const name = document.getElementById("newName").value.trim();
    const score = parseInt(document.getElementById("newScore").value);
    const subject = document.getElementById("newSubject").value.trim();

    if (!name || isNaN(score) || score < 0 || score > 100 || !subject) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const newId =
        students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;

    students.push({ id: newId, name, subject, score });

    // Clear form
    document.getElementById("newName").value = "";
    document.getElementById("newScore").value = "";
    document.getElementById("newSubject").value = "";
    toggleForm();
    render();
}


render();
