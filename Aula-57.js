

//  Iterando em Array Multidimensional


/*

// ForEach()


let dados = [['Leo', 28], ['Rebeca', 25]];

dados.ForEach((student) => {

	student.forEach((data) => {

			console.log(dados);//


	});


});









// 02 :  FOR OF


let dados = [['Leo', 28], ['Rebeca', 25]];


for(let i of dados){

	for(let j of i){

		console.log(j);

	}


}

*/





//03 :  FOR LOOP


let dados = [['Leo', 28], ['Rebeca', 25]];


for( let i = 0; i < dados.lenght; i++){


	let tamanho = dados[i].lenght;

	for(let j = 0; j < tamanho; j++){
		console.log(dados[i][j]);


	}


}

