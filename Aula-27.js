

// Adicionando propriedades e métodos em um objeto


// Função Construtora

function Pessoa(){
	this.nome = 'Leo',
	this.idade = 28
}


// Criando objetos
let pessoa1 = new Pessoa();
let pessoa2 = new Pessoa();



// Adicionar uma Propriedade no Objeto Pessoa1
pessoa1.sexo = 'masculino';


// Adicionar Método no Objeto Pessoa1
pessoa1.greet = function (){
	console.log('Olá');
} 

pessoa1.greet(); // Olá

// Error
pessoa2.greet();
