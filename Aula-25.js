

// Construtor Função Paramêtro 


function Pessoa(pessoa_nome, pessoa_idade, pessoa_sexo){

	this.nome = pessoa_nome,
	this.idade = pessoa_idade,
	this.sexo = pessoa_sexo,

	this.greet =  function(){

		return ('Ola' + ' ' + this.nome);
	}
}


// Crriando Objetos

let pessoa1 = new Pessoa('Leo', 28 , 'Masculino');
let pessoa2 = new Pessoa('Rebeca', 25, 'Feminino');

// Acessando Propriedades

console.log(pessoa1.nome);
console.log(pessoa2.idade);

