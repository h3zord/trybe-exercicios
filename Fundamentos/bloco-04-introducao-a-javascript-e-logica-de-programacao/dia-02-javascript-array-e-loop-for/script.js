let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index+= 1) {
//     console.log(numbers[index])
// }


// let somaNumbers = 0

// for (let index = 0; index < numbers.length; index+= 1) {
//     somaNumbers = somaNumbers + numbers[index];
    
// }

// console.log(somaNumbers);

// let somaNumbers = 0;

// for (let index = 0; index < numbers.length; index+= 1) {

//      somaNumbers = somaNumbers + numbers[index];

//     }
    
//     let mediaArit;
//     mediaArit = somaNumbers / numbers.length;
//     console.log(mediaArit);

//     if (mediaArit > 20) {
//         console.log("Valor maior que 20")
//     } else {
//         console.log("Valor menos que 20")
//     }

// let maiorValor = 0;

// for (let index = 0; index < numbers.length; index+= 1) {

//     if (numbers[index] > maiorValor) {
//         maiorValor = numbers[index]
//     } else {
//         maiorValor = maiorValor;
//     }
// }

// console.log(maiorValor);

// valoresImpares = 0;

// for (let index = 0; index < numbers.length; index+= 1) {

//     if (numbers[index] % 2 != 0) {
//         valoresImpares = valoresImpares + 1
//     } 
// }

// console.log(valoresImpares)




// let menorValor;

// for (let index = 0; index < numbers.length; index += 1) {

//     if (menorValor > numbers[index]) {
//         menorValor = numbers[index]
//     } else {
//         menorValor = menorValor
//     }

// }

// console.log(menorValor);




let box = [];

for (index = 1; index < 26; index += 1) {
    box.push(index)
}

console.log(box)

for (contador = 0; contador < box.length; contador += 1) {
    let resultadoDaDiv = box[contador] / 2;
    console.log(resultadoDaDiv);
}




