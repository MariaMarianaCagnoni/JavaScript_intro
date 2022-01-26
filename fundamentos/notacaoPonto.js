console.log(Math.ceil(9.1)); //arredonanda pra cima
console.log(Math.floor(6.9)); //arredonda para baixo
console.log(Math.log(9)) // logaritmo
console.log(Math.random(8)); //numero randomico



const any1 = {}
any1.nome = 'gustavo';
console.log(any1);

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log('poxa :D');
    }

}
const Obj2 = new Obj('maria');
console.log(Obj2.nome);
const Obj3 = new Obj('cadeira');
const Objt4 = new Obj('cama');
console.log(Obj3.nome,Objt4.nome);