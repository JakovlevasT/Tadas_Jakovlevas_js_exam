/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
'use strict';
console.log('script.js file was loaded');

const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

function showObjectKeys(obj) {
  const ats = Object.keys(obj);
  // console.log('ats ===', ats);
  return ats;
}

const objKeys = showObjectKeys(audi);
// console.log('objKeys ===', objKeys);
