const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra');
            break
        case 8:
        case 7:
            console.log('Aprovado(a)');
            break
        case 6:
        case 5:
            console.log('recuperação');
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log('reprovado(a)');
            break
        default:
            console.log('nota inválida');
    }
}

imprimirResultado(10);
imprimirResultado(3);
imprimirResultado(7.9);
imprimirResultado('olá')



//se não add o break,o código toda será executado

//não é possivel colocar intervalos no Switch.