import getData from './getData.js';

const container = document.querySelector('.scores-list');
const showData = async () => {
  const data = await getData();
  let item = '';
  for (let i = 0; i < data.length; i += 1) {
    item += `<li>Name: ${data[i].user}</li>
    <li>score: ${data[i].score}</li>`;
  }
  container.innerHTML = item;
};

export default showData;