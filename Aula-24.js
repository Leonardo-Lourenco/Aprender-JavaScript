


//  Constrctor em JS


// Função Construtora

function Pessoa() {

	this.nome = 'Leo';
	this.idade = 28,

	this.greet = function() {
		console.log('hello');
	}
}


let pessoa = new Pessoa();
let pessoa2 = new Pessoa();


console.log(pessoa.nome);
console.log(pessoa2.nome);