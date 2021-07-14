module.exports = function fn(argument) {
    if (typeof argument === "string") {
        return argument === "";
    } else {
        fn(argument);
    }
};
