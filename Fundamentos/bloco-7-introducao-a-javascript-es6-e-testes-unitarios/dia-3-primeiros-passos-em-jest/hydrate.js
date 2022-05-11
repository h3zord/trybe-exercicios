// Desafio 13
function hydrate(string) {
    // seu código aqui
    let reg = /\d+/g;
    let result = string.match(reg);
    let soma = 0;
    for (let index of result) {
      soma += parseInt(index)
    }
    if (soma <= 1) {
      return soma + ' copo de água'
    } else {
      return soma + ' copos de água'
    }
   
  }

  module.exports = hydrate;