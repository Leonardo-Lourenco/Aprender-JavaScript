

// Instrução BREAK;




/*
// Exemplo 01 : BREAK com laço FOR




for(let i = 1; i<=5; i++){

	// break 

	if(i == 3){

		break;

	}


	console.log(i);

	//break[label];


}



*/


/*

// Exemplo 02: BREAK com o LOOP WHILE


let soma = 0;
//let number;

while(true){

	number = parseInt(prompt('Informe um valor: '));

	if(number < 0){

		break;

	}

	// soma

	soma += number; //soma = soma + number;


}

// exibir valores na tela

console.log(`A soma dos valoes: ${soma}`);


*/




// Exemplo 03: BREAK com LOOP ANINHADO


for(let i = 1; i <=3; i++){

	for(let j = 1; j<=3; j++){

		if(i == 3){

			break;


		}

		console.log(`i = ${i}, j = ${j}`);


	}



}