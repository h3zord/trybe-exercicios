// let fatorial = 10;
// let resultado = 1;


// for (let index = 1; index <= fatorial; index += 2) {
//     resultado = resultado * (index * (index +1))

// }

// console.log(resultado);



// let word = "Tryber";
// let invertida = [];

// for (index = word.length - 1; index >= 0; index -= 1) {
//     invertida.push(word[index])
// }

// console.log(invertida);

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = 0;
// let teste = ""



// for (let index = 0; index < array.length; index += 1) {
//     let contador = array[index].length;
//     if (contador > maiorPalavra) {
//         maiorPalavra = array[index].length;    
//         teste = array[index]

// }
// }

// console.log(teste);

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array[0].length;
// let teste = ""



// for (let index = 0; index < array.length; index += 1) {
//     let contador = array[index].length;
//     if (contador < maiorPalavra) {
//         maiorPalavra = array[index].length;    
//         teste = array[index]

// }
// }

// // console.log(teste);

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);