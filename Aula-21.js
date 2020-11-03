

// Fatorial de um Número // 3 = 1 * 2 * 3 = 6

// 1 2 3 4 5 


function fatorial(x){

	if(x == 0){

		return 1;

	}else{


		return x * fatorial(x - 1);

	}


}

let num = 0;

if(num > 0){

	let result = fatorial(num);
	console.log(`O Fatorial de ${num} e ${result}`);
}



                         