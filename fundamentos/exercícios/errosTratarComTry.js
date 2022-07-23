//
/*function imprimirNomeMaiusculo(obj) {
    console.log(obj.name.toUpperCase() + '!!!'); //utilizou "name"
}

const obj = {nome: 'Felipe'}; // digitado erra para causar o erro, o correto é "name" 
imprimirNomeMaiusculo(obj);

*GERA ERRO!
*console.log(obj.name.toUpperCase() + '!!!');
                         ^

TypeError: Cannot read properties of UNDEFINED (reading 'toUpperCase')
*/

//Uma possibilidade de tratar o erro com o comando "try"
function imprimirNomeMaiusculo(obj) {
    try{  //utilizar caso queira tratar um erro ou criar uma exceção
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) { // associar "cath" capturando a exceção
        tratarErroELancar(e); // cria-se uma função para lancar o erro e parâmetro "e"
    } finally {
        console.log('final'); // independente do erro entrando no "catch" a mensagem 
    }
}

function tratarErroELancar(erro) {
    //throw new Error('Mensagem de erro... ')
    //throw 10
    //throw false
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

const obj = { nome: 'Felipe'}; // digitado erra para causar o erro, o correto é "name" 
imprimirNomeMaiusculo(obj);