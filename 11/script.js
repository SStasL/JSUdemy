'use strict';
let num = 50;

if (num < 49) {
    console.log("false");
} else if (num > 100) {
    console.log("its biggest");
} else {
    console.log("true");
}

(num == 50) ? console.log("true") : console.log("false");

let num = 50;
switch(num) {
    case num < 49:
        console.log("false");
        break;
    case num > 100:
        console.log("its biggest");
        break;
    case num > 100:
        console.log("its biggest");
        break;
    case 50:
        console.log("true");
        break;
    default:
        console.log("default");
        break;
}

let num = 50;
// while(num < 55) {
//     console.log(num);
//     num++;
// }

let num = 50;
do {
    console.log(num);
    num++;
} while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}