// Desafio 10
function techList(tec, name) {  
    array = [];
    tecSort = tec.sort();
      for (let index = 0; index < tecSort.length; index += 1) {        
              array.push({
                  tech: tecSort[index],
                  name: name
                  
              })              
          }
          if (tec.length == 0) {
            return 'Vazio!'
          } else {
            return array
          }
      }

      

      module.exports = techList;