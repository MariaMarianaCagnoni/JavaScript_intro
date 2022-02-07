const pessoa ={
        saudacao: 'bom dia!',
        falar(){
            console.log(this.saudacao)
        }
}
pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // o bind 'arrama' o objeto para que na haja conflito de scopo em referencia ao this
falarDePessoa()
