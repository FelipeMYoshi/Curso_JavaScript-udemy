// "let" pode ser utilizada como "var" para declarar uma variável
let preco = 19.90;
let desconto = 0.4;

//Ex 1:
console.log(19.90 * 0.6);
console.log(1 - desconto)

//Ex 2:
console.log(preco * (1 - desconto));

//Ex 3:
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

//Concatenar Strings
let nome = "Caderno";
let categoria = "Papelaria";
console.log("Produto: " + nome 
+ ", Categoria: " + categoria 
+ ", Preço: " + preco 
+ ", Desconto: " + desconto);

