export default class LocalStorageAPI {
  static update(list) {
    const ids = [...list.children].map((item) => item.value);
    localStorage.setItem('ids', JSON.stringify(ids));
  }

  static get(list) {
    if (localStorage.getItem('ids')) {
      list.innerHTML = '';
      const ids = JSON.parse(localStorage.getItem('ids'));
      ids.forEach((id) => {
        const option = document.createElement('option');
        option.value = id;
        list.appendChild(option);
      });
    }
  }
}
