// função utilizada para gerar valor
function soma1(a, b, c) { //a função soma os 3 parâmetros
    a = a || 1 // dentro da função declara que em caso o parâmtro  não seja informado
    b = b || 1 // a função já dispõe o parâmetro 1
    c = c || 1
    return a + b + c // retorna com a soma dos parâmetros
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // ex 

//estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a != undefined ? a : 1 // caso o "a" não seja informado/undefined o "a" assume 1
    b = 1 in arguments ? b : 1 // se dentro de "arguments" existir indice 1 assume b = 1
    c = isNaN(c) ? 1 : c // se a variável c for "NaN" retorna 1 caso contrario retorna valor de "c"
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão do ES2015
function soma3( a = 1, b = 1, c = 1) { // forma limpa e melhor adequada e segura
    return a + b + c
 }

 console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3( 0, 0, 0))