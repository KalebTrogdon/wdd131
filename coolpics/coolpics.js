document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.add("hide");

    menuButton.addEventListener("click", () => {
        navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
    });

function handleResize() {
    if (window.innerWidth > 1000) {
        navLinks.classList.remove("hide"); 
    } else {
        navLinks.classList.add("hide"); 
    }
}

    handleResize();
    window.addEventListener("resize", handleResize);
});

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
          </div>`;
}

function viewHandler(event) {
    if (event.target.tagName === "IMG") {
        let imgSrc = event.target.src.replace("norris-sm.jpeg", "norris-full.jpeg");
        const imgAlt = event.target.alt;

        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, imgAlt));

        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);