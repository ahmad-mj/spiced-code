(function () {
    var dogs = document.querySelectorAll("#dogs img");
    var current = 0;
    var next = 1;
    var dots = document.querySelectorAll(".dot");
    console.log("dots: ", dots);

    document.body.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
        }
    });
    setTimeout(moveDogs, 2000);

    function moveDogs() {
        dogs[current].classList.remove("onscreen");
        dogs[current].classList.add("exit");
        console.log(current + " is current");

        current = next;
        console.log(current + " is the NEW current");
        next++;
        if (next == dogs.length) {
            next = 0;
        }
        dogs[current].classList.add("onscreen");

        console.log(next + " is the next");
        setTimeout(moveDogs, 2000);
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", clickHandler(i));
    }

    function clickHandler(i) {
        return function () {
            console.log("clicked on: ", i);
        };
    }
})();
