Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimaResultado = function (nota) {
    if(nota.entre(9, 10)) {
        console.log('Aprovado com Honra');
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado');
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado');
    } else {
        console.log('Valor inválido');
    }
}

imprimaResultado(10)
imprimaResultado(8)
imprimaResultado(6.9)
imprimaResultado(4)
imprimaResultado(3)
imprimaResultado(11)
imprimaResultado(-1)
