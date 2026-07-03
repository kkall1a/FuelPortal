/* =========================
   DARK MODE (LocalStorage)
========================= */

const darkBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}



// FUEL DATA 


const fuelData = [
    {
        company: "Gulf",
        regular: "3.45 ₾",
        premium: "3.70 ₾",
        diesel: "4.10 ₾"
    },
    {
        company: "Wissol",
        regular: "3.44 ₾",
        premium: "3.69 ₾",
        diesel: "4.08 ₾"
    },
    {
        company: "Socar",
        regular: "3.46 ₾",
        premium: "3.72 ₾",
        diesel: "4.12 ₾"
    },
    {
        company: "Rompetrol",
        regular: "3.43 ₾",
        premium: "3.68 ₾",
        diesel: "4.05 ₾"
    }
];


// LOAD TABLE (DOM MANIPULATION)


const tableBody = document.getElementById("priceTableBody");

function loadTable(data) {
    if (!tableBody) return;

    tableBody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.company}</td>
            <td>${item.regular}</td>
            <td>${item.premium}</td>
            <td>${item.diesel}</td>
        `;

        tableBody.appendChild(row);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    loadTable(fuelData);
});



// SEARCH / FILTER


const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {

        const value = e.target.value.toLowerCase();

        const filtered = fuelData.filter(item =>
            item.company.toLowerCase().includes(value)
        );

        loadTable(filtered);
    });
}




//    CONTACT FORM VALIDATION


const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("გთხოვ შეავსე ყველა ველი!");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("შეიყვანე სწორი იმეილი!");
            return;
        }

        localStorage.setItem("lastContactName", name);

        alert("შეტყობინება წარმატებით გაიგზავნა!");
        form.reset();
    });
}


const tipBtn = document.getElementById("tipBtn");
const tipText = document.getElementById("tipText");

if (tipBtn) {
    tipBtn.addEventListener("click", () => {
        const tips = [
            "შეამოწმე საბურავების წნევა.",
            "არ დააჩქარო მკვეთრად.",
            "დროულად შეცვალე ზეთი.",
            "გამორთე ძრავა ხანგრძლივი გაჩერებისას."
        ];

        const random = Math.floor(Math.random() * tips.length);
        tipText.textContent = tips[random];
    });
}

// გამოყენებულია ეიაი