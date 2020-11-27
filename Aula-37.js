

// JavaScript Object.defineProperty ()



const estudante = {

	nome: 'Leo'
}


// Get

Object.defineProperty( estudante, "getNome", {

	get : function(){
		return this.nome;
	}
});



// set 

Object.defineProperty(estudante, "chanceNome", {

	set : function (value){
		this.nome = value;
	}
});


console.log(estudante.nome); // Leo


estudante.chanceNome = 'Leonardo';

console.log(estudante.nome);