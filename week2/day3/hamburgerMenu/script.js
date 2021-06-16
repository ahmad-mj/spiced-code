(function () {
    var overlay = document.getElementById("overlayMenu");
    var openMenu = document.getElementById("menu");
    var closeMenu = document.getElementById("x_menu");

    openMenu.addEventListener("click", function () {
        console.log("clicked on menu");
        overlay.classList.add("menu_js");
    });

    closeMenu.addEventListener("click", function () {
        console.log("clicked on x");
        overlay.classList.remove("menu_js");
    });
})();
