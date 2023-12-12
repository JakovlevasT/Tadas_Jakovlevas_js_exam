/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */
'use strict';
console.log('script.js file was loaded');

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

// 1 uzduotis

function getUserAvarageAge(arr) {
  let sum = 0;
  arr.forEach((userObj) => {
    const age = userObj.age;
    // console.log(age);
    sum += age;
    return sum;
  });
  const avgAge = sum / arr.length;
  return avgAge;
}

const avgAgeRezult = getUserAvarageAge(users);
// console.log('avgAgeRezult ===', avgAgeRezult);

// 2 uzduotis

function getUsersNames(arr) {
  const usersArrList = [];

  arr.forEach((userObj) => {
    const usersName = userObj.name;
    // console.log('usersName ===', usersName);
    usersArrList.push(usersName);
    return usersName;
  });
  // console.log('usersArrList ===', usersArrList);
  return usersArrList;
}

const usersNames = getUsersNames(users);
// console.log('usersNames ===', usersNames);
