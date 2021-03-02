

// JavaScript Default Parameters / Parâmetros padrão de JavaScript



/*



// 01 : 


function soma(x = 3, y= 5){

	return x + y;

}

console.log(soma(5,15)); // 20
console.log(soma(7)); // 12 
console.log(soma()); // 8 













// 02 : Usando expressões como valores padrão



function soma(x = 1, y = x, z = x + y){ //  1 1 = 2  z = x + y = 2 + 2

	console.log(x + y + z);


}

soma(); // 4


// Simular um erro 

function soma(x = y, y = 1){
	console.log(x + y);

}

soma(); // 











// 03 : Exemplo 2: Passando o valor da função como valor padrão



const soma = () => 15;

const calcular = function(x , y = x * soma() ){

	return x + y;

}

const resultado = calcular(10);
console.log(resultado); // 160




*/




// 04 : Passando valor indefinido


function teste(x = 1){

	console.log(x);

}


teste(undefined); // 1