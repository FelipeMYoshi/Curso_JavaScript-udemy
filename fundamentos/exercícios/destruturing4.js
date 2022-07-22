function rand( [min =0, max = 1000]) {  //Abaixo desestruturando os atributos "min/max" e transformando em array[max, min]
    if ( min > max) [min, max] = [max, min]; // se o mínimo for maior que o máximo inverta
    const valor = Math.random() * (max - min) + min; // retorna o valor de random entre o min e max
    return Math.floor(valor); // Math.floor arredonda para "baixo"
}

console.log(rand([50, 40])); //declarando apenas valores
console.log(rand([995])); // declarando o mínimo
console.log(rand([ ,10])) // declarando o máximo
console.log(rand([])); // a linguagem entende como valor mínimo e máximo
//console.log(rand()); // sem parâmetros gera erro undefined

