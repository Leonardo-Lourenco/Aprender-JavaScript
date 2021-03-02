


//  WeakMap de JavaScript


/*


// 01 : Declarando Wekmap



const conjunto = new WeakMap();

console.log(conjunto);

let obj = {};

conjunto.set(obj, 'Coffee');

console.log(conjunto);










//  02 : Métodos WeakMap  // get(), set(), delete(), e has()



const conjunto = new WeakMap();

console.log(conjunto);


let obj = {};


conjunto.set(obj, 'Coffee');


console.log(conjunto);

console.log(conjunto.get(obj));

console.log(conjunto.has(obj));


console.log(conjunto.delete(obj));


console.log(conjunto);


conjunto.set(obj, 'Tag');


console.log(conjunto);




*/






// 03 : WeakMaps não são iteráveis


const conjunto = new WeakMap();
console.log(conjunto);


let obj = {};


conjunto.set(obj, 'Coffee');


for( let i of conjunto){
	console.log(i);

}