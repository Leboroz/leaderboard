export default class LeaderBoardAPI {
  static URL = process.env.URL

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
    this.id = id;
    this.scoreURL = `/games/${id}/scores/`;
  }
}
