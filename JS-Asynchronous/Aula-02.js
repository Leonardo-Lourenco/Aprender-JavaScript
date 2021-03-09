

//  JS Função CallBack




/*



// Relembrado function 

function exibir(name){
	console.log('Ola' + '' + name);
}

exibir('Leo'); 



*/








/*




// 02: CallBack Function 

function exibir(nome, callback){

	console.log('Ola' + ' ' + nome);
	callback();

}


// callback function 
function chamar(){
	console.log('Eu sou a funcao CallBack');
}


exibir('Leo', chamar);




*/









// Function CallBack com setTimeout



function exibir(nome, minhaFuncao){

	console.log('Ola');


	// callback function
	// Obs: minha callback function só será executada após a função exibir ser executada
	minhaFuncao(nome);

}


function dizerNome(nome){
	console.log('Ola' + ' ' + nome);
}



// setTimeout

setTimeout(exibir, 3000, 'Leo', dizerNome);