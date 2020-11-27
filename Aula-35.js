

// JavaScript Getter and Setter


// 1 - Propriedade de dados
// 2 - Propriedade do acessador 


/*

// Exemplo de Propriedades de Dados

const estudante = {

	fistName: 'Rebeca';
};

*/




//Propriedade Acessora 

// Exemplo : Get



const estudante = {


	firstName: 'Rebeca',



	// Acessando propriedade utilizando Get
	get getName(){
		return this.firstName;
	}

};

// Acessando os dados da propriedade
console.log(estudante.firstName); // Rebeca

// acessando utilizando GET
console.log(estudante.getName); // Rebeca

// Error
//console.log(estudante.getName()); // error