//funcao sem retorno -> procedimento

function imprimirSoma(a,b){

    console.log(a+b)
};

imprimirSoma(2,6);
imprimirSoma(3,7,8,5,4)// ele só vai somar os dois primeiros e ignorar o resto

//funcao com retorno

function soma(a,b=0){

    return a+b;


}
console.log(soma(2,3))
console.log(soma(2)) //somente 2 pq defini o b como zero