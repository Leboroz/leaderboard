import header from './modules/components/header';
import leaderBoardContainer from './modules/components/main-section';
import './sass/index.scss';
import LeaderBoardAPI from './modules/classes/api';
import sortable from './modules/functions/sortable';

const createListElement = (user, score, index) => {
  const item = document.createElement('li');
  item.className = index % 2 === 0 ? 'item item__2' : 'item';
  item.innerHTML = `${index + 1}. ${user}: ${score}`;

  const trophy = document.createElement('i');
  trophy.className = 'fas fa-trophy';

  if (index === 0) item.append(trophy);

  return item;
};

const run = (id) => {
  LeaderBoardAPI.setId(id);
  const list = document.getElementById('board');
  document.getElementById('form').addEventListener('submit', (e) => {
    const nameInput = document.getElementById('name').value;
    const scoreInput = document.getElementById('score').value;
    e.preventDefault();
    LeaderBoardAPI.postScore(nameInput, scoreInput);
  });

  document.getElementById('refresh').addEventListener('click', () => {
    LeaderBoardAPI.getScores().then(({ result }) => {
      if (result.length > 0) {
        list.innerHTML = '';
        result = result.sort(sortable);
        for (let i = 0; i < result.length; i += 1) {
          const { user, score } = result[i];
          setTimeout(() => {
            list.appendChild(createListElement(user, score, i));
          }, 100 + i * 20);
        }
      }
    });
  });
};

LeaderBoardAPI.postName('leboroz').then(({ result }) => {
  document.getElementById('header').append(header);
  document.getElementById('main').append(leaderBoardContainer);
  const regEx = /^Game with ID: (.+) added.$/;
  const id = result.match(regEx)[1];
  run(id);
});
