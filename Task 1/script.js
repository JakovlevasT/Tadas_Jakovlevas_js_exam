/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
div elemente su id "output" viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

'use strict';
console.log('script.js file was loaded');

const els = {
  formEl: document.forms[0],
  inputEl: document.querySelector('#search'),
  rezEl: document.querySelector('#output'),
};

// console.log(els.formEl);
// console.log(els.inputEl);
// console.log(els.rezEl);

els.formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  els.rezEl.innerHTML = '';
  const inputVal = els.inputEl.value;
  console.log('inputVal ===', inputVal);
  const pounds = convertToPounds(inputVal);
  console.log('pounds ===', pounds);
  const grams = convertToGrams(inputVal);
  console.log('grams ===', grams);
  const ounce = convertToOunces(inputVal);
  console.log('ounce ===', ounce);
  pushResultsToWeb(inputVal, pounds, grams, ounce);
});

function convertToPounds(numb) {
  const sum = numb * 2.2046;
  return sum;
}
function convertToGrams(numb) {
  const sum = numb / 0.001;
  return sum;
}

function convertToOunces(numb) {
  const sum = numb * 35.274;
  return sum;
}

function pushResultsToWeb(val, lb, g, oz) {
  const ulEl = document.createElement('ul');
  ulEl.className = 'ulEl';
  const firstLiEl = document.createElement('li');
  firstLiEl.className = 'atsakymas';
  firstLiEl.textContent = `${val} kg konvertavus i svarus, gauname ${lb} lb.`;
  const secondLiEl = document.createElement('li');
  secondLiEl.className = 'atsakymas';
  secondLiEl.textContent = `${val} kg konvertavus i gramus, gauname ${g} g.`;
  const thirdLiEl = document.createElement('li');
  thirdLiEl.className = 'atsakymas';
  thirdLiEl.textContent = `${val} kg konvertavus i uncijas, gauname ${oz} oz.`;
  els.rezEl.append(ulEl);
  ulEl.append(firstLiEl, secondLiEl, thirdLiEl);
}
