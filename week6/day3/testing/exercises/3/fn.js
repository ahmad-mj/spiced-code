module.exports = function fn(argument) {
    if (typeof argument === "string") {
        return argument.split("").reverse().join("");
    } else if (Array.isArray(arguments[0])) {
        let arr = [];
        for (let i = 0; i < arguments[0].length; i++) {
            arr.push(fn(arguments[0][i]));
        }
        return arr;
    }
    return null;
};
