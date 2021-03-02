

// Iterate Sets - Iterar conjuntos




/*



const set = new Set([1, 2, 3]);

for(let i of  set){
	 console.log(i);
}










// 02: JavaScript WeakSet



const weakset = new WeakSet();

console.log(weakset);


let obj = {
	mensagem: 'Ola',
	enviarMensagem: true
}


weakset.add(obj);

console.log(weakset);


weakset.add('CoffeeTag');

console.log(weakset);








// 03: Métodos WeakSet

// WeakSets têm métodos add(), delete()e has(). Por exemplo,

const weakset = new WeakSet();

console.log(weakset);

const obj = {a:1};

weakset.add(obj);

console.log(weakset);


console.log(weakset.has(obj)); // true


weakset.delete(obj);
console.log(weakset);






*/




// 04: WeakSets não são iteráveis


const weakset = new WeakSet({a:1});

for(let i of weakset){

	console.log(i);


}