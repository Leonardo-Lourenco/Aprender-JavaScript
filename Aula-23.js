

// Métodos em JS

/*
// Exemplo 01:

let pessoa = {

	nome: 'Leo',
	// idade: 28,

	greet: function() {console.log('Ola')}
}


pessoa.nome; // Leo

pessoa.greet(); // hello







// Exemplo 02 : Métodos Integrados



let number = '23.32';
let result = parseInt(number);

console.log(result);









// Exemplo 03 : Adicionar um Método a um Objeto em JS


let estudante = { }; // estudante é um objeto vazio

// adicionado propriedade ao objeto 

estudante.nome = 'Leo';

// Adiconar um Método para este Objeto

estudante.greet = function(){
	console.log('Ola');
}


// Acessando o Método
estudante.greet();

*/




// Exemplo 04; Palavra Chave ou Keyword em JS


let pessoa = {

	nome: 'Leo',
	idade: 28,

	greet: function() { 
		let sobrenome = 'Coffee Tag';
		console.log('O nome e ' + ' ' + this.nome + ' ' + sobrenome); }
};

pessoa.greet();