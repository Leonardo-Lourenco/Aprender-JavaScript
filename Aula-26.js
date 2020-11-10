


// Função de Construtor Vs Literal de Objeto



// Literal Objeto

let pessoa = {

	nome: 'Leo'
}


console.log(pessoa.nome); // Leo


let estudante = pessoa;

estudante.nome = 'Rebeca';

console.log(pessoa.nome); //Rebeca







// Função contrutora

function Pessoa(){

	this.nome = 'Leo'
}

let pessoa1 = new Pessoa();
let pessoa = new Pessoa();

pessoa1.idade = 20;

