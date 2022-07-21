const escola = "Cod3r"

console.log(escola.charAt(4)); // "charAt(x)" retorna a letra na posição declarada
console.log(escola.charAt(5)); // quando não encontra não causa erro
console.log(escola.charCodeAt(3)); // retorna o código relacionado a tabela unicode declarado 
console.log(escola.indexOf('3')); // retorna a casa onde o indice se encontra

console.log(escola.substring(1)); // retorna a partir do indice 1 em diante
console.log(escola.substring(0, 3)); // retorna do indice 0 até 3 

console.log('Escola '.concat(escola).concat("!")); // "concat" concatena as strings
console.log('Escola ' + escola + "!"); // outro modo de concatenar

console.log(escola.replace(3, 'e'));// "replace" substitue o caractere informado 

console.log('Ana, Maria, Pedro'.split(','));// "split" separa as strings pelo caractere declarado('x')
console.log('3' + 2)
