function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function days() {

let dayList = document.getElementById('days')

for (let index in dezDaysList) {
  let createLi = document.createElement('li')
  createLi.innerText = dezDaysList[index];
  createLi.className = 'day';
  
  switch (dezDaysList[index]) {
    case 24:
      createLi.className = 'day holiday';
      break;

    case 25:
      createLi.className = 'day friday holiday';
      break;

    case 31: 
      createLi.className = 'day holiday';
      break;

    case 4:
      createLi.className = 'day friday';
      break;

    case 11:
      createLi.className = 'day friday';
      break;

    case 18:
      createLi.className = 'day friday';    
      break;
  }
  
  dayList.appendChild(createLi);
}

}

days()


function holidays(buttonName) {
  let button = document.getElementsByClassName('buttons-container')[0];
  let button1 = document.createElement('button');
  button1.id = 'btn-holiday'
  button1.innerHTML = buttonName 
  button.appendChild(button1)
}

holidays('Feriados')

  
  let button2 = document.getElementById('btn-holiday');  
  button2.addEventListener('click', function() {   
    let classHoly = document.getElementsByClassName('holiday')
    let defaultColor = 'rgb(238,238,238)';
    let newColor = 'green'; 
    for (let index in classHoly) {
      if (classHoly[index].style.backgroundColor === newColor) {
        classHoly[index].style.backgroundColor = defaultColor;
      } else {
        classHoly[index].style.backgroundColor = newColor;
      }
    }
  })


  
  
function friday (buttonName1) {
  let button3 = document.querySelector('.buttons-container');
  let button4 = document.createElement('button')
  button4.id = "btn-friday";
  button4.innerText = buttonName1
  button3.appendChild(button4)
}

friday('Sexta-Feira')

let button5 = document.getElementById('btn-friday')
button5.addEventListener('click', function () {
  let classFriday = document.getElementsByClassName('friday')
  let newMessage = "É SEXTA!!!"
  let fridaydays = [4, 11 , 18, 25]

  for (let index in classFriday) {
    if (classFriday[index].innerHTML != newMessage) {
      classFriday[index].innerHTML = newMessage
    } else {
      classFriday[index].innerHTML = fridaydays[index]
    }
    
  }
  
})

let zoomDays = document.querySelector('#days')
zoomDays.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
})




let zoomDays1 = document.querySelector('#days');
    zoomDays1.addEventListener('mouseout', function(event) {    
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })


  
  function myTask(task) {
    let tarefas = document.querySelector('.my-tasks');
    let createTask = document.createElement('span');
    createTask.innerHTML = task;
    tarefas.appendChild(createTask)
  }

  myTask('Estudar');


function legenda(cor) {
  let tarefas = document.querySelector('.my-tasks');
  let createColor = document.createElement('div');
  createColor.className = 'task';
  createColor.style.backgroundColor = cor;
  tarefas.appendChild(createColor)

}

legenda('green')

