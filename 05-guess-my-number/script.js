'use strict';

let score = 20;
let highscore = 0;
let secretNumber = randomizeNumber();
console.log('secretNumber: ' + secretNumber);

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess > secretNumber || guess < secretNumber) {
        if (score > 1) {
            let message = guess > secretNumber ? 'Too High' : 'Too Low';
            document.querySelector('.message').textContent = message;
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Loose';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {

    secretNumber = randomizeNumber();
    score = 20;
    console.log('secretNumber: ' + secretNumber);

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

function randomizeNumber() {
    return Math.trunc(Math.random()*20) + 1;
}









