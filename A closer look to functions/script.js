'use strict';

const bookings = [];
const createBooking = function (
    flightNum,
    numPassengers = 4,
    price = 15 * numPassengers
) {
    numPassengers = numPassengers || 1;
    price = price || 150;
    const booking = {
        flightNum,
        numPassengers,
        price,
    };

    console.log(booking);
    bookings.push(booking);
};
createBooking('LH123', 10);


const flight = 'L1235';
const ann = {
  name: 'Ann Johnson',
  passport: 123456877,
};


const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999',
    passenger.name = `Mister ${passenger.name}`;
  if (passenger.passport === 123456877) {
    console.log('Check in!');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, ann);
console.log(flight);
console.log(ann);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
  console.log(person.passport);
};

newPassport(ann);
checkIn(flight, ann);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};


//Higher-Order Function
const transformer = function (str, fn) {
  console.log(`Original string :${str}`);
  console.log(`Transformed string: ${fn(str)}`);
};

transformer('Never give up', upperFirstWord);
transformer('Never give up', oneWord);


const high5 = function () {
  console.log('morning!))');
};

document.body.addEventListener('click', high5);
['Jonas', 'anna', 'maria'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} dear ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Narine');
greet('Hello')('Mark');

const greets = greeting => name => console.log(`${greeting} dear ${name}`);

greets('Howdy')('Narine');

const armenia = {
  airline: 'Armenia',
  iatacode: 'HK',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ fligh: `${this.iatacode}${flightNum}` });
  },
};

armenia.book(654, 'anna');

const armwings = {
  airline: 'Tatev',
  name: 'Armwings',
  iatacode: 'LK',
  bookings: [],
};

const book = armenia.book;
book.call(armwings, 23, 'Ann');
console.log(armwings);

const sevan = {
  airline: 'Sevan',
  name: 'Sevan Airlines',
  iatacode: 'SW',
  bookings: [],
};

book.call(sevan);

const flightData = [589, 'Ann'];
book.apply(sevan, flightData);

book.call(sevan, ...flightData);

//BIND METHOD
const bookLK = book.bind(armwings);
console.log(bookLK);
bookLK(23, 'Miqayel');

armenia.planes = 150;
armenia.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', armenia.buyPlane.bind(armenia));

//partial app

const addTAx = (rate, value) => value + value * rate;

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let option = prompt(`What is your favourite programming language?
  0: JavaScript
  1: Python
  2: Rust
  3: C++`);

    if (typeof option === 'number' && option < this.answers.length) {
      answers[option]++;
    }
  },
};

console.log(poll.registerNewAnswer());
console.log(poll.answers);

const runOnce = function () {
  console.log('this will never run again.');
};
runOnce();

(function () {
  console.log('this will never run again.');
  const isPrivate = 23; //it's encapsulated inside the function scope
})();

console.log(isPrivate);

(() => console.log('this will never run again.'))();

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);

//Re-assigning f function
h();
f();
console.dir(f);

///example 2
const boardPassengers = function (n, wait) {
  //   const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

const perGroup = 100;
boardPassengers(180, 3);

setTimeout(function () {
  console.log('TIMER');
}, 1000);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', (header.style.color = 'white'));
})();

let header;

const changeHeaderColor = function () {
    header = document.querySelector('h1');
    document.body.addEventListener('click', function () {
        header.style.color = 'blue';
    });
};

changeHeaderColor();
