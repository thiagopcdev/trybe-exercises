// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

let showPiada = 'kkkk';
const fetchJoke = () => {
 
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((piada) => { 
      const getJokeContainer = document.getElementById('jokeContainer')
      getJokeContainer.innerHTML = piada.joke
  });
  
  
};

window.onload = () => {
  
  fetchJoke();
  
}