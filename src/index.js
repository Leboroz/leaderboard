import header from './modules/components/header';
import leaderBoardContainer from './modules/components/main-section';
import './sass/index.scss';
import LeaderBoardAPI from './modules/classes/api';
import messageWindow from './modules/components/popup';

const createListElement = (user, score, index) => {
  const item = document.createElement('li');
  item.className = index % 2 === 0 ? 'item item__2' : 'item';
  item.innerHTML = `${user}: ${score}`;
  return item;
};

const popWindow = (msg) => {
  document.querySelector('body').appendChild(messageWindow(msg));
};

const run = (id) => {
  LeaderBoardAPI.setId(id);
  const list = document.getElementById('board');
  document.getElementById('form').addEventListener('submit', (e) => {
    const nameInput = document.getElementById('name').value;
    const scoreInput = document.getElementById('score').value;
    e.preventDefault();
    LeaderBoardAPI.postScore(nameInput, scoreInput).catch(() => {
      popWindow('woops');
    });
  });

  document.getElementById('refresh').addEventListener('click', () => {
    list.innerHTML = '';
    LeaderBoardAPI.getScores().then(({ result }) => {
      if (result.length > 0) {
        for (let i = 0; i < result.length; i += 1) {
          const { user, score } = result[i];
          list.appendChild(createListElement(user, score, i));
        }
      } else popWindow('There are no scores');
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
