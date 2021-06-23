(function () {
    var textarea = $("textarea");
    var button = $("button");

    button.click(function () {
        try {
            JSON.parse(textarea.val());
        } catch (e) {
            alert("what you wrote is NOT the SON of J😞");
        }
        JSON.parse(textarea.val());
        alert("JSON is valid🤓");
    });
})();
// {"test":"test"}
