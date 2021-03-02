

/*

// 01 : JavaScript Template Literals / JavaScript Template Literals


// antigamente:

const nome = "Capitao";
const sobrenome = "America";

console.log('Oi' + nome + ' eu sou ' + sobrenome);


// na nova versão

const nome = "Capitao";
const sobrenome = "America";

console.log(`Ola ${nome}  ${sobrenome}`);







// 02 : JavaScript Destructuring / Desestruturação de JavaScript

// antes 

const pessoa = {
	nome: 'Leo',
	idade: 28,
	sexo: 'Masculino'
}

let nome = pessoa.nome;
let idade =  pessoa.idade;
let sexo = pessoa.sexo;


console.log(nome); // Leo



// Na nova nova versão 

const pessoa = {
	nome: 'Leo',
	idade: 28,
	sexo: 'Masculino'
}


let {nome, idade, sexo } = pessoa;

console.log(nome); // Leo







// 03 :  JavaScript import and export / Importação e exportação de JavaScript


// contato.js

export default function contact(nome, idade) {
	console.log(`O nome é ${nome}. e sua idade e ${idade}`);
}



// home.js

import contact from './contato.js';

contact('Leo', 28); // 









// 04 : JavaScript Promises / JavaScript Promises



let contarValor = new Promise(function(resolve, reject){
	reject('Promise rejeitada');
});

contarValor.then(

	function sucessoValor(result){
		console.log(result); // promise resolvido
	},

	)

*/





// 05 :  JavaScript Rest Parameter and Spread Operator 



function show(a, b, ...args){

	console.log(a);
	console.log(b);
	console(args);

}

show('one', 'two', 'three', 'four');


//por exemplo:




let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr2);