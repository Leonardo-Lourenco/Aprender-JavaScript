

/// Variáveis LOCAL E GLOBAL

/*

//Exemplo 01 : Declarando

//let a = 'Hello';

function curso(){

	//console.log(a);
	a = 3;
}

//console.log(a);

curso();

console.log(a);

*/





// VARIÁVEL LOCAL


let a = 'Hello';

function curso(){

		let b = " de JS"; // variável local
		console.log(a + b);


}

curso();

console.log(a + b); // erro