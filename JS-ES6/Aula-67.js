

// JavaScript Map  // Mapa JavaScript Parte 02




/*


// 01: JavaScript Map Size


let mapa = new Map();


mapa.set('info', {nome: 'Leo', idade: "28"});

console.log(mapa.size);













// 02: Iterar através de um mapa


let mapa = new Map();

mapa.set('nome', 'Leo');
mapa.set('idade', '28');


for(let [key, value] of mapa){
	console.log(key +'- ' +value);
}











// 03: Você também pode obter os mesmos resultados do programa acima usando o método for Each(). Por exemplo,


let mapa = new Map();

mapa.set('nome', 'Leo');
mapa.set('idade', '28');


mapa.forEach(function(value, key){
	console.log(key + '- ' + value);

})









// 04: Iterar sobre as chaves do mapa // Iterate Over Map Keys



let mapa = new Map();

mapa.set('nome', 'Leo');
mapa.set('idade', '28');



for( let key of mapa.keys()){

	console.log(key);

}











// 05: Iterar sobre os valores do mapa // Iterate Over Map Values





let mapa = new Map();

mapa.set('nome', 'Leo');
mapa.set('idade', '28');


for(let valor of mapa.values()){

	console.log(valor);



}









// 06: Obter chave / valores do mapa   //   Get Key/Values of Map


let mapa = new Map();

mapa.set('nome', 'Leo');
mapa.set('idade', '28');


for(let elementos of mapa.entries()){

	console.log(`${elementos[0]}: ${elementos[1]}`);


}






*/






// 07 : JAVASCRIPT MAP vs Object 



							Map                                                                Object

1 - Os mapas podem conter objetos e outros tipos de dados como chaves.              Os objetos podem conter apenas strings e símbolos como chaves.
2 - Os mapas podem ser iterados diretamente e seu valor pode ser acessado.          Os objetos podem ser iterados acessando suas chaves.
3 - O número de elementos de um mapa pode ser determinado por sizepropriedade.      O número de elementos de um objeto precisa ser determinado manualmente.
4 - O mapa tem melhor desempenho para programas que exigem a                        O objeto não funciona bem se o programa requer a adição ou remoção de elementos com frequência.
	adição ou remoção de elementos com frequência.