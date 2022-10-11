// 'use strict';

function calcAge_(birthYear) {
  const age = 2037 - birthYear;
    // console.log(str);

  function printage() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var str = `Oh, and you're a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(add(2, 30));
  }

  printage();

  return age;
}

const firstName = 'Jonas';
console.log(calcAge_('1991'));

//function
console.log(addDecl(2, 5));
// console.log(addExpr(2, 5));
// console.log(addArr(2, 5));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArr = (a, b) => a + b;

//Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1910);


const jonas_ = {
  firstName: 'Jonas',
  year: 1991,

  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // solution1;
    // const self = this;
    const isMillenial = function () {
      //   console.log(self);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    //     solution2;
        const isMillenial_ = () => {
          console.log(this);
          console.log(this.year >= 1981 && this.year <= 1996);
        };
    isMillenial();
  },

  greetings: () => {
    console.log(`Hey ${this.firstName}`);
  },
};
//*object literal not code block

jonas_.greetings();
jonas_.calcAge();


// // // console.log(this);

const person_ = {
  name: 'Narine',
  year: 1999,
  congrates: function () {
    console.log(this);
    console.log(`Great ${this.name}, well done!`);

    const song = function () {
      console.log('Sing a song, written in year');
    };
    song();
  },
};

person_.congrates();

const addExpr_ = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr_(2, 5);

// var addArr = (a, b) => a + b;

let age_ = 30;
let oldAge = age_;
age_ = 31;
console.log(oldAge, age_);

const me = {
  profession: 'Linguist',
  age: 23,
};

const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('me', me);

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  age: 18,
  calcAge: function () {
    console.log(this);
    console.log(`He was born in ${this.year}`);

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1900 && this.year <= 1999);
    };
    isMillenial();
  },
};
jonas.calcAge();

///???
const person = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1950 && this.year <= 2000);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

person.calcAge();
person.greet();
console.log(this);

let age = 30;
let odlAge = age;
age = 31;

console.log(age);
console.log(odlAge);


const friend_ = me;
friend_.age = 27;
console.log(me, 'me');
console.log(friend_, 'friend');

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName);
console.log(oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 29,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Johnson';

//coping objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 29,
    family: ['Alice', 'Paul'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log(jessica2);
console.log(marriedJessica);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
