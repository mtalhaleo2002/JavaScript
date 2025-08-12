let languages = ["C", "C++", "Java"];
let primes = [2, 3, 5, 7, 11];
let emptyArray = [];
let a = "Douglas";
let b = 12;
let c = true;
let someValues = [a, b, c];

console.log(languages); // Output: ['C', 'C++', 'Java']
console.log(primes); // Output: [2, 3, 5, 7, 11]
console.log(emptyArray); // Output: []
console.log(someValues); // Output: ['Douglas', 12, true]

function toArray(a, b) {
  return [a, b];
}
console.log(toArray("Hello", "World")); // Output: ['Hello', 'World']
// The toArray function takes two arguments and returns them as an array.

let language = ["C", "C++", "Java"];
let d = languages[0];
let cPlusPlus = languages[1];
let java = languages[2];
console.log(d); // Output: 'C'
console.log(cPlusPlus); // Output: 'C++'
console.log(java); // Output: 'Java'

function getFirstElement(array) {
  return array[0];
}
// The getFirstElement function takes an array as an argument and returns its first element.

let languagesProgramming = [];
languagesProgramming[0] = "C";
languagesProgramming[1] = "C++";
languagesProgramming[2] = "Java";
console.log(languagesProgramming); // Output: ['C', 'C++', 'Java']

function setFirstElement(array, b) {
  array[0] = b;
  return array;
}
// The setFirstElement function takes an array and a value, sets the first element of the array to the value, and returns the modified array.

let lang = [];
let len0 = lang.length;
lang[0] = "C";
let len1 = lang.length;
lang[1] = "C++";
let len2 = lang.length;
console.log(len0); // Output: 0
console.log(len1); // Output: 1

function getLastElement(array) {
  let final = array.length;
  return array[final - 1];
}
// The getLastElement function takes an array as an argument and returns its last element.

function sort(array) {
  return array.sort();
}
// The sort function takes an array as an argument and sorts it in ascending order.

let languagesOF = ["C", "Java", "JavaScript"];
let firstLanguage = languagesOF.shift();
console.log(firstLanguage); // Output: 'C'
console.log(languagesOF); // Output: ['Java', 'JavaScript']

let ok = [];
console.log(ok); // Output: []
ok.push("C");
console.log(ok); // Output: ['C']
ok.push("Java");
console.log(ok); // Output: ['C', 'Java']
ok.push("JavaScript");
console.log(ok); // Output: ['C', 'Java', 'JavaScript']

function rotate(array) {
  let some = array[0];
  array.shift();
  array.push(some);
  return array;
}
// The rotate function takes an array, removes the first element, and appends it to the end of the array.