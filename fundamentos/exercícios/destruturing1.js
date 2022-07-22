// Recurso introduzido no EcmaScript 2015

const pessoa = {
    nome: 'Felipe',
    idade: 43,
    endereco: {
        lagradouro: 'Rua Gluglu',
        numero: 6969        
    }
}

const { nome, idade } = pessoa; // destruturing *retire  o nome e a idade do objeto "pessoa"
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n , i);
console.log(pessoa);

const { endereco: e } = pessoa;
console.log(e);

const { sobrenome, bemHumorado = true }= pessoa;
console.log(sobrenome, bemHumorado);

const { endereco : { lagradouro, numero, cep } } = pessoa;
console.log(lagradouro, numero, cep);