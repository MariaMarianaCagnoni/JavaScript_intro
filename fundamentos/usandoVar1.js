{
    {
        {
            { 
                var sera = 'sera???'
                console.log(sera);
            }
        }
    }
}

console.log(sera); //imprimiu ambos pois quando utilizado a palavra 'var', a variavel passa a ser global(mesmo em um escopo menor)


function teste(){

    var local = 123;

}
teste()
console.log(local); // em funcao nao funciona.A variavel passa a ser local

