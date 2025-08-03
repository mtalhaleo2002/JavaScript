function praise(name) {
  return name + ' is great!';
}
console.log(praise('JavaScript'));

function greet(name){
 return 'Hello ' + name + '!';
}

console.log(greet('Ada'));
console.log(greet('Grace'));

// Strings in JavaScript

function whereIs(name) {
  return 'Where is ' + name + '?';
}

let x = whereIs('Jacky');
console.log(x);

// What is x?

function hi(name) {
  return 'Hi ' + name + '!';
}

let h1 = hi('Selva');
let h2 = hi('Pola');
let y = h1 + ' ' + h2;
console.log(y);

// What is y?

function double(name) {
  return name + ' and ' + name;
}

let z = double('Roy');
console.log(z);

// What is z?

let a = 'Tic';
a = a + 'Tac';
a = a + a;
console.log(a);

// Assignment And Concatenation