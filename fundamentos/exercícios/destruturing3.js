// Criando uma função de nuúmeros aleatório entre 0 e 1000
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { max:70, min: 0}; // passa parâmtro no objeto máximo 70 e mínimo 0
console.log(rand(obj)); // passa o objeto como parâmtro
console.log(rand({ min: 900})); // define apenas o parâmetro desejado
console.log(rand({})); // pode utilizar sem parâmetro 
// console.log(rand()); // gera erro por não declarar nenhum parâmetro




