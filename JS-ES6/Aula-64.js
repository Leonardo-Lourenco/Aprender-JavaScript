


// JavaScript Template Literals (Template Strings) // Literais de modelo JavaScript (strings de modelo)


const nome = 'Leo';
console.log(`Ola ${nome} tudo bem`);


/*

// 01 : Literais de modelo para strings


const str1 = 'Isso e um texto';

const str2 = 'Isso "texto" dentro de uma string'; // certo 
const str3 = 'Isso 'texto' dentro da string';  // error



// caracter de escape

const str4 = 'Isso \'texto\' texto dentro....'; // certa
const str5 = 'Isso \"texto\" texto dentro....'; // error



const str6 = 'Isos é texto';
const str7 = 'Isos é um texto 'TEXTO' .... ';







// 02 : Strings multilinha usando literais de modelo

// + 


const mensagem1 = 'Isso é o Curso de \n' +
				  'de Programação Canal \n' +
				  'Tag';

console.log(mensagem1);




const mensagem2 = 'Isso é o Curso de de Programação Canal Tag'
console,log(mensagem2);













// 03 : Expression Interpolation // Interpolação de expressão


const nome = 'Leo';
console.log('Ola' + nome); // OLa Leo



// nova versão

const nome = 'Leo';
console.log(`Ola ${nome}`); // OLa Leo


const resultado = `A soma de 4 + 5 e` ${4 + 5};
console.log(resultado);

console.log(`${resultado < 10 ? 'Valor maior que dez :  valor menor que Dez'}`);









// 04 : Tagged Templates  // Modelos etiquetados

function nomeExemplo(string){
	return string;
}

const resultado = nomeExemplo('Ola Leo');
console.log(resultado);



// Agora

function nomeExemplo(string){
	return string;
}


const resultado = nomeExemplo`Ola Leo`;

console.log(resultado);


*/





// 05 : 



const nome = 'Leo';
const conhecer = true;



function nomeExemplo(string, nomeValor){
	let str0 = string[0]; // Ola
	let stt1 = string[1]; // Como vai você?

	if(conhecer){
		return `${str0}${nomeValor}${str1}`;
	}
}


const resultado = nomeExemplo`Ola ${nome}, como você está`;

console.log(resultado);