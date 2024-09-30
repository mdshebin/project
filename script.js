// Add a script for smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    let index = 0;

    window.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            index++;
        } else {
            index--;
        }

        if (index < 0) {
            index = 0;
        } else if (index >= sections.length) {
            index = sections.length - 1;
        }

        sections[index].scrollIntoView({ behavior: "smooth" });
    });
});
