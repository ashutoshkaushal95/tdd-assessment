// stringCalculator.test.js
const add = require("./stringCalculator.js");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself for a single number input", () => {
  expect(add("1")).toBe(1);
});

test("returns the sum of two comma-separated numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("returns the sum of an unknown amount of comma-separated numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("handles newlines as delimiters between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});
