// Add an event handler that makes this box center itself directly under the user's mouse pointer as it is moved across the screen.

(function () {
    var outerBox = document.getElementById("outerBox");
    var innerBox = document.getElementById("innerBox");

    function getRandomColor(color) {}
    outerBox.addEventListener("click", function () {
        console.log("clicked on outerBox");
        outerBox.style.background = "red";
    });
    function getRandomColor(color) {}
    innerBox.addEventListener("click", function () {
        console.log("clicked on innerBox");
        innerBox.style.background = "black";
    });
    outerBox.addEventListener("click", function (e) {
        console.log("click on outerBox works!!!");
        e.stopPropagation();
    });
    innerBox.addEventListener("click", function (e) {
        console.log("click on innerBox works!!!");
        e.stopPropagation();
    });

    document.addEventListener("click", function (e) {
        if (this.onclick) {
            var r = getRandomColor(256);
            var g = getRandomColor(256);
            var b = getRandomColor(256);

            // rgb(0, 1, 2);
            var randomColor = "rgb(" + r + "," + g + "," + b + ")";
            console.log(randomColor);
            outerBox.style.backgroundColor = randomColor;
            innerBox.style.backgroundColor = randomColor;
        }
    });
})();
