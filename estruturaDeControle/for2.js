const notas =[ 334,5.985,9,8,3.64567]

for (let i in notas){

    console.log(i,'° nota - ',notas[i])
}


const pessoa ={

    Nome: 'ana',
    Idade: 32,
    Sexo: 'F',
    Cidade: 'Campinas'
}

console.log(pessoa)                       //a estrura IN é mais utilizada em objetos

for(let i in pessoa){
    console.log(pessoa[i])
}