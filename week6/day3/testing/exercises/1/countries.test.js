const countries = require("./countries");

test("empty string, it returns an empty array", () => {
    expect(countries.find("")).toEqual([]);
});
test("array length is 4", () => {
    expect(countries.find("A").length).toBe(4);
});

test("case insensitive", () => {
    expect(countries.find("zIMbabwe")).toEqual(["Zimbabwe"]);
});

test("If there are no matching countries, an empty array is returned", () => {
    expect(countries.find("qjdqpjqd")).toEqual([]);
});
