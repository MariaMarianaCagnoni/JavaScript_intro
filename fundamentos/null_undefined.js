let valor; //nao inicializada
console.log(valor) //indefinied pois nunca foi atribuido um valor a variavel "valor"

valor = null  //nao esta apontando pra nenhum endereço de memoria

const produto = {}; //objeto vazio
console.log(produto.preco);

produto.preco = 9.8;
console.log(produto.preco.a); //o 'a' nao foi definido

//em javascript quase tudo é função
// Object -> função
//class -> função