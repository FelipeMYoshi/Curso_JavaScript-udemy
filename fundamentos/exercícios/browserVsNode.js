/*Explicação sobre global e local utilizando Node.js
 * Dentro de Node cada arquivo é um módulo diferente
 * 
*/
let a = 3; //(local)

global.b = 123;

this.c = 456;
this.d = false;
this.e = "teste";

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//Criar variavel sem declarar var ou let pode prejudicar a variavel do objeto global.
abc = 3;
console.log(global.abc);
