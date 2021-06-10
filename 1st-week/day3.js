//Exercise1

console.log("yes you script is linked and you can write logic here");
//(var i = 2; i < arguments.length; i++) this wont take the first 2 indexes 0,1 in the likearray
function fnSum() {
    var sum = 0; // this will increase the fnSum 16,31,331

    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}
console.log(fnSum(5, 10)); //15
console.log(fnSum(5, 10, 15)); //30;

console.log(fnSum(5, 10, 15, 100, 200)); //330
