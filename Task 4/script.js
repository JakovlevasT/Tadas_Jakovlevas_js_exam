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
      console.log(oneEl.brand);
    });
  })
  .catch((error) => {
    console.warn('ivyko klaida:', error);
  });

function createEl(el, text) {
  const newEl = document.createElement(el);
  newEl.textContent = ``;
  els.resultsEl.append(newEl);
}

createEl('div');
