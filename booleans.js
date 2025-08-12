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

function nand(a, b) {
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

function nor(a, b) {
  let some = a || b;
  return !some;
}

console.log(nor(true, false));
console.log(nor(false, false));
console.log(nor(true, true));
console.log(nor(false, true));

// This function returns the logical OR of two boolean values.

function xor(a, b) {
  return (a && !b) || (!a && b);
}

console.log(xor(true, false));
console.log(xor(false, true));
console.log(xor(true, true));
// This function returns the logical XOR of two boolean values.

function equals(a, b) {
  return a === b;
}
// This function checks if two boolean values are equal.

function equals(a, b, c) {
  return a === b && b === c;
}
// This function checks if three boolean values are equal.

function isEven(a) {
  return a % 2 === 0;
}
// This function checks if a number is even.

function unequal(a, b, c) {
  return a !== b && b !== c && a !== c;
}
// This function checks if three boolean values are not equal.

function isThreeDigit(a) {
  return a >= 100 && a < 1000;
}
// This function checks if  number is greater than or equal to 100 and less than 1000.

function equals(a, b) {
  if (a === b) {
    return "EQUAL";
  } else {
    return "UNEQUAL";
  }
}

// This function checks if two boolean values are equal and returns "EQUAL" or "UNEQUAL".

function repdigit(a) {
  if (a % 11 === 0) {
    return "Repdigit!";
  }
  return "No Repdigit!";
}

// This function checks if a number is a repdigit (all digits are the same) and returns "Repdigit!" or "No Repdigit!".

function addWithSurcharge(a, b) {
  if (a <= 10) {
    a = a + 1;
  } else {
    a = a + 2;
  }

  if (b <= 10) {
    b = b + 1;
  } else {
    b = b + 2;
  }
  return a + b;
}

// This function adds two numbers with a surcharge based on their values. If a number is less than or equal to 10, it adds 1; otherwise, it adds 2 to that number before summing them up.