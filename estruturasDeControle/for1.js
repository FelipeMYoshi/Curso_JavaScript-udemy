let cont = 1;

while(cont <= 10) { //estrutura while "enquanto". Inicia a rodada com cont = 1 até <= a 10
    console.log(`Contador = ${cont}`); // imprime o valor de "cont" a cada rodada
    cont++ // encrementa +1 a cada rodada
}

for(let i = 1; i <= 10; i++) { // inicia o código com i=1,percorre até i<=10 e incrementa +1 a cada rodada
    console.log(`i = ${i}`); // imprime o valor de i
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] // criou array com as notas
for(let i = 0; i < notas.length; i++) { // inicia i=0, percorre o array do menor indice ao maior
    console.log(`Nota = ${notas[i]}`) // imprime o valor acessado a cada rodada
}
