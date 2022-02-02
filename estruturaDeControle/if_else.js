const imprimirResultado = function (nota) {
    if (nota >= 7) {
        return 'aprovado'


    } else {

        return 'não aprovado'


    }

}

console.log(imprimirResultado(5));

const imprimirResultado2 = function (nota) {
    if (nota >= 7) {
        return 'aprovado'
    } else if (nota >= 5 && nota <= 6.9) {

        return 'recuperacao'

    } {
        return 'reprovado'
    }


}

console.log(imprimirResultado2(5.1));