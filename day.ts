                  "DAY 22,23 OF CODING CHALLENGE"
//Question 1:Combine Strings And Numbers.
function
CombineStringAndNumber(text:string,number:number): string {
    return text + number;
}
console.log(CombineStringAndNumber("Age:",30));

//Question 2:Determine the Reminder.
function remainder(num1:number,num2:number): number {
    return num1 % num2;
}
console.log(remainder(5,2));

//Question 3:Logical AND Verification.
function checkBothTrue(val1:boolean,val2:boolean): boolean {
    return val1 && val2
}
console.log(checkBothTrue(true,false));

//Question 4:Arthmetic with Mixed Types.
function
addNumberAndString(number1:number,numberString: string) : number {
    return number1 + Number(numberString)
}
console.log(addNumberAndString(10,"5"));

//Question 5:Multiplying Decimals.
function multiplyDecimals(num1:number,num2:number): number {
    return Math.round((num1 + num2) * 100) / 100;
}
console.log(multiplyDecimals(0.1,0.2));

//Question 6:Dividing and finding the remainder.
function
divideAndRemainder(dividend:number,divisor:number): 
{quotient:number; remainder:number} {
    let quotient =
Math.floor(dividend / divisor);
  let remainder = dividend % divisor;
    return {quotient,remainder};
}
console.log(divideAndRemainder(10,3));