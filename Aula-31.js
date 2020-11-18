

// Herança de protótipo


// Função construtora

function Pessoa(){
	this.nome = 'Leo';
	this.idade = 23
}


// criando objetos
const pessoa1 = new Pessoa();
const pessoa2 = new Pessoa();


Pessoa.prototype.sexo = 'Masculino';


console.log(Pessoa.prototype); 


console.log(pessoa1.sexo);
console.log(pessoa2.sexo);