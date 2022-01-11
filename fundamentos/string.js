const escola = "cod3r        ";


console.log(escola.charAt(4)); // irá retornar a string no índice 4
console.log(escola.charCodeAt(3)); // irá me retornar o valor correspondente na tabela ASCII
console.log(escola.indexOf('3')) //verifica se existe o numero 3 na variavel 'escola'
console.log(escola.substring(2)); // ela mostra tudo depois do indice 2
console.log(escola.toUpperCase()); //passa tudo pro maisuculo
console.log(escola.trim()); //remove os espaços em branco
console.log('escola '.concat(escola.trim()).concat('!'));  //CONCAT CONCATENA UMA STRING A OUTRA
console.log(escola.replace(3, 'e')); //substitui no indice 3 a letra original pela letra 'e'
console.log("maria,ana,joao".split(",")); //seprando  por virgula,coloca-se em um array




