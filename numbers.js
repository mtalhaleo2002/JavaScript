let x1 = 6;
let x2 = 2;
let x3 = x1 + x2;
let x4 = x1 - x2;
let x5 = x1 * x2;
let x6 = x1 / x2;
let x7 = x1 % x2;
console.log(x3); // Output: 8
console.log(x4); // Output: 4
console.log(x5); // Output: 12
console.log(x6); // Output: 3
console.log(x7); // Output: 0

// Number In JavaScript

function add(n1,n2){
  return n1 + n2;
}
function subtract(n1,n2){
  return n1 - n2;
}
function multiply(n1,n2){
  return n1 * n2;
}
function divide(n1,n2){
  return n1 / n2;
}
function modulus(n1,n2){
  return n1 % n2;
}
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(multiply(5, 3)); // Output: 15
console.log(divide(5, 3)); // Output: 1.666666666
console.log(modulus(5, 3)); // Output: 2

// Functions to perform arithmetic operations


let x = 1;
x++;
let y = 10;
y--;

console.log(x); // Output: 2
console.log(y); // Output: 9

let s1 = 3;
s1++;
s1 = s1 * 2;
s1--;
console.log(s1); // Output: 7

// Increment and Decrement Operators


function toFahrenheit(number){
return (number * 9/5) + 32
 }
function toCelsius(number){
return (number - 32) * 5/9
}
console.log(toFahrenheit(0)); // Output: 32
console.log(toCelsius(32)); // Output: 0

// Temperature Conversion Functions

let n1 = 7 % 2;
let n2 = 20 % 3;
console.log(n1); // Output: 1
console.log(n2); // Output: 2

function onesDigit(number){
  return number % 10;
}

console.log(onesDigit(123)); // Output: 3
console.log(onesDigit(4567)); // Output: 7

// Modulus Operator and Ones Digit Function

let xa1 = 3 + 4 * 2;
let xa2 = (3 + 4) * 2;
console.log(xa1); // Output: 11
console.log(xa2); // Output: 

function mean(n1,n2){
 return (n1 + n2)/2;
}

console.log(mean(10, 20)); // Output: 15
console.log(mean(5, 15)); // Output: 10

// Arithmetic Operations with Precedence

let y1 = Math.sqrt(9);
let y2 = Math.pow(10, 3);

console.log(y1); // Output: 3
console.log(y2); // Output: 1000

function hypotenuse(n1,n2){
 let s1 = Math.pow(n1,2);
 let s2 = Math.pow(n2,2);
 let result = s1 + s2;
 return Math.sqrt(result);
  
}

console.log(hypotenuse(3, 4)); // Output: 5
console.log(hypotenuse(5, 12)); // Output: 13
console.log(hypotenuse(8, 15)); // Output: 17

// Square Root and Power Functions

let min = Math.min(5, 7);
let max = Math.max(3, 9, 2);
console.log(min); // Output: 5
console.log(max); // Output: 9

function midrange(a,b,c){
 return (Math.min(a,b,c) + Math.max(a,b,c)) /2;
}
console.log(midrange(1, 5, 3)); // Output: 3
console.log(midrange(10, 20, 30)); // Output: 20

// 

let PiValue = Math.PI;
let eValue = Math.E;
console.log(PiValue); // Output: 3.141592653589793
console.log(eValue); // Output: 2.718281828459045

function area(number) {
 return Math.PI * number * number;
}
console.log(area(5)); // Output: 78.53981633974483
console.log(area(10)); // Output: 314.1592653589793

// Constants and Area Calculation

let a = Math.round(5.49);
let b = Math.round(4.5);
let c = Math.floor(5.99);
let d = Math.ceil(4.01);

console.log(a); // Output: 5
console.log(b); // Output: 5  
console.log(c); // Output: 5
console.log(d); // Output: 5

function round100(x) {
  return Math.round(x / 100) * 100;
}

console.log(round100(123)); // Output: 100
console.log(round100(456)); // Output: 500
console.log(round100(789)); // Output: 800

// Rounding Functions
