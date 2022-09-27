'use strict';

let number = Math.trunc(Math.random() * 20) + 1,
    score = 20,
    highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = null; // ='';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rm';
});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //there's no input
    if (!guess) {
        displayMessage('No number!(');
    } else if (guess === number) {
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rm';
        displayMessage('Good job! Number is guessed!');

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess > number ? 'Too high!)' : 'Too low!)');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lose the game:(');
            document.querySelector('.score').textContent = 0;
        }
    }
});
