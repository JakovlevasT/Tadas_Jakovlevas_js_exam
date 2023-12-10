/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const els = {
  btnEl: document.querySelector('#btn__element'),
  rezEl: document.querySelector('#btn__state'),
};

// console.log(els.btnEl);
// console.log(els.rezEl);

let count = 0;

els.btnEl.addEventListener('click', () => {
  count += 1;
  console.log('count ===', count);
  els.rezEl.textContent = count;
});
