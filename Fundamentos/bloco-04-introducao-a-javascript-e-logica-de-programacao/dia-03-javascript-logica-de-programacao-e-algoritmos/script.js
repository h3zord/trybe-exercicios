let fatorial = 10;
let resultado = 1;


for (let index = 1; index <= fatorial; index += 2) {
    resultado = resultado * (index * (index +1))

}

console.log(resultado);