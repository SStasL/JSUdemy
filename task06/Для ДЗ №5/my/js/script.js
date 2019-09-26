let rep1 = document.querySelectorAll(".menu-item");

let parentNode = document.querySelector(".menu");
let el3 = rep1[1];
console.log(el3);
let el2 = rep1[2];
console.log(el2);
rep1[1].remove();
rep1[2].remove();
// replaceNode = parentNode.replaceChild(rep1[2], rep1[1]);

parentNode.insertBefore(el3, rep1[3]);
parentNode.insertBefore(el2, rep1[1]);
// console.log(rep1[1]);

let bodyEl = document.getElementsByTagName("body");
bodyEl[0].style.background = "url(../img/apple_true.jpg) center no-repeat"
// document.body.style.background = "url(../img/apple_true.jpg) center no-repeat"
// console.log(bodyEl);

let titleValue = document.getElementById("title").textContent = "Мы продаем только подлинную технику Apple";
// console.log(titleValue);

document.querySelector(".adv").remove();

let answer = prompt();
document.getElementById("prompt").textContent = answer;