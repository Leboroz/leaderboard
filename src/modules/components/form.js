const form = document.createElement('article');
form.className = 'container form-container padding-x';
form.innerHTML = `
  <h2 class="display-2">Add your score</h2>
  <form id="form" class="form" autocomplete="off">
   <label ><input type="text" id="name" name="name" placeholder="Your name"/ required></label>
   <label ><input type="number" id="score" name="score" placeholder="Your score" required/></label>
   <div class="button-wrapper">
    <button id="new_game" type="button" class="btn">New game</button>
    <span id="msg" class="btn msg"></span>
    <button type="submit" class="btn" />Submit</button>
   </div>
  </form>
  `;

export default form;
