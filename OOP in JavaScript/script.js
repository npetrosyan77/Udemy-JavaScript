'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const ann = new Person('Ann', 1999);
console.log(ann);


const nane = new Person('Nane', 2001);
const aram = new Person('Aram', 1999);
console.log(nane);
console.log(aram);

console.log(ann instanceof Person);



//PROTOTYPES

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.species = 'Homo sapiens';
ann.calcAge();

console.log(ann.hasOwnProperty('firstName'));

console.log(ann.__proto__);
console.log(ann.__proto__.__proto__);
console.log(ann.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);



const arr = [3, 2, 4, 7, 7, 6, 89, 1, 1, 6];

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);


//class declaration

class PersonCl {
  constructor(firstName, birthyear) {
    this.firstName = firstName;
    this.birthyear = birthyear;
  }

  calcAge() {
    console.log(2037 - this.birthyear);
  }
}

const jessica = new PersonCl('Jessica', 1988);
console.log(jessica);
