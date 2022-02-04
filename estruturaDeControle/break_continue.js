teste = [1,2,3,4,5,6,7,,8,9,10]

for(loop in teste){
    if(loop == 5 ){
        console.log('---saiu do loop---')         ///o break interrompo o fluxo e sai do laço
        
        break;
        
    }
    
    console.log('')
    console.log(`indice ${teste[loop]}`)
}


for(y in teste){
    if(y == 5 ){
        continue             ///o continue pula e continua iterando
    }
    console.log(`${y} = ${teste[y]}`)

}

externo:  //criando um rótulo
for(a in teste){
    for( b in teste){
        if(a == 2 && b == 3 )
        break externo //portando o break vai atuar no laço externo por conta do rotulo e nao no interno
        console.log(`par = ${a},${b}`)
    }
}