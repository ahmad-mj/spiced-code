console.log("my script day4 is linked");

//3.Write a function called getLessThanZero
//that expects an array of numbers to be passed to it and returns a new array containing only those numbers from the array that was passed in that are less than zero.

function getLessThanZero(arr) {
    var newArray = []; //containing only numbers less than zero
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            // if the numbers sre less than zero in the first array
            newArray.push(arr[i]); // now push the array (arr[i]) with those numbers(<0) in the newArray
        }
    }
    console.log(newArray); //returning the newArray with numbers less than zero
}
getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
getLessThanZero([1, 2]); //[]

//2.Write a function that takes an array as a parameter and returns a new array containing all of the items that are in the array that was passed in but in reverse order. Unlike the reverse method that all arrays have, this function should leave the original array unchanged.

function reverseArray(array) {
    var reversedArray = [];
    for (var i = 0; i < array.length; i++) {
        reversedArray.unshift(array[i]); // the loop checks in array[i] in the reverseArray(["value1","value2"])  and add everytime 1value to the begining of the reversedArray
    }
    return reversedArray;
}
console.log(reverseArray(["This is the first", "and", "this is the third"]));


