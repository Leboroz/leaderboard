export default class LeaderBoardAPI {
  static URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api'

  static gameName = '/games/'

  static async postName(name) {
    const response = await fetch(this.URL + this.gameName, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
      }),
    });

    return response.json();
  }

  static async postScore(user, score) {
    const response = await fetch(this.URL + this.scoreURL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        score,
      }),
    });

    return response.json();
  }

  static async getScores() {
    const response = await fetch(this.URL + this.scoreURL);
    return response.json();
  }

  static setId(id) {
    this.scoreURL = `/games/${id}/scores/`;
  }
}
