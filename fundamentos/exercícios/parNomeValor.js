// Par nome/valor
const saudacao = "Olá"; // Contexto léxico 1

function exe() {
    const saudacao = 'E aeee'; // Contexto léxico 2
    return saudacao
}

// Objetos são grups aninhados de pares nome/valor
const cliente = {
    nome: 'Felipe',
    idade: 43,
    peso: 87,
    endereco: {
        lagradouro: 'Rua Saucifufu',
        numero: 6010,
    }
}

console.log(saudacao);
console.log(exe());
console.log(cliente);