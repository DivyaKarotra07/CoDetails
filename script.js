// Mobile navigation menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

// Close menu after selecting a section
document.querySelectorAll("#navMenu a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("show");
  });
});

// Show message for syllabus and calendar links
document.querySelectorAll(".text-link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    alert(link.dataset.message);
  });
});

// Automatically update copyright year
document.getElementById("year").textContent = new Date().getFullYear();
