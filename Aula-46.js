

// Métodos de string JavaScript

/*

Method	
													Description

charAt(index)							retorna o caractere no índice especificado
concat()								junta duas ou mais strings
replace()								substitui uma string por outra string
split()									converte a string em um array de strings
substr(start, length)					retorna uma parte de uma string
substring(start,end)					retorna uma parte de uma string
slice(start, end)						retorna uma parte de uma string
toLowerCase()							retorna a string passada em minúsculas
toUpperCase()							retorna a string passada em maiúsculas
trim()									remove o espaço em branco das strings
includes()								procura por uma string e retorna um valor booleano
search()								procura por uma string e retorna a posição de uma correspondência



*/

// Vamos fazer alguns exemplos:

const texto1 = 'hello';
const texto2 = 'Coffee';
const texto3 = '     Tag ';


// concat
const resulado = texto1.concat( ' ', texto2);
console.log(resulado); // hello coffee


// converter strings toUpperCase()

const resultado2 = texto1.toUpperCase();
console.log(resultado2); // HELLO



// Trim

const resultado3 = texto3.trim();
console.log(resultado3); // Tag

// Sprit

const resultado4 = texto1.split();
console.log(resultado4); // ["hello"]


// slice
const resultado5 = texto1.slice(1 , 3);
console.log(resultado5);

//  h  e  l   l  o
//  0  1  2   3  4 