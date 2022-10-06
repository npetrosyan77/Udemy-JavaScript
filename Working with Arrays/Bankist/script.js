'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');

const containerMovements = document.querySelector('.movements');



const displayMovements = function (movements) {
    containerMovements.innerHTML = '';

    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>
  `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

displayMovements(account1.movements);

const createUserNames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUserNames(accounts);
console.log(accounts);


const calcPrintBalance = function (movements) {
    const balance = movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${balance} EUR`;
};

calcPrintBalance(account1.movements);


const calcDisplaySummery = function (movements) {
    const incomes = movements
        .filter(move => move > 0)
        .reduce((acc, move) => acc + move, 0);
    labelSumIn.textContent = `${incomes} €`;

    const outcomes = movements
        .filter(move => move < 0)
        .reduce((acc, move) => acc + move, 0);
    labelSumOut.textContent = `${Math.abs(outcomes)} €`;

    const interest = movements
        .filter(move => move > 0)
        .map(move => (move * 1.2) / 100)
        .filter((move, i, arr) => {
            console.log(arr);
            return move > 1;
        })
        .reduce((acc, move, _, arr) => {
            console.log(arr);
            return acc + move;
        }, 0);
    // .reduce((acc, move) => acc + (move * 1.2) / 100, 0);

    labelSumInterest.textContent = `${interest} €`;
};

console.log(calcDisplaySummery(account1.movements));


// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


//accumulator --> snowball
const globalBalance = movements.reduce(function (
    accumulator,
    currentElement,
    index
    ) {
        console.log(`Iteration ${index}: ${accumulator}`);
        return accumulator + currentElement;
    },
    100);
console.log(globalBalance);

let sum = 0;
for (const movement of movements) sum += movement;
console.log(sum);

const maxMove = account2.movements.reduce(function (acc, move) {
    if (acc > move) return acc;
    else return move;
}, account2.movements[0]);
console.log(maxMove);


//PIPELINE

const eurToUsd = 1.1;

let totalDepositUSD = movements
    .filter(move => move < 0)
    .map((mov, i, arr) => {
        return mov * eurToUsd;
    })
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);
