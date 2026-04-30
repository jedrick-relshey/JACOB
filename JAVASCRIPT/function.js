function smoothscroll(targetId) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/* ===== Function of Hamberder ===== */

const hamberger = document.getElementById("hamberger");
const navMenu = document.querySelector(".nav-menu");

hamberger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});