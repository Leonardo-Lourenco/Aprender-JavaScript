


// Promise em JavaScript 



/*


      Em JavaScript, uma promise é uma boa maneira de lidar com operações assíncronas . 
      É usado para descobrir se a operação assíncrona foi concluída com sucesso ou não.

	  
	  Uma PROMISE pode ter um de três estados.

	  		1 - Pending - Pendente
	  		2 - Fulfilled - Realizada
	  		3 - Rejected - Rejeitado


	 Uma PROMISE começa em um estado pendente. Isso significa que o processo não está completo. 
	 Se a operação for bem-sucedida, o processo termina em um estado concluído.
	 E, se ocorrer um erro, o processo termina em um estado rejeitado.


	 Por exemplo, quando você solicita dados do servidor usando uma PROMISE, 
	 ele fica em um estado pendente. Quando os dados chegam com sucesso, 
	 eles estarão em um estado preenchido. Se ocorrer um erro, ele estará em um estado rejeitado.


*/



/*


// 01: Cria uma PROMISE

let promise = new Promise(function(resolve, reject)){
	// Faz algo 
}


*/








/*





// 02: Programa com uma PROMISE:


const contador = true;


let contadorValor = new Promise(function(resolve, reject){


	if(contador){

		resolve("Este contador esta OK");


	}else{

		reject("Este contador não está OK");


	}


});


console.log(contadorValor);



*/












/*



// 03 :  Promise Chaining // Encadeamento de Promise



// Método Then():


// estaPromise.then(ok,  rejeitada);


let contadorValor = new Promise(function(resolve, reject){

	resolve('Promise resolvida com sucesso'); });



	// Metódo then:

	contadorValor.then(


		function sucessoValor(result){


			console.log(result);



		},

	)

	.then(


		 function sucessoValor1(){


		 	console.log('Você pode cololcar varias funcoes aqui');
		 },



		);





*/





/*




// Método catch():


let contadorValor = new Promise(function (resolve, reject) {


	reject('Promise rejeitada ');
});


contadorValor.then(
	function sucessoValor(result){
		console.log(result);
	},

)


.catch(
	function errorValor(result){
		console.log(result);
	}

);



*/










/*




	JavaScript Promise Versus Callback





	As promise são semelhantes às CallBack Function  no sentido de que ambas podem ser usadas para lidar 
	com tarefas assíncronas.

    As CallBack Functions também podem ser usadas para executar tarefas síncronas.
	

			Suas diferenças podem ser resumidas nos seguintes pontos:

					Promise:
						1 - A sixtaxe é amigável e fácil de ler;
						2 - O tratamento de erros é mais fácil de grenciar.

					CallBack:
						1 - Asixtaxe é difícil de entender;
						2 - O tratamento de erros podem ser difícil de gerenciar.	


			

*/






// Método JavaScript finally ()



let contadorValor = new Promise(function(resolve, reject){

	resolve('Promise resolvida com sucesso'); });


contadorValor.finally(

	function exibir(){
		console.log('Executando o Metodo Finaly');
	}



);






/*



	JS Demas Métodos Promise:

	


	Método                        Descrição
	all(iterable)				  Espera que todas as promises sejam resolvidas ou qualquer uma seja rejeitada
	allSettled(iterable)		  Espera até que todas as promises sejam resolvidas ou rejeitadas
	any(iterable)				  Retorna o valor da promise assim que qualquer uma das promessas for cumprida
	race(iterable)				  Espere até que qualquer uma das promises seja resolvida ou rejeitada
	reject(reason)				  Retorna um novo objeto Promise que é rejeitado pelo motivo fornecido
	resolve(value)                Retorna um novo objeto Promise que é resolvido com o valor fornecido
	catch(), then() , finally()						  








*/