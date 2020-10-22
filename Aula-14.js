


// SWITCH JS


/*

// Exemplo 01 : DEclarando 


let a = 2;


switch(a){


	case 1 :

		a = 'um';
		break;

	case 2:
		a = 'dois';
		break;


	default:
		a = 'Não funciona';
		break;	


}

console.log(`O valor é ${a}`);


*/




// Exemplo 02  Calculadora



let resultado;



let operador = prompt('Deseja (Escola +, -, * ou /)');



let number1 = parseFloat(prompt('Informe o primeiro valor: '));
let number2 = parseFloat(prompt('Informe o segundo valor: '));


switch(operador){

	case '+':
		resultado = number1 + number2;
		console.log(`${number1} + ${number2} = ${resultado}`);
		break;

	case '-':
		resultado = number1 - number2;
		console.log(`${number1} - ${number2} = ${resultado}`);
		break;	

	case '*':
		resultado = number1 * number2;
		console.log(`${number1} * ${number2} = ${resultado}`);
		break;	

    case '/':
		resultado = number1 / number2;
		console.log(`${number1} / ${number2} = ${resultado}`);
		break;


	default:
		console.log('Operacao invalida');
		break;	


}