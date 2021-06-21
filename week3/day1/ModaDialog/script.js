(function () {
    var overlay = document.getElementById("overlayMenu");
    var sideNav = document.getElementById("sideNavMenu");
    var openMenu = document.getElementById("menu");
    var closeMenu = document.getElementById("x_menu");
    var hideMenu = document.getElementById("hideMenu");
    var popUpOverlay = $("#modalBox_overlay");
    var popUpBox = $("#modalBox");
    var closePopUp = $(".x");

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
    sideNav.addEventListener("click", function (e) {
        e.stopPropagation();
    });
    overlay.addEventListener("click", function (e) {
        e.stopPropagation();
    });
    hideMenu.addEventListener("click", function () {
        console.log("hi i clicked in the body");
        overlay.classList.remove("menu_js");
        sideNav.classList.remove("menu_js");
        hideMenu.style.background = "rgba(0, 0, 0, 0)";
    });

    function delayOneSecond() {
        popUpBox.css({
            visibility: "visible",
        });
        popUpOverlay.css({
            visibility: "visible",
        });
    }

    setTimeout(delayOneSecond, 1000); // the delay is not working?!! investigate....

    closePopUp.on("click", function () {
        console.log("x was clicked");
        popUpBox.css({
            visibility: "hidden",
        });
        popUpOverlay.css({
            visibility: "hidden",
        });
    });
})();
