export default function header() {
  const header = document.createElement('section');
  header.className = 'title padding-x';
  header.innerHTML = `
  <div class="header">
    <h1 class="display-1">Leaderboard</h1>
  </div>`;

  return header;
}
