function resultado(nota) {
    if(nota >= 7) {
        console.log('Aprovado: ' + nota);
    }
}

resultado(8.1)
resultado(6.1)

function verdadeiro(valor) {
    if(valor) {
        console.log('É verdade que...' + valor);
    }
}

verdadeiro();
verdadeiro(null);
verdadeiro(undefined);
verdadeiro(NaN);
verdadeiro('');
verdadeiro(0);
verdadeiro(-1);
verdadeiro(' ');
verdadeiro('?');
verdadeiro([]);
verdadeiro([1, 2]);
verdadeiro({});
