//ex.1
function logType(spiced) {
    if (typeof spiced === "undefined") {
        console.log("undefined!");
    } else if (spiced === null) {
        console.log("null!");
    } else if (Number.isNaN(spiced)) {
        console.log("not a number!");
    } else if (typeof spiced === "string") {
        console.log("string!");
    } else if (typeof spiced === "boolean") {
        console.log("boolen!");
    } else if (typeof spiced === "bigint") {
        console.log("bigint!");
    } else if (typeof spiced === "function") {
        console.log("function!");
    } else if (typeof spiced === "object") {
        console.log("object!");
    } else if (Array.isArray(spiced)) {
        console.log("Array!");
    } else if (typeof spiced === "number") {
        //  putting this statement before NAN statement wouldn't work?!
        console.log("number!");
    } else {
        console.log("I have ni idea!");
    }
}
logType(undefined);
logType(null);
logType(34);
logType("pizza" / 50);
logType("hi");
logType(true);
logType(3n);
logType(function () {});
logType({});
logType([]);

//ex.3
var countdwon = 11;
while (countdwon > 1) {
    countdwon--;
    console.log(countdwon);
}
console.log("this is a countdown");

//ex.2

// var a = {
//     Berlin: "Germany",
//     Paris: "France",
//     "New York": "USA",
// };

// var b = {};
// function swap(obj) {
//     for (var prop in a) {
//
//     }
//
