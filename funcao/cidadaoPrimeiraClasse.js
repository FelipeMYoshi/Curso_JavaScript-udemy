// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

// armazenar em uma vairável
const fun2 = function() { }

// armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log('Função armazenado em array ', array[0](2, 3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Função em atrubuto de objeto "Teste"'}
console.log(obj.falar())

// passar função como parametro
function run(fun) {
    fun() // se tirar o parêntese não invoca a função abaixo
}
run(function() { console.log('Função como parâmetro')})

// Uma função pode retornar/conter uma função
function soma(a, b) { // umafunção de soma de a e b
    return function (c) { // retorna com a função c
        console.log(a + b + c) // e só retorna a soma após o terceiro parâmetro
    }
}
soma(2, 3)(4) // chama a função "soma" e passa o parâmetro a,b e depois o c
//ou
const somaaebe = soma(2, 3)
somaaebe(4)