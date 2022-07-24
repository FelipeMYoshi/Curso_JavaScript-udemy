const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in num) { //percorre o menor indice no array
    if (x == 5) { // se o valor do indice for igual a 5 
        break     // "break" interrompe o código e segue para a proxima linha
    }
    console.log(`${x} = ${num[x]}`) // imprime o indice e o valor percorrido dentro do array
}
console.log()

for (let y in num) {
    if (y == 5) { // ao percorrer o array interrompe a o laço quando o indice for igual a 5
        continue  //e continua o laço
    }
    console.log(`${y} = ${num[y]}`)
}

externo: for (let a in num) { // não muito utilizado por ser complexo a leitura
    for (let b in num) {      //o ideal é quebrar a estrutura
        if(a == 4 && b == 3)
        break externo
        console.log(`Par = ${a},${b}`)
    }
}