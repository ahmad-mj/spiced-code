console.log("my script day5 is linked");

function invertCase(str) {
    var string = "Can you";

    for (var i = 0; i < str.length; i++) {
        var newStr = str[i];
        if (str[i] === newStr.toUpperCase()) {
            string += newStr.toLowerCase();
        } else {
            string += newStr.toUpperCase();
        }
    }
    return string;
}
