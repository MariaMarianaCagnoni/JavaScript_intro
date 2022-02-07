//criar de forma literal
function fun1() { }

//armazenar em uma variavel
const fun2 = function () { }

//armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]

console.log(array[0](4, 7), fun2());
//array[0 ---> primeira função](valores de a,b)



//armazenar em um atributo de um objeto

const obj = {}
obj.falar = function(){return 'opa !!!'}
console.log(obj.falar());

//passar função como parametro

function run(fun){
    fun()

}
run(function(){console.log('testando...')})


//uma função pode retornar/conter outra funcao

function soma( a,b ){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,6)(8)