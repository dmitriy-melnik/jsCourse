'use strict';

// 1111111111

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }
//
// Car.prototype.accelerate = function () {
//     this.speed = this.speed + 10;
//     console.log('accelerate to: ' + this.speed);
// }
//
// Car.prototype.brake = function () {
//     this.speed = this.speed - 5;
//     console.log('brake to: ' + this.speed);
// }
//
// let gtr = new Car('nissan', 120);
// let ae = new Car('toyota', 95);
//
// gtr.accelerate();
// ae.accelerate();
//
// gtr.brake();
// ae.brake()

// 222222222222

// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }
//
//     get speedUS() {
//         return this.speed / 1.6;
//     }
//
//     set speedUS(speedMH) {
//         this.speed = speedMH * 1.6;
//     }
//
//     accelerate = function () {
//         this.speed = this.speed + 10;
//         console.log('accelerate to: ' + this.speed);
//     }
//     brake() {
//         this.speed = this.speed - 5;
//         console.log('brake to: ' + this.speed);
//     }
// }
//
// let gtr = new CarCl('nissan', 120);
// let ae = new CarCl('toyota', 95);
//
// gtr.accelerate();
// // ae.accelerate();
//
// gtr.brake();
// // ae.brake()

// 333333333333

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed = this.speed + 10;
    console.log('accelerate to: ' + this.speed);
}

Car.prototype.brake = function () {
    this.speed = this.speed - 5;
    console.log('brake to: ' + this.speed);
}

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeTo = function (value) {
    this.charge = value;
}

EV.prototype.accelerate = function () {
    this.speed = this.speed + 20;
    this.charge = this.charge - 1;
    console.log(this.make + ' going with ' + this.speed + ' and charge is ' + this.charge);
}

const tesla = new EV('tesla', 120, 23);
// tesla.chargeTo(100);
// tesla.accelerate();
// tesla.accelerate();

// 4444444444444

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed = this.speed + 10;
        console.log('accelerate to: ' + this.speed);
    }

    brake() {
        this.speed = this.speed - 5;
        console.log('brake to: ' + this.speed);
        return this;
    }
}

class EvCl extends CarCl {

    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeTo(value) {
        this.#charge = value;
        return this;
    }

    accelerate() {
        this.speed = this.speed + 20;
        this.#charge = this.#charge - 1;
        console.log(this.make + ' going with ' + this.speed + ' and charge is ' + this.#charge);
        return this;
    }

}

// const toyotaCl = new CarCl('toyota', 100);
// toyotaCl.accelerate();
// toyotaCl.brake();

const teslaCl = new EvCl('tesla', 120, 80);
// teslaCl.accelerate();
// teslaCl.chargeTo(100);
// teslaCl.accelerate();
// console.log(teslaCl.speed)
// console.log(teslaCl.#charge)

teslaCl.chargeTo(100).accelerate().brake();


















