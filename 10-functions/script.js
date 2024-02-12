'use strict';

// Coding Challenge #1

const pollButton = document.querySelector('.poll');

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    answers: new Array(4).fill(0), // [0, 0, 0, 0]

    registerNewAnswer() {
        let resultNumber = Number(prompt('What is your favourite programming language?\n'
                                                            + this.options.join('\n')
                                                            + '\n(Write option number)'));

        // if result is number AND result < 4 then do ++
        typeof resultNumber === 'number'
            && resultNumber < this.answers.length
            && this.answers[resultNumber]++;

        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log('Poll results are ' + this.answers.join(', '));
        }
    }
};

pollButton.addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers: [5, 4, 3]})

// Coding Challenge #2

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'black';

    document.body.addEventListener('click', function () {
        header.style.color = header.style.color === 'blue' ? 'red' : 'blue';
    });

})();













