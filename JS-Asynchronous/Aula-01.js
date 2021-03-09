

// Javascript Método setTimeout()


// A sintaxe do Método setTimeout() é:

// setTimeout(function, millisecundos);


/*


// Exemplo 1: exibir um texto uma vez após 3 segundos


function exibir(){
    console.log('Hey Guys');
}


// Após 3 segundos:

setTimeout(exibir, 3000); // (3 segundos)
console.log('Curso JS Canal Coffee Tag');






// 02: O Método setTimeout() retorna o id do intervalo.



function exibir(){
    console.log('Hey Guys');
}


// Após 3 segundos:

let intevaloID = setTimeout(exibir, 3000);
console.log('Id: ' + intevaloID);







// Exemplo 03: Exibir o tempo a cada 3 segundos


function exibirTempo(){

    let dadosTempo = new Date();


    let tempo = dadosTempo.toLocaleTimeString();

    console.log(tempo);


    setTimeout(exibirTempo, 3000);;
}

exibirTempo();










// Exemplo 04 : JavaScript clearTimeout ()


// clearTimeout(intervaloID);


let contador = 0;


function incrementoContador(){


    contador += 1;
    console.log(contador)
}

 let id = setTimeout(incrementoContador, 3000);


 clearTimeout(id);
 console.log('setTimeOut parado');


*/







// Você também pode passar argumentos adicionais para o Método setTimeout() como abaixo:


// setTimeout(function, millisecundos, parametro1, ..........parametrosN);



function exibir(nome, sobrenome){
    console.log('Ola' + '' + nome + '' + sobrenome);
}

setTimeout(exibir, 1000, 'Leo', 'Canal Coffee Tag');