function give(input) {
  return input;
}
function parameters() {
  return {
    give: give,
    input: 'What is g?'
  };
}
console.log(parameters().give(parameters().input));
// Output: What is g?

function echo(name){
  return name;
}
console.log(echo('Greta'));
console.log(echo('CO2'));
// Output: Greta, CO2

function add(a, b) {
  return a + b;
}
add(5, 10);
console.log(add(5, 10));

// Parameters in functions

function reply(phrase) {
  return phrase;
}

let x = reply('How do you do?');
console.log(x);