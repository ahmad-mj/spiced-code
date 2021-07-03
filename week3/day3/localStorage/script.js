console.log("my script and jQ is linked", $);

(function () {
    var textArea = $("textarea");
    try {
        textArea.val(localStorage.getItem("userInput"));
    } catch (e) {}
    textArea.input(function (e) {
        try {
            localStorage.setItem("userInput", textArea.val());
        } catch (e) {}
    });
})();
