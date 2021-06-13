//ex.1
// function logType(spiced) {
//     if (typeof spiced === "undefined") {
//         console.log("undefined!");
//     } else if (spiced === null) {
//         console.log("null!");
//     } else if (Number.isNaN(spiced)) {
//         console.log("not a number!");
//     } else if (typeof spiced === "string") {
//         console.log("string!");
//     } else if (typeof spiced === "boolean") {
//         console.log("boolen!");
//     } else if (typeof spiced === "bigint") {
//         console.log("bigint!");
//     } else if (typeof spiced === "function") {
//         console.log("function!");
//     } else if (typeof spiced === "object") {
//         console.log("object!");
//     } else if (Array.isArray(spiced)) {
//         console.log("Array!");
//     } else if (typeof spiced === "number") {
//         //  putting this statement before NAN statement wouldn't work?!
//         console.log("number!");
//     } else {
//         console.log("I have ni idea!");
//     }
// }
// logType(undefined);
// logType(null);
// logType(34);
// logType("pizza" / 50);
// logType("hi");
// logType(true);
// logType(3n);
// logType(function () {});
// logType({});
// logType([]);
function logType(data) {
    if (Array.isArray(data)) {
        console.log("array!");
    } else if (data === null) {
        console.log("null!");
    } else if (Number.isNaN(data)) {
        console.log("Not a number!");
    } else if (typeof data === "number") {
        console.log("number!");
    } else if (typeof data === "object") {
        console.log("object!");
    } else if (typeof data === "undefined") {
        console.log("undefined!");
    } else if (typeof data === "string") {
        console.log("string!");
    } else if (typeof data === "boolean") {
        console.log("boolean!");
    } else if (typeof data === "bigint") {
        console.log("bigint!");
    } else if (typeof data === "function") {
        console.log("function!");
    } else {
        console.log("I have no idea!");
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

//ex.2

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var c in a) {
    var d = a[c];
    b[d] = c;
}
console.log(b);

//ex.3
var countdwon = 11;
while (countdwon > 1) {
    countdwon--;
    console.log(countdwon);
}
console.log("this is a countdown");

//var.2
// var count = 0;
// for (var i = 10; i > count; i--) {
//     console.log(":", i);
// }
