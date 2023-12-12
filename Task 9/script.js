/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
'use strict';
console.log('script.js file was loaded');

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    if (this.budget > 100000000) {
      return true;
    } else {
      return false;
    }
  }
}

const movie1 = new Movie('Fast and Furios', 'Louis Leterrier', 340000000);
// console.log('movie1 ===', movie1);

const wasItExpensive = movie1.wasExpensive();
// console.log('wasItExpensive ===', wasItExpensive);
