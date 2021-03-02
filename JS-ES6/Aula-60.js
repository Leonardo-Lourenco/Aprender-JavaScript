
/* 


// Arrow Function


// Antigamente

let x = function(x ,y ){
	return x * y;
}



// Atualização 

let x = (x , y) => x * y;






// 02 : Arrow function sem argumento 

let x = () => console.log('Hello');
x(); // Hello






// 03 : Arrow function com argumento 

let x = exibir  => console.log(exibir);
x(); // 




// 04 Arrow Function mcom uma Expressão

let idade = 5;

let exibir = (idade < 18) ?
	() => console.log('De menor') :
	() => console.log('Adulto');

exibir();


*/


// 05 : Multiline Arrow Function



let soma = (a , b ) => {
	let resultado = a + b;
	return resultado;
}


let exibir = soma(5,7);
console.log(exibir); // 13

let mostrar = soma(10, 10);
console.log(mostrar); // 20