/*Operadores lógicos
      E(&&) se algum operando for falso o resultado será falso
 * V e V -> V
 * V e F -> F
 * F e ? -> F
 * 
 *    OU(||) se algum operando for verdadeiro o resultado será verdadeiro
 * V ou ? -> V
 * F ou F -> F
 * 
 *    OU EXCLUSIVO(xor) se os operando forem iguais o resultado será falso
 * V xor V -> F
 * V xor F -> V
 * F xor V -> V
 * F xor F -> F
 * 
 *    NOT(!)
 * !V -> F
 * !F -> V
 * 
*/

function compras(trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2;
    const compraTv50 = trabalho1 && trabalho2;
    //const compraTv32 = !!(trabalho1 ^ trabalho2); // não existe xor em tipos booleanos no js. Pode utilizar bit a bit(bitwise xor)
    const compraTv32 = trabalho1 != trabalho2; 
    const semSorvete = !compraSorvete;

    return { compraSorvete, compraTv50, compraTv32, semSorvete } //ES2015 cria uma coleção chave:valor sem ser redundante 
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));