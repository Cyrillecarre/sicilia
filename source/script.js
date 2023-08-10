window.addEventListener("scroll", function () {
    var menu = document.querySelector(".mainMenu");
    if (this.window.scrollY > 350) {
        menu.classList.add("mainMenuAbsolute");
    } else {
        menu.classList.remove("mainMenuAbsolute");
    }
});
