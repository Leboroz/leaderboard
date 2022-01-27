const messageWindow = (msg) => {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <span id="close">x</span>
    <p class="par">${msg}</p>
    <button id="ok_button" class="btn" type="button">Ok!</button>
  `;
  const remove = () => popup.remove();
  popup.querySelector('#close').addEventListener('click', remove);
  popup.querySelector('#ok_button').addEventListener('click', remove);

  return popup;
};

export default messageWindow;
