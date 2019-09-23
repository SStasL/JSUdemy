'use strict';

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);

// options.bool = false;
// console.log(options.bool);

// options.colors = {
//     border: "black",
//     bg: "red"
// };


// delete options.bool;
// console.log(options);

// for(let key in options) {
//     console.log("Свойтсво: " + key + " имеет значение " + options[key]);
// }

// console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];
// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let mass = [1, 3, 4, 6, 7];
// for(let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let mass = [1, 3, 4, 6, 7];
// console.log(mass);

// let soldier = {
//     health: 400,
//     armor: 100
// };

// let john = {
//     health: 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);

function Calculator() {
    let a;
    let b;
    this.read = function() {
        this.a = parseInt(prompt("input"));
        this.b = parseInt(prompt("input"));
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
};

// let calculator = new Calculator();
// calculator.read();
// calculator.sum();

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value = parseInt(prompt("input")) + this.value;
    };
};

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений