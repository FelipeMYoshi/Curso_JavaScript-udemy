const imprimeResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado: ' + nota);
    } else {
        console.log('Reprovado: ' + nota);
    }
}

imprimeResultado(9.1)
imprimeResultado(6.1)
imprimeResultado('Dez') // Atenção a linguagem fracamente tipada.
