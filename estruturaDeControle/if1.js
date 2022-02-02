function sóNoticiaboa(nota) {


    if (nota >= 7) {
        console.log('você esta aprovado');



    } else {
        console.log('você foi reprovado,estude mais');
    }
}

sóNoticiaboa(5)

function seForVerdadeEuFalo(valor) {

    if (valor) {
        console.log('é verdade..' + valor);

    }
}
seForVerdadeEuFalo();  //false
seForVerdadeEuFalo(null); //false
seForVerdadeEuFalo(undefined); //false
seForVerdadeEuFalo(NaN); //false
seForVerdadeEuFalo('');  //false
seForVerdadeEuFalo(-1);  //true
seForVerdadeEuFalo(' '); //true
seForVerdadeEuFalo([]);  //true
seForVerdadeEuFalo([1,2]); //true
seForVerdadeEuFalo({})  //true

