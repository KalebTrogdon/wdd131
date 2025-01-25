// JavaScript to handle the mobile menu
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    menuButton.addEventListener("click", () => {
        navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
    });
});
