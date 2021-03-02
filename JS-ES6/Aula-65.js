

// JavaScript Spread Operator  //  Operador JavaScript Spread



/*

const valores = ['Meu', 'nome', 'e' , 'Leo'];

console.log(valores);
console.log(...valores);










// 02: Copiar Array Usando Spread Operator


const valores = ['um', 'dois'];
const valores2 = [...valores, 'tres', 'quatro', 'cinco'];

console.log(valores2);








// 03: Clone Array Usando Spread Operator


let valores = [1, 2, 3];



let valores2 =  [...valores];


console.log(valores);
console.log(valores2);


// adiconar valor 

valores.push(4);

console.log(valores);
console.log(valores2);











// 04: Operador de propagação com objeto


const obj1 = {x : 1, y : 2};
const obj2 = {z : 3};



const obj3 = {...obj1, ...obj2};

console.log(obj3);








// 05: Parâmetro de repouso

let func = function (...args){

	console.log(args);
}


func(3);
func(4, 5, 6);

*/




// Você também pode passar vários argumentos para uma função usando o operador spread. Por exemplo,

function soma(x, y, z, b){
	console.log(x + y + z + b);

}

const numero = [1, 3, 4, 5, 20, 30];

soma(...numero);

