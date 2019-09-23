'use strict';

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);

options.bool = false;
console.log(options.bool);

options.colors = {
    border: "black",
    bg: "red"
};


delete options.bool;
console.log(options);

for(let key in options) {
    console.log("Свойтсво: " + key + " имеет значение " + options[key]);
}

console.log(Object.keys(options).length);

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

// let arr = ["wer", "wfefef", "efjgrioj", "uyrieyr"],
//     i = arr.join(', ');
// console.log(i);

let arr = [1, 15, 4],
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}
console.log(arr);