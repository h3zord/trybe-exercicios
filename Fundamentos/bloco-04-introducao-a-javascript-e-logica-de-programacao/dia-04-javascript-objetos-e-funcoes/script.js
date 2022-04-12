// let storage = '';

// function verificaPalind (palavra) {
//     let teste = palavra
//     for (let i = teste.length -1; i >= 0; i -= 1); {
//             storage = storage + teste[i];

//     }
//             if (teste == storage) {
//                 console.log("true")
//             } else {
//                 console.log("false")            
//             }
    

// }


// verificaPalind('arara');

let maiorValor = 0;

function maiorIndice (array) {

    for (let i  =  0; i < array.length; i += 1) {
        if (array[i] > maiorValor) {
            maiorValor = array[i]
        }
    }
        console.log("O indice do maior valor é " + array.indexOf(maiorValor))
}

maiorIndice[1, 4, 7, 9, 87, 4, 76, 43]