

// JavaScript Map  // Mapa JavaScript



// 01: Criar Mapa JavaScript

// const mapa1 = new Map();
// console.log();






/*


// 02:  Inserir item no mapa

let mapa1 = new Map();

mapa1.set('info', {nome: 'Leo', idade: 28});

console.log(mapa1);



let mapa2 = new Map();

let obj = {};

mapa2.set(obj, {nome: 'Leo', idade: 28});

console.log(mapa2);









// 03: Acessar elementos do mapa


const buscar = new Set([1 ,2, 3]);


let mapa1 = new Map();

mapa1.set('dados',{nome: 'Canal Coffee Tag', aula: 66});


// acessar um determinado valor

//console.log(mapa1.get('dados'));



// has para verificar um determinado valor 
console.log(mapa1.has('dados'));









// 04: Removendo Elementos



let mapa = new Map();
mapa.set('dados', {nome : 'Leo', idade : 28});


// remover elementos

mapa.delete('endereco'); // false

console.log(mapa);


mapa.delete('dados'); // true
console.log(mapa);

*/



let mapa = new Map();
mapa.set('dados', {nome : 'Leo', idade : 28});


// clear removendo todos os elementos

mapa.clear();
console.log(mapa);