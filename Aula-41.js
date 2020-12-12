

// Numeros



/*

const a = 3; // int 
const b = 3.13; // float



// EXPONENCIAL

const a1 = 5e9; // 5000000000
console.log(a1);


const a2 = 5e - 5;
console.log(a2) // 0.00005



// HEXADECIMAL
const a = 0xff;
console.log(a); // 255

const b = 0x00;
console.log(b); //0





// OPERADORES

const a = 4 + 9;
console.log(a); //13


const b = '4' + 9;
console.log(b); //49


const c = '4' - 2;
console.log(c); // 2

const d = '4' / 2;
console.log(d);//2

const e = '4' * 2 ;
console.log(e); //8


*/



// JS NaN


const a = 4 - 'Hello';
console.log(a); NaN

// JS isNaN

const a = isNaN(9);
console.log(a); // false

const a = isNaN(4 - 'hello');
console.log(a); // true




const a = 4 - 'hello';
console.log(a); //NaN
console.log(typeof a); // numero





const b = 2 / 0;
console.log(a); // Infinity

const c = -2 /0;
console.log(c); //-Infinity






const value = 900719925124740998n;

const value2 = value +1n;
console.log(value2); // 900719925124740999n
