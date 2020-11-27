


// Existem também outros tipos de loops. 

// O for..in loop em JavaScript permite que você itere sobre todas as chaves de propriedade de um objeto.


/*

// Sintaxe 

for(key in object){

	//

}






// Exemplo 01: iterar por meio de um objeto

const estudante = {

	nome : 'Leo',
	sala: 7, 
	idade : 28
}


// for

for(let key in estudante){

	console.log(`${key} => ${estudante[key]}`);

}

*/




// Exemplo 02: Atualizar vaores da propriedade

const salario = {

	Jack : 24000,
	Paul : 34000,
	Rebeca : 5000
}


// FOR

for(let i in salario){

	let valor = "$" + salario[i];


	// Exibir

	console.log(`${i} : ${valor}`);



}