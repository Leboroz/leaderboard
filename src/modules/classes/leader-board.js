import Score from './score'

export default class Leaderboard {
  static scores = []

  static add(name, score) {
    this.scores.push(new Score(name, score))
  }
}

const run = (id) => {
  const nameInput = document.getElementById('name')
  const scoreInput = document.getElementById('score')
  document.getElementById('form').addEventListener('submit', (e) => {})
}
