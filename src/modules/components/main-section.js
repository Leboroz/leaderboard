const leaderBoardContainer = () => {
  const section = document.createElement('section');
  section.className = 'leader-board-container padding-x';

  const leaderBoard = document.createElement('article');
  leaderBoard.className = 'container leader-board padding-x';
  leaderBoard.innerHTML = `
  <div class="recent-scores">
   <h2 class="display-2">Recent scores</h2>
   <button id="refresh" type="button" class="btn">refresh</button>
  </div>
  <ul id="board" class="board">
  </ul>
  `;

  const form = document.createElement('article');
  form.className = 'container form-container padding-x';
  form.innerHTML = `
  <h2 class="display-2">Add your score</h2>
  <form id="form" class="form">
   <label ><input type="text" id="name" name="name" placeholder="Your name"/></label>
   <label ><input type="text" id="score" name="score" placeholder="Your score"/></label>
   <button type="submit" class="btn" />Submit</button>
  </form>
  `;

  section.append(leaderBoard, form);
  return section;
};

export default leaderBoardContainer();
