console.log("i am dashboard")

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

let students = [
    { id: 1, name: "Ayesha Khan", subject: "Mathematics", score: 92 },
    { id: 2, name: "Bilal Ahmed", subject: "Physics", score: 78 },
    { id: 3, name: "Sara Malik", subject: "Chemistry", score: 85 },
    { id: 4, name: "Rahul Sharma", subject: "Mathematics", score: 61 },
    { id: 5, name: "Nadia Islam", subject: "Biology", score: 47 },
    { id: 6, name: "Tariq Hassan", subject: "Physics", score: 88 },
];


function renderDashboard(data) {

    const totalStudentCardCount = document.getElementById('totalStudents');
    const totalStudentPass = document.getElementById('passCount');
    const totalStudentFail = document.getElementById('failCount');

    const totalStudent = data.length;
    const pass = data.filter(s => s.score >= 60).length;
    const fail = totalStudent - pass;


    console.log(totalStudentCardCount);
    totalStudentCardCount.textContent = totalStudent;
    totalStudentPass.textContent = pass;
    totalStudentFail.textContent = fail;

    // 🔹 Group by subject
    const grouped = data.reduce((acc, s) => {
        if (!acc[s.subject]) acc[s.subject] = [];
        acc[s.subject].push(s);
        return acc;
    }, {});

    const avgContainer = document.getElementById("averages");

    if (!avgContainer) {
        console.log(" avg container not get in")
    }
    avgContainer.innerHTML = "";

    for (let subject in grouped) {
        const avg =
            grouped[subject].reduce((sum, s) => sum + s.score, 0) /
            grouped[subject].length;
        const div = document.createElement("div");
        div.innerHTML =
            `
        <h4>${subject}</h4>
        <p>${Math.round(avg)}</p>
        `;
        avgContainer.appendChild(div);
    };

    const table = document.getElementById("topStudentsTable");

    table.innerHTML = Object.keys(grouped)
        .map(subject => {
            const top = grouped[subject].reduce((a, b) =>
                b.score > a.score ? b : a
            );

            return `
        <tr>
          <td>${subject}</td>
          <td>${top.name}</td>
          <td>${top.score}</td>
        </tr>
      `;
        })
        .join("");

}



const merged = mergeStudents(students, students2);
renderDashboard(merged);
// renderDashboard(students);


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
