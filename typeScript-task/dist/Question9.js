"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
//addition function
function add(num1, num2) {
    return num1 + num2;
}
//subtraction function
function subtract(num1, num2) {
    return num1 - num2;
}
//multiplication function
function multiply(num1, num2) {
    return num1 * num2;
}
//division function
function divide(num1, num2) {
    if (num2 == 0) {
        throw new Error("Division by zero is not allowed");
    }
    return num1 / num2;
}
//# sourceMappingURL=Question9.js.map