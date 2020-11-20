


// Mundança de Prototipo




// contrutor da função

function Pessoa(){
	this.nome = 'Leo';
}

// Adicionar uma propriedade

Pessoa.prototype.idade = 20;

// criando um objeto
const pessoa1 = new Pessoa();


console.log(pessoa1.idade); // 20


Pessoa.prototype = { idade: 50 }

const pessoa3 = new Pessoa();

console.log(pessoa3.idade); // 50
console.log(pessoa1.idade); //20


