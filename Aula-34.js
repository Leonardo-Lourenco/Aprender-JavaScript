

// Prototype Chainig



function Pessoa(){

	this.nome = 'Leo'
}


Pessoa.prototype.nome = 'Rebeca';
Pessoa.prototype.idade = 23;

const pessoa1 = new Pessoa();


console.log(pessoa1.nome); // Rebeca
console.log(pessoa1.idade); // 23


