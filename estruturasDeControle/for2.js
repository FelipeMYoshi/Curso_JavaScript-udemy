// For in não é muito utilizado para percorer indice em array mas para objeto 
//pode ser uma opção
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Yoshimoto',
    idade: 43,
    peso: 84
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

