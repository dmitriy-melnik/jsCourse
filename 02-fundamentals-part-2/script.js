'use strict';

// Functions
// function describeCountry(country, population, capitalCity) {
//     return country + ' has ' + population + ' people and its capital city is ' + capitalCity;
// }
//
// let ukr = describeCountry('Ukraine', 40, 'Kuiv');
// let ukr2 = describeCountry('Ukraine2', 402, 'Kuiv2');
// let ukr3 = describeCountry('Ukraine3', 403, 'Kuiv3');

// Function Declarations vs. Expressions
// Function Declarations
// function percentageOfWorld1(population) {
//     // 7900 000 000 - 100
//     // pop - ?
//     return population * 100 / 7900000000;
// }
//
// console.log(percentageOfWorld1(1441000000))
//
// Function Expressions
// let percentageOfWorld2 = function (population) {
//     return population * 100 / 7900000000;
// }
//
// console.log(percentageOfWorld2(1441000000))

// Arrow Function
// const percentageOfWorld3 = (population, name) => {
//     // console.log('test arrow ' + name);
//     return population * 100 / 7900000000 ;
// };
// console.log(percentageOfWorld3(1441000000))

// Functions Calling Other Functions
// const percentageOfWorld3 = (population) => {
//     // console.log('test arrow ' + name);
//     return population * 100 / 7900000000 ;
// };
// const describePopulation = (country, population) => {
//     return country + ' has ' + population + ' people, which is about ' + percentageOfWorld3(population) + ' of the world';
// }
//
// console.log(describePopulation('chine', 1441000000))

// Coding Challenge #1

// let dolphinsScore1 = [44, 23, 71];
// let koalasScore1 = [65, 54, 49];
//
// let dolphinsScore2 = [85, 54, 41];
// let koalasScore2 = [23, 34, 27];
//
// // let calcAverage = (scores) => {
// //     let sum = 0;
// //     scores.forEach(score => sum = sum + score);
// //     // for (let i = 0; i <= scores.length; i++) {
// //     //     sum = sum + scores[i];
// //     // }
// //     return sum / scores.length;
// // }
//
// let calcAverage = (a, b, c) => {return (a + b + c) / 3};
//
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
//
// console.log(scoreDolphins);
// console.log(scoreKoalas)
//
// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log('Dolphins win (' + avgDolphins + ' vs. ' + avgKoalas + ')')
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log('Koalas win (' + avgKoalas + ' vs. ' + avgDolphins + ')')
//     } else {
//         console.log('No team wins...');
//     }
// }
//
// console.log(checkWinner(scoreDolphins, scoreKoalas));
// // console.log(checkWinner(calcAverage(dolphinsScore2), calcAverage(koalasScore2)));

// Coding Challenge #2
// function calcTip(bill) {
//     return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
// }
//
// console.log(calcTip(100));
//
// let bills = [125, 155, 44];
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//
// console.log(tips)

// Coding Challenge #3
// let mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// }
//
// let john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// }
//
// if (mark.calcBMI() > john.calcBMI()) {
//     console.log("Mark Miller's BMI (" + mark.calcBMI() + ") is higher than John Smith's (" + john.calcBMI() + ")!")
// } else {
//     console.log("John Smith's BMI (" + john.calcBMI() + ") is higher than Mark Miller's (" + mark.calcBMI() + ")!")
// }

// Coding Challenge #4
// function calcTip(bill) {
//     return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
// }
//
// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];
//
// for (let i = 0; i < bills.length; i++) {
//
//     let tip = calcTip(bills[i]);
//
//     tips.push(tip);
//     totals.push(bills[i] + tip);
// }
//
// console.log('tips: ' + tips);
// console.log('totals: ' + totals)


































