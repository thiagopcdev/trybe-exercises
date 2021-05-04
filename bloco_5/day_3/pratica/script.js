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
        dayList.appendChild(dayLi);
      }
    }
  };
  createDaysOfTheMonth();

  //Exercicio 3
  //Exercicio 4
  //Exercicio 5
  //Exercicio 6
  //Exercicio 7
  //Exercicio 8
  //Exercicio 9
  //Exercicio 10
