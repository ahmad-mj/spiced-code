(function () {
    var overlay = document.getElementById("overlayMenu");
    var sideNav = document.getElementById("sideNavMenu");
    var openMenu = document.getElementById("menu");
    var closeMenu = document.getElementById("x_menu");
    var hideMenu = document.getElementById("hideMenu");

    openMenu.addEventListener("click", function (e) {
        console.log("clicked on menu");
        overlay.classList.add("menu_js");
        sideNav.classList.add("menu_js");
        hideMenu.style.background = "rgba(0, 0, 0, 0.6)";

        e.stopPropagation();
    });

    closeMenu.addEventListener("click", function (e) {
        console.log("clicked on x");
        overlay.classList.remove("menu_js");
        sideNav.classList.remove("menu_js");
        hideMenu.style.background = "rgba(0, 0, 0, 0)";

        e.stopPropagation();
    });
    hideMenu.addEventListener("click", function (e) {
        console.log("hi i clicked in the body");
        overlay.classList.remove("menu_js");
        sideNav.classList.remove("menu_js");
        hideMenu.style.background = "rgba(0, 0, 0, 0)";

        e.stopPropagation();
    });
})();
