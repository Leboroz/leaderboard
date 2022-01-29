const leaderBoard = document.createElement('article');
leaderBoard.className = 'container leader-board padding-x';
leaderBoard.innerHTML = `
  <div class="recent-scores">
   <h2 class="display-2">Recent scores</h2>
   <label>
    Game board ID: 
    <input id="game_input" class="games" list="games" name="game">
    <datalist id="games"><option value="${process.env.GAME_ID} (main)"></datalist>
   </label>
  </div>
  <ul id="board" class="board">
  </ul>
  `;

export default leaderBoard;
