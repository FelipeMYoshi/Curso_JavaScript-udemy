console.log(Math.ceil(6.1)) //Math.ceil função de arredondamento 

const obj1 = {};
obj1.nome = 'Bola';

//obj1['nome'] = 'Bola2'; // poder ser utilizada porém para acessar considere mais caracterers

console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome //cria um atributo público  usando "this."
    this.exe = function(){
        console.log('Executando')
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exe()