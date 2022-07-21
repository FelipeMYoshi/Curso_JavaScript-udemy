const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';

// Apenas para exemplificar a quebra de linha 
const template = `
    Olá
    ${nome}!`; // ${variavel/constante} interpola a string

console.log(concatenacao, template);

//expressões
console.log(`1 + 1 =  ${1 + 1}`);

// Exemplo de conversão em maiúscula
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);


