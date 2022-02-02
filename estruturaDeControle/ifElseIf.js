Number.prototype.entre = function (inicio, fim) {


    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {

    if (nota.entre(9, 10)) {
        console.log('aprovadissimo')
    } else if (nota.entre(7, 8.99)) {
        console.log('passou!')
    } else if (nota.entre(4, 6)) {
        console.log('recuperação')
    } else {
        console.log('reprovado')
    }

}
imprimirResultado(3);