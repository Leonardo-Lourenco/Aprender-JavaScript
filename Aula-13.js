

// CONTINUE em JS



/*


// Exemplo 01 : imprimir valores da i


for(let i = 1; i <= 5; i++){


	// condição do continue
	if(i == 3){

		continue;

		// continue[label];

	}


	console.log(i);



}

*/



/*

// Exemplo 02 : SOMA DE VALORES POSITIVOS



let soma = 0;


let number = 0;



while(number >=0){

	soma += number // soma = soma + number


	number = parseInt(prompt('Informe um valor: '));

	// condição continue

	if(isNaN(number)){

		console.log('Numero informado é uma letra');
		number = 0;
		continue;
	}




}

console.log(`A soma dos valores ${soma}`);

*/





// Exemplo 03 : LOOP ANINHADO

for(let i =1; i <=3; i++){

	for(let j =1; j<=3; j++){

		if(j == 2){

			continue;


		}

		console.log(`i = ${i}, j =  ${j}`);



	}



}