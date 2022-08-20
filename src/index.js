import header from './modules/components/header';
import leaderBoardContainer from './modules/components/main-section';
import './sass/index.scss';
import LeaderBoardAPI from './modules/classes/api';
import sortable from './modules/functions/sortable';
import noScores from './modules/components/no-scores';
import LocalStorageAPI from './modules/classes/local-storage';

document.getElementById('header').append(header);
document.getElementById('main').append(leaderBoardContainer);

const list = document.getElementById('board');
const games = document.getElementById('game_input');
const newButton = leaderBoardContainer.querySelector('#new_game');
const gameList = document.getElementById('games');

list.appendChild(noScores);

const createListElement = (user, score, index) => {
  const item = document.createElement('li');
  item.className = index % 2 === 0 ? 'item item__2' : 'item';
  item.innerHTML = `${index + 1}. ${user}: ${score}`;

  const trophy = document.createElement('i');
  trophy.className = 'fas fa-trophy';

  if (index === 0) item.append(trophy);

  return item;
};

const refresh = () => {
  LeaderBoardAPI.getScores().then(({ result }) => {
    list.innerHTML = '';
    if (result.length < 1) {
      list.appendChild(noScores);
      return;
    }

    result = result.sort(sortable);
    for (let i = 0; i < result.length; i += 1) {
      const { user, score } = result[i];
      setTimeout(() => {
        list.appendChild(createListElement(user, score.slice(0, 9), i));
      }, 100 + i * 20);
    }
  });
};

const pop = (span, msg) => {
  span.textContent = msg;
  span.classList.add('show-msg');
  setTimeout(() => {
    span.classList.remove('show-msg');
  }, 2000);
};

const run = (id) => {
  LocalStorageAPI.get(gameList);

  LeaderBoardAPI.setId(id);

  document.getElementById('score').addEventListener('keydown', (e) => {
    let value = e.currentTarget.value;
    if(value > 99999999){
      e.currentTarget.value = parseInt(value / 10);
    }
  })

  document.getElementById('form').addEventListener('submit', (e) => {
    const nameInput = document.getElementById('name').value;
    const scoreInput = document.getElementById('score').value;
    e.preventDefault();
    LeaderBoardAPI.postScore(nameInput, scoreInput).then(() => {
      refresh();
      pop(e.target.querySelector('#msg'), 'Successfuly added score');
    });
    e.target.reset();
  });

  games.addEventListener('change', (e) => {
    if (e.target.value) {
      const targetId = e.target.value.match(/^(\S+)/)[1];
      if (targetId !== LeaderBoardAPI.id && targetId.length === 20) {
        LeaderBoardAPI.setId(targetId);
        refresh();
      }
    }
    e.target.value = '';
  });

  newButton.addEventListener('click', () => {
    LeaderBoardAPI.postName('new game').then((res) => {
      const regEx = /^Game with ID: (.+) added.$/;
      const option = document.createElement('option');
      option.textContent = res.result.match(regEx)[1];
      gameList.appendChild(option);
      pop(document.querySelector('#msg'), 'succesfuly created new board');
      LocalStorageAPI.update(gameList);
    });
  });
};

run(process.env.GAME_ID);
refresh();
