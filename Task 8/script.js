/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
'use strict';
console.log('script.js file was loaded');

class Calculator {
  constructor(num1, num2) {
    this.a = num1;
    this.b = num2;
  }

  sum() {
    const rez = this.a + this.b;
    // console.log(`Sudejus ${this.a} su ${this.b} gauname atsakyma: ${rez}`);
    return rez;
  }

  substraction() {
    const rez = this.a - this.b;
    // console.log(`Is ${this.a} atemus ${this.b} gauname atsakyma: ${rez}`);
    return rez;
  }

  multiplication() {
    const rez = this.a * this.b;
    // console.log(`${this.a} padauginus is ${this.b} gauname atsakyma: ${rez}`);
    return rez;
  }

  division() {
    const rez = this.a / this.b;
    // console.log(`Padalinus ${this.a} is ${this.b} gauname atsakyma ${rez}`);
    return rez;
  }
}

const test = new Calculator(55, 22);
console.log('test ===', test);

const sudetis = test.sum();
console.log('sudetis ===', sudetis);

const atimtis = test.substraction();
console.log('atimtis ===', atimtis);

const daugyba = test.multiplication();
console.log('daugyba ===', daugyba);

const dalyba = test.division();
console.log('dalyba ===', dalyba);
