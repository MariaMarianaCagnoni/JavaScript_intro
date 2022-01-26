const pessoa = {
    nome: 'lucas',
    idade: 5,
    endereco: {
        logradouro: 'rua das favas',
        cidade: 'campinas',
        numero: 287

    }


}

const { nome, idade } = pessoa
console.log(nome, idade);


const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)


const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, nome, cep);

const { conta: { ag, num } } = pessoa //nao existe portando vai dar erro
console.log(ag,num)