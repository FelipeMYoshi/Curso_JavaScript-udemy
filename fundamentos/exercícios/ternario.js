//Operador ternário ( 3 operandos)
//Criando uma função arrow "=>"
/* 1. Cria uma constante que será uma função "resultado"
 * 2. Cria um parâmetro "nota"( por ser apenas um, não necessita de parêntese )
 * 3. Utiliza a "=>" seta criando a função
 * 4. Declara a expressão relacional "nota >= 7"(operador ternário)
 * 5. Utiliza o operador ternário "?" (operador ternário)
 * 6. Declara a condição lógica " 'aprovado' : 'reprovado' "
*/
const resultado = nota => nota >= 7 ? 'aprovado' : 'reprovado';

console.log(resultado(7.1))
console.log(resultado(6.9))
