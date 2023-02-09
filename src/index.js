import 'lodash';
import './style.css';
import userData from './modules/userData.js';
import getData from './modules/getData.js';
import showData from './modules/showData.js';

const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

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
  getData();
  showData();
});
