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