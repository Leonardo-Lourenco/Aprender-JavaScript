

// Em JavaScript, um array é um objeto. E, os índices de matrizes são chaves de objetos.

/*

let arr = ['h', 'e'];
let arr1 = arr;

arr1.push('l');


console.log(arr);
console.log(arr1);



*/


// pasando chave noemeada 


let arr = ['h' , 'e'];

arr.name = 'Leo';


console.log(arr);//  ['h' , 'e'];
console.log(arr.name); // Leo
console.log(arr['name']); // Leo
