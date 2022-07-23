function teste1(num) {
    if(num > 7) // quando não utiliza bloco na condição,
        console.log(num); // é considerado apenas a linha seguinte 
        console.log('final'); //sempre será executada por não ter bloco e ser associada ao "if"
}

teste1(6);
teste1(8);

function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)
