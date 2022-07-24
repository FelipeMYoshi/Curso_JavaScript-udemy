function inteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao 

do {
    opcao = inteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida é: ${opcao}.`)
} while (opcao != -1)

console.log('Fim!')
