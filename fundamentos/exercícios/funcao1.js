function imprimaSoma(a, b){
    console.log(a + b)
};

imprimaSoma(2, 3);
imprimaSoma(2); // retorna NaN pois o segundo valor é undefined
imprimaSoma(2 , 5, 2, 3, 4, 5, 6, 7); // o js considera apenas os 2 primeiros valores
imprimaSoma() // retorna NaN pois os dois valores são undefined

// Função com retorno
function soma(a = 0, b = 0) {
    return a + b
};

console.log(soma(2, 8));
console.log(soma());