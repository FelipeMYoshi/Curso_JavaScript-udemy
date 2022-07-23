// Operadores relacionáis 
// *observe que abaixo o '01)' é uma string
console.log('01)', '1' == 1); // == compara os valores se são iguais *true
console.log('02)', '1' === 1); //  === é estritamente igual? '1' é string e 1 int *false
console.log('03)', '3' != 3 ); // != diferente
console.log('04)', '3' !== 3 ); // !== estritamente diferente

console.log('05)', 3 < 2 );
console.log('06)', 3 > 2 );
console.log('07)', 3 <= 2 );
console.log('08)', 3 >= 2 );

const d1 = new Date(0); //variável de referência em local da memoria
const d2 = new Date(0);
console.log('09', d1 == d2); // compara referência de memoria
console.log('10', d1 === d2);
console.log('11', d1.getTime() === d2.getTime()); // .getTime refere valor do tempo em milisegundos

console.log('12', undefined == null);
console.log('12', undefined === null);

// via de regra, utilizar === por não ignorar os tipos
