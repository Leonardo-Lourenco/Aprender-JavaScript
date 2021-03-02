

// Arrow Function Parte 02

/*


// Trabalhando com Arrow Function em uma Função Regular 


function Pessoa() {
	// body...

	this.nome = 'Leo',
	this.idade = 28,
	this.exibirNome = function() {

		console.log(this.idade);

		function innerFunc(){

			console.log(this.idade);
			console.log(this);
		}

		innerFunc();
	}

}

let x = new Pessoa();
x.exibirNome();

*/


// 02 : Arrow Function 


function Pessoa(){

	this.nome = 'Leo',
	this.idade = 28,
	this.exibirNome = function() {

		console.log(this.idade);
		let innerFunc = () => {
			console.log(this.idade);
		}

		innerFunc();
	}
}

const x = new Pessoa();
x.exibirNome();


