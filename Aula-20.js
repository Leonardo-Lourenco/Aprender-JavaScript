


// Função Recursiva

// Exemplo 01 :  Contagem Regressica até o valor 1


function contador(numero){

	console.log(numero);


	// decrementar
	let addNumero = numero - 1; // 10 - 1 = 9 = 9 - 1 = 8 = 0

	// case

	if( addNumero > 0){

		contador(addNumero);

	}


}


contador(3);