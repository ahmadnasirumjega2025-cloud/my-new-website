const whatsappNumber = "2347015410279";

const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn?.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", navMenu.classList.contains("active"));
});

document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        navMenu.classList.remove("active");
        menuBtn?.setAttribute("aria-expanded", "false");
        document.querySelectorAll("nav a").forEach(function (item) {
            item.classList.remove("active");
        });
        link.classList.add("active");
        const target = document.querySelector(link.getAttribute("href"));
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", link.getAttribute("href"));
    });
});

function requestQuote(serviceName) {
    const message = "Hello Real Mindau Online Business Services.\n\nI am interested in: " + serviceName + ".\n\nI would like to request a quote.";
    window.open("https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message), "_blank", "noopener");
}

function openWhatsApp() {
    const message = "Hello Real Mindau Online Business Services, I would like to make an enquiry.";
    window.open("https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message), "_blank", "noopener");
}

function sendEmail() {
    const message = "Hello Real Mindau Online Business Services.\n\nHere are my project details:";
    window.open("https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message), "_blank", "noopener");
}

function callUs() {
    window.location.href = "tel:+2347015410279";
}

function showPage(pageName) {
    document.querySelectorAll(".page").forEach(function (page) {
        page.classList.remove("active");
    });
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) selectedPage.classList.add("active");
    navMenu?.classList.remove("active");
}
