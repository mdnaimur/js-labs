/* -----------------------------
   Pattern 1: Tabs
------------------------------*/
document.querySelector(".tab-bar").addEventListener("click", (e) => {
  const tab = e.target.closest("[data-tab]");
  if (!tab) return;

  document
    .querySelectorAll("[data-tab]")
    .forEach((t) => t.classList.toggle("active-tab", t === tab));

  document
    .querySelectorAll("[data-panel]")
    .forEach((p) =>
      p.classList.toggle("active", p.dataset.panel === tab.dataset.tab),
    );
});

/* -----------------------------
   Pattern 2: Sortable Table
------------------------------*/
function sortTable(col, dir) {
  const tbody = document.getElementById("tableBody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  const index = col === "name" ? 0 : 1;

  rows.sort((a, b) => {
    const A = a.children[index].textContent;
    const B = b.children[index].textContent;

    if (index === 1) {
      return dir === "asc" ? A - B : B - A;
    }

    return dir === "asc" ? A.localeCompare(B) : B.localeCompare(A);
  });

  tbody.append(...rows);
}

document.querySelector("thead").addEventListener("click", (e) => {
  const th = e.target.closest("th[data-sort]");
  if (!th) return;

  const col = th.dataset.sort;
  const dir = th.dataset.dir === "asc" ? "desc" : "asc";
  th.dataset.dir = dir;

  sortTable(col, dir);
});

/* -----------------------------
   Pattern 3: Accordion
------------------------------*/
document.querySelector(".accordion").addEventListener("click", (e) => {
  const trigger = e.target.closest(".accordion__trigger");
  if (!trigger) return;

  const item = trigger.closest(".accordion__item");
  const isOpen = item.classList.contains("is-open");

  document
    .querySelectorAll(".accordion__item")
    .forEach((i) => i.classList.remove("is-open"));

  if (!isOpen) item.classList.add("is-open");
});
