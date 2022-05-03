// function verificaPalind (word) {
//     for (let i = 0; i < word.length; i += 1) {
//         if (word[i] == word[word.length -1 -i]) {
//             return true
//         } else {
//             return false
//         }
//     }
// }

// console.log(verificaPalind('arara'));

// function maiorIndice (array) {
//     let maiorNumero = 0;
//     let indice = 0;
//     for (let index in array) {
//         if (array[index] > maiorNumero) {
//             maiorNumero = array[index]
//             indice = index
            
//         }
//     }

//     return indice
// }

// console.log(maiorIndice([2, 3, 6, 7, 10, 1, 98]))

// function maiorIndice (array) {
//     let maiorNumero = 0;
//     let indice = 0;
//     for (let index in array) {
//         if (array[index] < maiorNumero) {
//             maiorNumero = array[index]
//             indice = index
            
//         }
//     }

//     return indice
// }

// console.log(maiorIndice([2, 4, 6, 7, 10, 0, -3]))


// function maiorNome (array) {
//     let maiorPalavra = 0;
//     let nome = ""
//     for (let index in array) {
//         if (array[index].length > maiorPalavra) {
//             maiorPalavra = array[index].length
//             nome = array[index]
//         }
//     }

//     return nome
// }

// console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// function numeroRepetido (array) {
//     let maisVezes = 0;
//     let numero = 0;

//     for (let index in array) {
//         let maisvezes2 = 0;
//         for (let contador in array) {
//             if (array[index] == array[contador]) {
//                 maisvezes2 += 1;
//                 if (maisvezes2 > maisVezes) {
//                     maisVezes = maisvezes2;
//                     numero = array[index];

//                 }
//             }
//         }
//     }

//         return numero;
// }

// console.log(numeroRepetido([2, 3, 2, 5, 8, 2, 3, 3, 4, 3]));