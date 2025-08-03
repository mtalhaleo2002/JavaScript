function praise(name) {
  return name + " is great!";
}
console.log(praise("JavaScript"));

function greet(name) {
  return "Hello " + name + "!";
}

console.log(greet("Ada"));
console.log(greet("Grace"));

// Strings in JavaScript

function whereIs(name) {
  return "Where is " + name + "?";
}

let x = whereIs("Jacky");
console.log(x);

// What is x?

function hi(name) {
  return "Hi " + name + "!";
}

let h1 = hi("Selva");
let h2 = hi("Pola");
let y = h1 + " " + h2;
console.log(y);

// What is y?

function double(name) {
  return name + " and " + name;
}

let z = double("Roy");
console.log(z);

// What is z?

let a = "Tic";
a = a + "Tac";
a = a + a;
console.log(a);

// Assignment And Concatenation

let charNumber = "Ai".length;
console.log(charNumber);

let name = "Weiwei";
charNumber = name.length;
console.log(charNumber);

// Length In Strings

function length(string) {
  return (result = string.length);
}

console.log(length("sun is shining"));

// String Length In Function

let town = "Mthatha";
let output = town.toUpperCase();
console.log(output);
output = town.toLowerCase();
console.log(output);

// Uppercase And Lowercase

function toCase(string) {
  result = string.toLowerCase();
  solution = string.toUpperCase();
  ok = result + "-" + solution;
  return ok;
}

console.log(toCase("JavaScript"));

// Uppercase And Lowercase In Function

let char0 = "Frantz".charAt(0);
let char1 = "Frantz".charAt(1);
let char9 = "Frantz".charAt(9);
console.log(char0);
console.log(char1);
console.log(char9);

// Characters In Strings

function shortcut(string, namify) {
  return string.charAt(0) + namify.charAt(0);
}
console.log(shortcut("JavaScript", "Programming"));
console.log(shortcut("Python", "Coding"));

// Characters In Strings In Function

let input = " Rosa Parks ";
let some = input.trim();
console.log(some);
let another = input.trimStart();
console.log(another);
let yetAnother = input.trimEnd();
console.log(yetAnother);

// Trimming Strings

function firstChar(string) {
  result = string.trim();
  return result.charAt(0);
}

console.log(firstChar("   Hello World!   "));

// First Character After Trimming

let n1 = "bit".indexOf("it");
let n2 = "bit".indexOf("js");
let n3 = "bit".indexOf("IT");
console.log(n1);
console.log(n2);
console.log(n3);

// Index Of In

function indexOfIgnoreCase(string, name) {
  let againName = name.toLowerCase();
  let againString = string.toLowerCase();
  result = againString.indexOf(againName);
  return result;
}

console.log(indexOfIgnoreCase("JavaScript", "script"));
console.log(indexOfIgnoreCase("JavaScript", "JAVA"));

// Index Of In Function

let a1 = "White Rabbit".indexOf("it", 1);
let a2 = "White Rabbit".indexOf("it", 3);
let a3 = "White Rabbit".indexOf("it", 5);
console.log(a1);
console.log(a2);
console.log(a3);

// Index Of With Start Position

function secondIndexOf(string, name) {
  let s1 = string.indexOf(name);
  return string.indexOf(name, s1 + 1);
}
console.log(secondIndexOf("JavaScript is a programming language", "a"));
console.log(secondIndexOf("JavaScript is a programming language", "Java"));

// Second Index Of In Function

let see = "see and stop".substr(0, 3);
console.log(see);
let and = "see and stop".substr(4, 3);
console.log(and);
let stop = "see and stop".substr(8);
console.log(stop);

// Substring In Strings

function firstWord(string) {
  let first = string.indexOf(" ");
  return string.substr(0, first);
}

console.log(firstWord("JavaScript is fun"));
console.log(firstWord("Python is great"));

// First Word In Function

let str = 'JavaScript';
let newstr = str.replace('Java', 'ECMA');

console.log(newstr); // Output: ECMAScript

newstr = 'Dada'.replace('a', 'i');
console.log(newstr); // Output: Dida

// Replace In Strings

function normalize(string){
  let newString = string.replace('-', '/');
  return result = newString.replace('-', '/');
}

console.log(normalize("2021-10-01"));

// Normalize Date Format
