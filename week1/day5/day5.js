console.log("my script day5 is linked");

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

function Square(size) {
    this.width = size;
    this.height = size;
}
Square.prototype.getArea = function () {
    return this.width * this.height;
};

Square.prototype = new Rectangle();
var square = new Square(4);
square.getArea(); //16

var rect = new Rectangle(4, 5);
rect.getArea(); //20

function invertCase(str) {
    var string = " ";
    for (var character of str) {
        if (character === character.toUpperCase()) {
            string += character.toLowerCase();
        } else {
            string += character.toUpperCase();
        }
    }
    return string;
}
invertCase("i'm small & I'M BIG");
