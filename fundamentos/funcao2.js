//armazenando uma funcao em uma variavel

const imprimirSoma = function(a,b){ //funcao anônima

console.log(a + b);
}
 //no javascript é possivel salvar uma funcao dentro de uma variavel
imprimirSoma(3,2);

//armazenando uma funcao arrow em uma variavel 

const soma = (a,b) =>{

    return a + b;
}

console.log(soma(1,3));

//retorno implícito

const subtracao = (a,b) => a - b //se nao tiver chaves,irá executar apenas uma linha de codigo

console.log(subtracao(8,4));

const imprimir2 = a => console.log(a)
imprimir2('legal')