var numero = 1;
{
    let numero = 2; // escopo local
    console.log('dentro =', numero);
}
console.log('fora =', numero); // escopo global