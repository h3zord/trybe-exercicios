const info = (nomeCompleto) => { 
    const obj = {
        nomeCompleto: nomeCompleto, 
        email: `${nomeCompleto.toLowerCase().split(' ').join('_')}@trybe.com`,
    }
    return obj;
}
    

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    }
    return employees;
}

// console.log(newEmployees(info));

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

// console.log(lotteryResult(2, numberChecker));
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verify = (gabarito, aswers) => {
    if (gabarito === aswers) {
        return 1
    } if (aswers === 'N.A') {
        return 0;
    } 
    return -0.5

    }


const test = (gabarito, aswers, callback) => {    
    let contador1 = 0;
    for (let index = 0; index < gabarito.length; index +=1) {
        let contador2 = callback(gabarito[index], aswers[index]);
        contador1 += contador2
    }
    return contador1;
}

console.log(test(RIGHT_ANSWERS, STUDENT_ANSWERS, verify));
