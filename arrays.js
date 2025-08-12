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

function add(array, blob) {
  if (array.indexOf(blob) === -1) {
    array.push(blob);
  }
  return array;
}
// The add function takes an array and a value, checks if the value is not already in the array, and adds it to the end of the array if it's not present.

function concatUp(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr2.concat(arr1);
  } else if (arr2.length > arr1.length) {
    return arr1.concat(arr2);
  }
  return arr1.concat(arr2);
}

console.log(concatUp([1, 2, 3], [4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(concatUp([1, 2], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(concatUp([1, 2], [3, 4])); // Output: [1, 2, 3, 4]

// Shorter Version
function concatUp(firstArray, secondArray) {
  if (secondArray.length >= firstArray.length) {
    return firstArray.concat(secondArray);
  }

  return secondArray.concat(firstArray);
}
// The concatUp function takes two arrays and concatenates them, ensuring that the longer array comes first in the result.

let abcd = ["a", "b", "c", "d"];
let ab = abcd.slice(0, 2);
console.log(ab); // Output: ['a', 'b']
let bc = abcd.slice(1, 3);
console.log(bc); // Output: ['b', 'c']
let bcd = abcd.slice(1, 4);
console.log(bcd); // Output: ['b', 'c', 'd']

function halve(array) {
  let halflength = Math.ceil(array.length / 2);
  return array.slice(0, halflength);
}
console.log(halve([1, 2, 3, 4, 5])); // Output: [1, 2, 3]
// The halve function takes an array and returns a new array containing the first half of the original array, rounding up if the length is odd.
