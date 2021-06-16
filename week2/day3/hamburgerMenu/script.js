(function () {
    var overlay = document.getElementsByClassName("overlay-menu");
    var openMenu = document.getElementsByClassName("on_menu");
    var closeMenu = document.getElementsByClassName("x_menu");

    openMenu.addEventListener("click", function () {
        overlay.classList.add("menu_js");
        console.log("clicked on menu");
    });

    closeMenu.addEventListener("click", function () {
        overlay.classList.remove("menu_js");
    });
})();
