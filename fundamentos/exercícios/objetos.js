const prod1 = {}; // Cria uma coleção vazia
prod1.nome = 'Celular Mega Zord'; // Acrescenta a chave "nome" e declara o objeto no valor
prod1.preco = 45.678;
prod1['Desconto'] = 0.40 

console.log(prod1)

// Cria a coleção de objetos 
const prod2 = {
    nome : 'Camisa',
    preco : 79.99,
    desconto: {
            descontoAVista : 59.99,
            descontoCredito : 69.99
    }
}

'{ "nome": "Camisa", "preco": 79.99}' // ex de json

console.log(prod2);