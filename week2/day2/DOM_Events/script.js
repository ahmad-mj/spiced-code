// Add an event handler that makes this box center itself directly under the user's mouse pointer as it is moved across the screen.

(function () {
    var outerBox = document.getElementById("outerBox");
    var innerBox = document.getElementById("innerBox");

    function getRandomColor(color) {}
    outerBox.addEventListener("click", function () {
        console.log("clicked on outerBox");
        // outerBox.style.background = "red";
    });
    function getRandomColor(color) {}
    innerBox.addEventListener("click", function () {
        console.log("clicked on innerBox");
        // innerBox.style.background = "black";
    });
    outerBox.addEventListener("click", function (e) {
        console.log("click on outerBox works!!!");
        e.stopPropagation();
    });
    innerBox.addEventListener("click", function (e) {
        console.log("click on innerBox works!!!");
        e.stopPropagation();
    });

    var changeColor = document.getElementById("click");

    // changeColor.addEventListener("click", function () {
    //     getRandomColor();
    // });

    function getRandomColor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);

        outerBox.style.backgroundColor = bgColor;
        innerBox.style.backgroundColor = bgColor;
        changeColor.addEventListener("click", function () {
            getRandomColor();
        });
    }
})();
