let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index+= 1) {
    console.log(numbers[index])
}


let somaNumbers = 0

for (let index = 0; index < numbers.length; index+= 1) {
    somaNumbers = somaNumbers + numbers[index];
    
}

console.log(somaNumbers);

