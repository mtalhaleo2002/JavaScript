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
