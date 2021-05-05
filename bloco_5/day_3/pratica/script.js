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
  
  //Exercicio 1
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth() {
    let dayList = document.querySelector('#days');

    for(i = 0; i < dezDaysList.length; i += 1) {
      let day = dezDaysList[i];
      let dayLi = document.createElement('li');
      
      if(day == 24 || day == 31) {
        dayLi.className = 'day holyday';
        dayLi.innerHTML = day;
        dayList.appendChild(dayLi);
      } else if (day == 4 || day == 11 || day == 18) {
        dayLi.className = 'day friday';
        dayLi.innerHTML = day;
        dayList.appendChild(dayLi);
      } else if (day == 25) {
        dayLi.className = 'day friday holyday';
        dayLi.innerHTML = day;
        dayList.appendChild(dayLi);
      } else{
        dayLi.innerHTML = day;
        dayLi.className = 'day';
        dayList.appendChild(dayLi);
      }
    }
  };
  createDaysOfTheMonth();

  //Exercicio 2
  function holyDayButton(bttName) {
    const divButtonsContainer = document.querySelector('.buttons-container');
    const button = document.createElement('button');
    button.id= 'btn-holyday';
    button.innerHTML = bttName;
    divButtonsContainer.appendChild(button);
  }

  holyDayButton('Feriados');
  //Exercicio 3
function showHolyDays() {
    const holyButton = document.querySelector('#btn-holyday');
    const holydays = document.querySelectorAll('.holyday');
    const originalColor = 'rgb(238,238,238)';
    const newColor = 'red';

    holyButton.addEventListener('click', function(){
      for(i = 0; i < holydays.length; i += 1){

        if(holydays[i].style.backgroundColor == newColor){
          holydays[i].style.backgroundColor = originalColor;
        }else{
          holydays[i].style.backgroundColor = newColor;
        }
      }
    })
  };
  showHolyDays();
  //Exercicio 4
  function fridayDayButton(bttName) {
    const divButtonsContainer = document.querySelector('.buttons-container');
    const button = document.createElement('button');
    button.id= 'btn-friday';
    button.innerHTML = bttName;
    divButtonsContainer.appendChild(button);
  }

  fridayDayButton('Sexta-Feira');
  //Exercicio 5
  function showFriday() {
    const fridayButton = document.querySelector('#btn-friday');
    const fridayDays = document.querySelectorAll('.friday');
    const day = 'FRIDAY';
    const originalValue = [];

    for (let i in fridayDays){
      originalValue.push(fridayDays[i].innerHTML);
    }
    fridayButton.addEventListener('click', function(){

      for(let i in fridayDays){
        if (fridayDays[i].innerHTML == day){
          fridayDays[i].innerHTML = originalValue[i];
        }else {
          fridayDays[i].innerHTML = day;
        }
      }
    })
  }
  showFriday();
  //Exercicio 6
  function zoom(){
    const liDays = document.querySelectorAll('.day');
    for (let i of liDays){
      i.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
      });
      i.addEventListener('mouseout', (event) => {
        event.target.style.fontWeight = '200';
        event.target.style.fontSize = '20px';
      });
    };
  };
  zoom();
  
  //Exercicio 7
  function newTaskSpan(name) {
    const myContainer = document.querySelector('.my-tasks');
    let span = document.createElement('span');
    span.innerHTML = name;
    myContainer.appendChild(span);

  }
  newTaskSpan('cozinhar');

  //Exercicio 8
  function addLegend(cor) {
    const myContainer = document.querySelector('.my-tasks');
    let div = document.createElement('div');
    div.className = 'task';
    div.style.backgroundColor = cor;
    myContainer.appendChild(div);
  }
  addLegend('red');
  //Exercicio 9
  function selectTask(){
    let taskselected = document.getElementsByClassName('task selected');
    let tasks = document.querySelector('.task');

    tasks.addEventListener('click', (e) => {
      if (taskselected.length === 0){
        e.target.className = 'task selected';
      }else {
        e.target.className = 'task';
      }
    })
  }
  selectTask();
  //Exercicio 10
  function changeDayColor() {
  let selectDay = document.querySelector('#day');
  let divTask = document.querySelector('.task');
  let taskselected = document.getElementsByClassName('task selected');
  let taskColor = divTask.style.backgroundColor;
  
    selectDay = addEventListener('click', (e) => {

      if((taskselected.length > 0) && (e.target.style.color != taskColor)) {
        e.target.style.color = taskselected[0].style.backgroundColor;
      } else if ((e.target.style.color === taskColor) && (taskselected.length !== 0)) {
        e.target.style.color = 'rgb(119,119,119)';
      }
    })
  }
  changeDayColor();