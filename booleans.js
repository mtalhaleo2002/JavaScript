let x1 = true && false;
console.log(x1); 

let x2 = !x1;
console.log(x2);

let x3 = x1 || x2;
console.log(x3);

let x4 = x1 && x2;
console.log(x4);

let x5 = x3 || x4;
console.log(x5);

// Boolean Operators

function nand(a,b){
 let some = a && b;
 return !some;
}

let x6 = nand(true, false);
console.log(x6);
console.log(nand(false, false));
let x7 = nand(true, true);
console.log(x7);
console.log(nand(false, true));

// This function returns the logical AND of two boolean values.


function nor(a,b){
 let some = a || b;
return !some;
}

console.log(nor(true, false));
console.log(nor(false, false));
console.log(nor(true, true));
console.log(nor(false, true));

// This function returns the logical OR of two boolean values.


function xor(a, b){
  return a && !b || !a && b;
}

console.log(xor(true, false));
console.log(xor(false, true));
console.log(xor(true, true));
// This function returns the logical XOR of two boolean values.

function equals(a,b){
  return a === b;
}
// This function checks if two boolean values are equal.

function equals(a,b,c){
  return a === b && b === c;
}
// This function checks if three boolean values are equal.