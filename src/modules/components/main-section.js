const leaderBoardContainer = () => {
  const section = document.createElement('section');
  section.className = 'leader-board-container';

  const leaderBoard = document.createElement('article');
  leaderBoard.className = 'container leader-board padding-x';
  leaderBoard.innerHTML = `
  <div class="recent-scores">
   <h2 class="display-2">Recent scores</h2>
   <button id="refresh" type="button" class="btn">Refresh</button>
  </div>
  <ul id="board" class="board">
    <div class="pop-up">There are no scores added</div>
  </ul>
  `;

  const form = document.createElement('article');
  form.className = 'container form-container padding-x';
  form.innerHTML = `
  <h2 class="display-2">Add your score</h2>
  <form id="form" class="form" autocomplete="off">
   <label ><input type="text" id="name" name="name" placeholder="Your name"/></label>
   <label ><input type="number" id="score" name="score" placeholder="Your score"/></label>
   <button type="submit" class="btn" />Submit</button>
  </form>
  `;

  section.append(leaderBoard, form);
  return section;
};

export default leaderBoardContainer();
