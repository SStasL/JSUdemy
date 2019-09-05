'use strict';

// let num = 20;
// function showFirstMessge(text) {
//     alert(text);
//     let num = 10;
//     console.log("num from function" + num);
// }

// showFirstMessge("www");
// console.log(num);

// let calc = function (a, b) {
//     return (a + b);
// }

let calc = (a, b) => a + b;

console.log(calc(5, 10));

function retVar() {
    let num = 55;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.link(123));

let twelve = "12.2px";
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));