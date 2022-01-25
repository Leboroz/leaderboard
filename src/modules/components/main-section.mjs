const leaderBoardContainer = () => {
  const section = document.createElement('section')
  section.className = 'leader-board-container padding-x'

  const leaderBoard = document.createElement('article')
  leaderBoard.className = 'container leader-board padding-x'
  leaderBoard.innerHTML = `
  <div class="recent-scores">
   <h2 class="display-2">Recent scores</h2>
   <button type="button" class="btn">refresh</button>
  </div>
  <ul class="board">
   <li class="item">name: 1</li>
   <li class="item item__2">name: 2</li>
   <li class="item">name: 3</li>
   <li class="item item__2">name: 4</li>
   <li class="item">name: 5</li>
   <li class="item item__2">name: 6</li>
   <li class="item">name: 7</li>
  </ul>
  `

  const form = document.createElement('article')
  form.className = 'container form-container padding-x'
  form.innerHTML = `
  <h2 class="display-2">Add your score</h2>
  <form class="form">
   <label ><input type="text" placeholder="Your name"/></label>
   <label ><input type="text" placeholder="Your score"/></label>
   <button type="submit" class="btn" />Submit</button>
  </form>
  `

  section.append(leaderBoard, form)
  return section
}

export default leaderBoardContainer
