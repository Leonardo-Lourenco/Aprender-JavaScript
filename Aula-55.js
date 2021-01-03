


// Adicionar um elemento a uma matriz multidimensional


/*


// Adicionado elementos em uma Matriz EXTERNA

let dadosESTUDANTE = [['Leo', 28], ['Rebeca', 23]];
dadosESTUDANTE.push(['Peter', 26]);

console.log(dadosESTUDANTE);






// Adicionando valores em uma MATRIZ INTERNA


let dadosESTUDANTE = [['Leo', 28], ['Rebeca', 23]];
dadosESTUDANTE[1][2] = 'Ola';

console.log(dadosESTUDANTE);





// Adicionando valores em uma determinada posião com o PUSH


let dadosESTUDANTE = [['Leo', 28], ['Rebeca', 23]];
dadosESTUDANTE[1].push('ola');

console.log(dadosESTUDANTE);

*/


// Adicionando usando o SPLICE

let dadosESTUDANTE = [['Leo', 28], ['Rebeca', 23]];

dadosESTUDANTE.splice(1, 0, ['Bruna', 29]);

console.log(dadosESTUDANTE);