/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
'use strict';
console.log('script.js file was loaded');

const els = {
  resultsEl: document.querySelector('#output'),
};

const ENDPOINT = 'cars.json';

const test = fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((rez) => {
    console.log(rez);
    rez.forEach((oneEl) => {
      console.log(oneEl.models);
      createCard(oneEl);
    });
  })
  .catch((error) => {
    console.warn('ivyko klaida:', error);
  });

function createCard(obj) {
  const carCard = document.createElement('div');
  carCard.className = 'card';
  const cardHead = document.createElement('h2');
  cardHead.textContent = obj.brand;

  const cardListEl = document.createElement('ul');
  cardListEl.className = 'unlisted';
  const cardList = document.createElement('li');
  cardList.textContent = obj.models;

  cardListEl.append(cardList);

  carCard.append(cardHead, cardListEl);
  els.resultsEl.append(carCard);
}
