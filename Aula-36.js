

// JavaScript Getter and Setter

// Vamos ver os Setter


// Em JavaScript, os métodos setter são usados ​​para alterar os valores de um objeto. Por exemplo,



const estudante = {

	nome: 'Leo',


	// Setter
	set mudarNome(novoNome){
		this.nome = novoNome;
	}
};


console.log(estudante.nome); // Leo


// mudan o nome com SET

estudante.mudarNome = 'Leonardo';

console.log(estudante.nome); // Leonardo


// set // get 