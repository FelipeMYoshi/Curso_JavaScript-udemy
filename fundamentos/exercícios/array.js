const valores = [7.7, 8.3, 5.4, 9.2];
console.log(valores[0], valores[3]); // retorna valor do indice 0 e 3 
console.log(valores[4]);

valores[4] = 10.1; // Acrescenta valor no indice 4
console.log(valores);
console.log(valores.length); // retorna a quantidade de indices no array

valores.push({id: 3}, false, null, 'teste'); // "push" adiciona os dados ao array
console.log(valores);

console.log(valores.pop()); // retira o último objeto adicionado
delete valores[0]; // deleta o indice 
console.log(valores);

console.log(typeof valores); //
