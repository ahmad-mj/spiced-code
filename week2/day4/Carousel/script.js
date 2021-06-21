console.log("script is linked");
(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var current = 0;
    var next = 1;

    document.body.addEventListener("transtionend", function (e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
        }
    });
    setTimeout(moveKitties, 3000);

    function moveKitties() {
        console.log(current + " is current");

        current = next;
        console.log(current + " is the New current");
        next++;
        if (next == kitties.length) {
            next = 0;
        }
        console.log(next + "is the new next");
        setTimeout(moveKitties, 3000);
    }
})();
