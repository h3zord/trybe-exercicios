const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'manhã'
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const allLessons = {};

//   const addTurno = (lesson, key, value) => {
//       lesson[key] = value;
//       console.log(lesson);
//   }

//   addTurno(lesson2, 'turno', 'noite');

//   const showKeys = (obj) => Object.keys(obj)

//   console.log(showKeys(lesson1));

//   const showLength = (obj) => Object.keys(obj).length

//   console.log(showLength(lesson1));

//   const showValues = (obj) => Object.values(obj);

//   console.log(showValues(lesson3));

  const fusionLessions = (objDestiny) => Object.assign(objDestiny, { lesson1, lesson2, lesson3 });

  console.log(fusionLessions(allLessons));

  const totalStudents = (obj) => {
      const somatory = obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
      return somatory;
      
  }

  console.log(totalStudents(allLessons));

  const getValueByNumber = (lesson, position) => {
      return Object.values(lesson)[position]
  }

  console.log(getValueByNumber(lesson2, 2));

  const verifyPair = (obj, key, value) => {
      let boolean = false;
      const arr = Object.entries(obj)
      for (let index in arr) {
          if (arr[index][0] === key && arr[index][1] === value) {
            boolean = true;
          }
      }

      return boolean
  }
  
  console.log(verifyPair(lesson2, 'turno', 'manhã'));
  