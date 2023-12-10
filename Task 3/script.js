/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama div elemente su id "output".
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
'use strict';
console.log('script.js file was loaded');

const els = {
  btnEl: document.querySelector('#btn'),
  rezEl: document.querySelector('#output'),
  msgEl: document.querySelector('#message'),
};

console.log(els.btnEl);

const ENDPOINT = 'https://api.github.com/users';

(() => {
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((ats) => {
      console.log(ats);
      ats.forEach((user) => {
        console.log(user.login);
        console.log(user.avatar_url);
        showUsers(user.login, user.avatar_url);
      });
    })
    .catch((error) => {
      console.warn('ivyko klaida:', error);
    });
})();

function showUsers(nick, img) {
  const container = document.createElement('div');
  container.className = 'card';
  const newCard = document.createElement('img');
  newCard.src = img;
  newCard.alt = 'picture of ${nick}';
  const nickEl = document.createElement('h2');
  nickEl.textContent = nick;
  container.append(newCard, nickEl);
  els.rezEl.append(container);
}
