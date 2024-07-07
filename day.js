"DAY 22,23 OF CODING CHALLENGE";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question 1:Combine Strings And Numbers.
function CombineStringAndNumber(text, number) {
    return text + number;
}
console.log(CombineStringAndNumber("Age:", 30));
//Question 2:Determine the Reminder.
function remainder(num1, num2) {
    return num1 % num2;
}
console.log(remainder(5, 2));
//Question 3:Logical AND Verification.
function checkBothTrue(val1, val2) {
    return val1 && val2;
}
console.log(checkBothTrue(true, false));
//Question 4:Arthmetic with Mixed Types.
function addNumberAndString(number1, numberString) {
    return number1 + Number(numberString);
}
console.log(addNumberAndString(10, "5"));
//Question 5:Multiplying Decimals.
function multiplyDecimals(num1, num2) {
    return Math.round((num1 + num2) * 100) / 100;
}
console.log(multiplyDecimals(0.1, 0.2));
//Question 6:Dividing and finding the remainder.
function divideAndRemainder(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return { quotient, remainder };
}
console.log(divideAndRemainder(10, 3));
