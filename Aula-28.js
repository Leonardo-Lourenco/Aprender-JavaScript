

// Protótipo de objeto JavaScript


function Pessoa(){
	this.nome = 'Leo';
	this.idade = 28
}

// Criando objetos
let pesso1 = new Pessoa();
let pesso2 = new Pessoa();

Pessoa.prototype.genero = 'Masculino';

console.log(pesso1.genero);
console.log(pesso2.genero);