import 'lodash';
import './style.css';
let nameInput= document.querySelector("#name");
let scoreInput= document.querySelector("#score");
let submitBtn= document.getElementById("submit");
let refreshBtn= document.getElementById("refresh");

const userData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GojQ1zM8TQnGeitxRy7T/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: nameInput.value,
        score: scoreInput.value
      }),
      headers: {
        'Content-type': 'application/json',
      },
    },
  );
  const postedScore = await response.json();
  return postedScore;
};

const getData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GojQ1zM8TQnGeitxRy7T/scores/',
  );
  const endScore = await response.json();
  return endScore.result;
};

// Showing data to the user interface

let container= document.querySelector(".scores-list")
const showData = async () => {
  const data = await getData();
  container.innerHTML = '';
  data.forEach((item) => {
    const renderData = `
    <div>
      <td>${item.user}</td>:
      <td>${item.score}</td>
    </div>`;
    container.insertAdjacentHTML('beforebegin', renderData);
  });
};

// Added Eventlistner when window load
window.addEventListener('load', () => {
  showData();
});
// Added Eventlistner to the submit button
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  userData();
  nameInput.value = '';
  scoreInput.value = '';
});
// Added Eventlistner to the refresh Button
refreshBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getScore();
    showData();
  });

