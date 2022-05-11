// Desafio 9
function encode(string1) {
    let arrayCodificado = []
    let string1Array = string1.split("")
    for (let index in string1Array) {
      switch (string1Array[index]) {
        case "a":
          arrayCodificado.push(1);
          break;
  
        case "e":
          arrayCodificado.push(2);
          break;
  
        case "i":
          arrayCodificado.push(3);
          break;
  
        case "o":
          arrayCodificado.push(4);
          break;
  
        case "u":
          arrayCodificado.push(5);
          break;
  
        case string1Array[index]:
          arrayCodificado.push(string1Array[index])
      }
    }
    let stringCodificada = arrayCodificado.join("")
    return stringCodificada
  }
  
  function decode(string1) {
    let arrayDecodificado = []
    let string1Array = string1.split("")
    for (let contador in string1Array) {
      switch (string1Array[contador]) {
        case "1":
          arrayDecodificado.push("a");
          break;
  
        case "2":
          arrayDecodificado.push("e");
          break;
  
        case "3":
          arrayDecodificado.push("i");
          break;
  
        case "4":
          arrayDecodificado.push("o");
          break;
  
        case "5":
          arrayDecodificado.push("u")
          break;
  
        case string1Array[contador]:
          arrayDecodificado.push(string1Array[contador])
  
      }
    }
    let stringDecodificada = arrayDecodificado.join("")
    return stringDecodificada
  }
  
  module.exports = {encode, decode}