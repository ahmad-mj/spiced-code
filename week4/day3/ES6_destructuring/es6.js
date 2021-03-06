//Exercise1
const myArray = [1, 2, 3, 4, 5];
const reverse = (arr) => {
    [...arr].reverse();
};
reverse(myArray); //[5, 4, 3, 2, 1];
myArray; //[1, 2, 3, 4, 5];

//Exercise2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const newArray = (arr1, arr2) => {
    [...arr1, ...arr2];
};

newArray(arr1, arr2);
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1;
//[1, 2, 3, 4, 5];
arr2;
//[6, 7, 8, 9, 10];

//Exercise3
const logInfo = ({ name, country, population: numPeople }) => {
    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
};
logInfo({ name: "Marseille", country: "France", population: 861635 });

//Exercise4
// var getNameAndCountry = function(city) {
//     return [city.name, city.country];
// };
//  var getRelocatedCity = function(){}
