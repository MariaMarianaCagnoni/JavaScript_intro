for(let i = 0;i < 10 ;i++ ){

    console.log('testando loop',i)
}

console.log(i) // o 'i' nao será impresso e irá retornar um erro,pois o let ficará somento no escopo   local;
/* 
ReferenceError: i is not defined */