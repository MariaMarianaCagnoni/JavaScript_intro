const valores  = [7.7,3.5,6.7,9.0];
console.log(valores[0],valores[3]); //javascript por ser uma linguagem de tipagem fraca aceita introduzir novos valores no array


valores[4]= 32;
console.log(valores[4]);
console.log(valores);

valores[9] = 'teste';
console.log(valores); //entre o indicie 4 e o indice 9 > empty items  <
console.log(valores.length); // me diz quantas posições tem no array

valores.push(33); //add no final do array
console.log(valores); 

valores.pop();
console.log(valores); //retira o ultimo valor do array
delete valores[0];   //o delete dá para especificar o indicie a ser deletado
console.log(valores);

console.log(typeof valores); // em javaScript um array é do tipo object