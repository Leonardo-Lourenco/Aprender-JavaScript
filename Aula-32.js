


// Adicionar métodos a uma função de construtor usando protótipo

function Pessoa(){

	this.name = 'Leo',
	this.idade = 28
}


const pessoa1 = new Pessoa();
const pessoa2 = new Pessoa();


// adicionando métodos a nossa função construtora

Pessoa.prototype.greet = function(){
	console.log('Ola' + ' ' + this.name);
}


pessoa1.greet();
pessoa2.greet();

