const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  function formatedBookNames(arr) {
    // escreva seu código aqui
   const result =  arr.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)

    return result;

  }

//   console.log(formatedBookNames(books));

function nameAndAge(arr) {
    // escreva seu código aqui
  const result = arr.map((element) => {
    return { 
      age: element.releaseYear - element.author.birthYear,
      author: `${element.author.name}`,          
    }
  })
  const newResult = result.sort((a, b) => a.age - b.age);
  return newResult;
}

// console.log(nameAndAge(books));

function fantasyOrScienceFiction(arr) {
    // escreva seu código aqui
    const result = arr.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica')
    return result;
  }

//   console.log(fantasyOrScienceFiction(books));


function oldBooksOrdered(arr) {
    // escreva seu código aqui
    const result = arr.filter((element) => 2022 - element.releaseYear > 60)
    const newResult = result.sort((a, b) => a.releaseYear - b.releaseYear)
    return newResult;
  }

//   console.log(oldBooksOrdered(books));

function fantasyOrScienceFictionAuthors(arr) {
    // escreva seu código aqui
    const result = arr.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica' ? true : false)
    const newResult = result.map((element) => element.author.name)
    const orderNewResult = newResult.sort();
    return orderNewResult;
  }

//   console.log(fantasyOrScienceFictionAuthors(books));

  
  function oldBooks(arr) {
    // escreva seu código aqui
    return arr.filter((element) => (2022 - element.releaseYear) > 60).map((element) => element.name)

  }

//   console.log(oldBooks(books));

const authorWith3DotsOnName = (arr) => arr.filter((element) => element.author.name[1] === '.' && element.author.name[4] === '.' && element.author.name[7] === '.').map((element) => element.name)


console.log(authorWith3DotsOnName(books));