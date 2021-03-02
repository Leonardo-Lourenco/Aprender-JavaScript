

// Mathematical Set Operations - Operações matemáticas de conjuntos


/*


// Exemplo 01: Definir operação de união - Set Union Operation


function uniao(a , b){
	let uniaoSet = new Set(a);
	for( let i of a){
		uniaoSet.add(i);

	}

	return uniaoSet
}

let setA = new Set(['Maca', 'Manga', 'Morango']);
let setB = new Set(['Ameixa', 'Maca', 'Banana']);

let resultado = uniao(setA, setB);

console.log(resultado);












// Exemplo 02: Definir operação de interseção



function intersao(setA, setB){

	let intersecaoSet = new Set();

	for(let i of setB){
		if(setA.has(i)){
			intersecaoSet.add(i);

		}

	}
	return intersecaoSet;
}


let setA = new Set(['Maca', 'Manga', 'Morango']);
let setB = new Set(['Ameixa', 'Maca', 'Banana']);

let resultado = intersao(setA, setB);

console.log(resultado);









// Exemplo 03: Definir a operação de diferença - Set Difference Operation



function diferenca(setA, setB){

	let diferencaSet = new Set(setA)
	for(let i of setB){
		diferencaSet.delete(i);
	}

	return diferencaSet
}


let setA = new Set(['Maca', 'Manga', 'Morango']);
let setB = new Set(['Ameixa', 'Maca', 'Banana']);

let resultado = diferenca(setA, setB);

console.log(resultado);



*/






// Exemplo 04 : Definir operação de subconjunto - Set Subset Operation


function subset(setA, setB){

	for(let i of setB){

		if(!setA.has(i)){
			return false
		}

	}

	return true
}

let setA = new Set(['Maca', 'Manga', 'Morango']);
let setB = new Set(['Maca', 'Morango']);

let resultado = subset(setA, setB);

console.log(resultado);
