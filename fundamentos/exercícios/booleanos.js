// Falso, verdadeiro e negação(false, true, not)
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo); // "!" not

console.log('os verdadeiros');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(!!'Texto');

console.log('os falsos');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('demonstrando');
console.log(!!('' || null || 0 || ' ' || 123)) // "||" ou 

let nome = ''

console.log(nome || 'Desconhecido'); // Caso a variável seja vazia, retorna o valor verdadeiro