


//  Javscript async/await




/*



// Sintaxe:

async function nomeFuncao(parametro1, parametro2, .....parametroN){

    // code....

}








async function nomeFuncao(){

	console.log('Esta e uma funcao ASSINCRONA');
	return Promise.resolve(1);
}



nomeFuncao().then(function(result){
	console.log(result)
});











// 02: JavaScript await


// let resultado = await promise;





let promise = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve('Promise resolvida com sucesso')}, 4000);
	});


async function asincronoFunction(){

	let resultado = await promise;

	console.log(resultado);
	console.log('Ola');
}


asincronoFunction();











let promise1;
let promise2;
let promise3;



async function f(){

	let resultado1 = await promise1;
	let resultado2 = await promise2;
	let resultado3 = await promise3;

	console.log(resultado1);
	console.log(resultado2);
	console.log(resultado3);

}




*/




// 04: Tratamento de Erros


//assyFunction().catch(

	// error 


// 	)




let promise = new Promise(function(resolve, reject){
	setTimeout(function(){
	resolve('Promise executada com Sucesso')}, 4000);
	
});



async function asyncronaFunction(){
	try{

		let resultado = await promise;
		console.log(resultado);


	} catch(error){


		console.log(error);



	}
}

asyncronaFunction();

