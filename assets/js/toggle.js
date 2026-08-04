function toggleAbstract(id) {

    const abs = document.getElementById(id);

    const currentDisplay = window.getComputedStyle(abs).display;

    if (currentDisplay === "none") {
        abs.style.display = "block";
    } else {
        abs.style.display = "none";
    }

}
