

// Conversãoes de Tipos em JS


// 1 -  COnversão Implícita
// 2 - Conversão Explicita





// 1 -  COnversão Implícita

/*

let result;

result = '3' + 2;
console.log(result); // '32'

result = '3' + true;
console.log(result);

result = '3' + undefined;
console.log(result);

result = '3' + null;
console.log(result);







//  Exemplo 2: conversão implícita em número


let resultado;

resultado = '4' - '2'; // 2
console.log(resultado);


resultado = '4' - 2; // 2 
console.log(resultado);


resultado = '4' * 2; // 8
console.log(resultado);

resultado = '4' / 2 ; // 2
console.log(resultado);









//  Exemplo 3: resultados de string não numéricos NaN



resultado = 'hello' - 'World';
console.log(resultado); // Nan

resultado = '4' - 'hello';
console.log(resultado);









// Exemplo 4: conversão booleana implícita em número

let resultado;

resultado = '4' - true;
console.log(resultado); // 3 

resultado = 4 + true;
console.log(resultado); // 5

resultado = 4 + false;
console.log(resultado);







// Exemplo 5: conversão nula em número


let resultado;

resultado = 4 + null;
console.log(resultado);

resultado = 4 - null;
console.log(resultado);









// Exemplo 6: undefined usado com number, boolean ou null


let resultado;

resultado = 4 + undefined;
console.log(resultado)//NaN


resultado = true + undefined;
console.log(resultado);

resultado = null + undefined;
console.log(resultado);














// CONVERSÃO EXPLÍCIRA

// 1. Converter para número explicitamente


// Number();



let resultado;


// string para number

resultado = Number('321');
console.log(resultado); // 321

resultado = Number('324e-1');
console.log(resultado); // 32,4

resultado = Number(true);
console.log(resultado); // 1

resultado = Number(false);
console.log(resultado); // 0


resultado = Number(null);
console.log(resultado); // 0


resultado = Number('');
console.log(resultado); // 0











// Converção de strings para números invalidos



let resultado;

resultado = Number('hello');
console.log(resultado); // NaN

resultado = Number(undefined);
console.log(resultado); // NaN


resultado = Number(NaN);
console.log(resultado);








// OBS: Nota : Você também pode gerar números de strings usando parseInt(), parseFloat(), operador unário +e Math.floor(). Por exemplo,


let resultado;

resultado = parseInt('20.01');
console.log(resultado); // 20

resultado = parseFloat('20.01');
console.log(resultado); // 20.01

resultado = +'20.01';
console.log(resultado); // 20.01

resultado = Math.floor('20.01');
console.log(resultado);






// NUMBER TO STRING

let resultado;

resultado = String(324);
console.log(resultado);


resultado = String(2 + 4);
console.log(resultado); // "6"



resultado = (324).toString();
console.log(resultado);


resultado = true.toString();
console.log(resultado);





*/





//  3. Converta explicitamente para booleano



let  resultado;

resultado = Boolean('');
console.log(resultado); // false

resultado = Boolean(0); 
console.log(resultado); // false

resultado = Boolean(undefined);
console.log(resultado); // false



resultado = Boolean(321);
console.log(true);

