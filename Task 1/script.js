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

const regex = /[a-zA-Z]/;

els.formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  els.rezEl.innerHTML = '';
  let inputVal = els.inputEl.value;
  if (regex.test(inputVal) || inputVal === '') {
    errorMsg();
    els.inputEl.value = '';
    return;
  }
  console.log('inputVal ===', inputVal);
  const pounds = convertToPounds(inputVal);
  console.log('pounds ===', pounds);
  const grams = convertToGrams(inputVal);
  console.log('grams ===', grams);
  const ounce = convertToOunces(inputVal);
  console.log('ounce ===', ounce);
  pushResultsToWeb(inputVal, pounds, grams, ounce);
  els.inputEl.value = '';
});

function convertToPounds(numb) {
  const sum = numb * 2.2046;
  return sum.toFixed(2);
}
function convertToGrams(numb) {
  const sum = numb / 0.001;
  return sum.toFixed(2);
}

function convertToOunces(numb) {
  const sum = numb * 35.274;
  return sum.toFixed(2);
}

function pushResultsToWeb(val, lb, g, oz) {
  const ulEl = document.createElement('ul');
  ulEl.className = 'ulEl';

  const firstLiEl = createLiEl('svarus', lb, val);
  const secondLiEl = createLiEl('gramus', g, val);
  const thirdLiEl = createLiEl('uncijas', oz, val);

  els.rezEl.append(ulEl);
  ulEl.append(firstLiEl, secondLiEl, thirdLiEl);
}

function createLiEl(text, short, val) {
  const firstLiEl = document.createElement('li');
  firstLiEl.className = 'atsakymas';
  firstLiEl.textContent = `${val} kg konvertavus i ${text}, gauname ${short} ${text}.`;
  return firstLiEl;
}

function errorMsg() {
  const errLiEl = document.createElement('span');
  errLiEl.className = 'error';
  errLiEl.textContent = '!!! Blogai ivesti duomenys (irasykite skaiciu) !!!';
  els.rezEl.append(errLiEl);
  setTimeout(() => {
    errLiEl.remove();
  }, 2000);
}
