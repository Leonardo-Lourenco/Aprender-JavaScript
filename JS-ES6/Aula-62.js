



// Arrow Function Parte 03


// Vinculação de argumentos  / Arguments Binding


/*

let x = function (){
	console.log(arguments);
}


x (4,6,7);  // exibir estes valores







// Arrow Function 

let x = (...n) => {
	console.log(n);
}

x(4,6,7);










// 02 :  Arrow Function with Promises and Callbacks



// ES5


asyncFunction().then(function(){
	return asyncFunction1();
}).then(function(){
	return asyncFunction2();
}).then(function(){
	finish;
});




// ES6

asyncFunction()
	.then(() => asyncFunction1())
	.then(() => asyncFunction2())
	.then(() => finish);





*/




// 03 : Evite Fazer



// 01 : Você não deve usar Arrow Function  para criar métodos dentro de objetos.


let Pessoa = {
	nome : 'Leo',
	idade: 28,
	exibir:  () => {
		console.log(this.idade);
	}
}


pessoa1.exibir(); // Undefined


// 02 : Você não pode usar uma Arrow Function como construtor . Por exemplo,

let Comida = () => {};
let comida = new Comida(); // 

