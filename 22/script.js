// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener("DOMContentLoaded", function() {
    let box = document.querySelector(".box");

    // box.addEventListener("touchstart", function(e) {
    //     e.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    //     // if (box.style.background == "red") {
    //     //     box.style.background = "blue";    
    //     // } else {
    //     //     box.style.background = "red";
    //     // }
        
    // });

    box.addEventListener("touchmove", function(e) {
       e.preventDefault();
       console.log("Red box: " + e.touches[0].pageX);
    });
//
    //box.addEventListener("touchend", function(e) {
    //    e.preventDefault();
    //    console.log("Red box: touchend");
    //});

    // new RegExp("pattern", "flags");
    // /pattern/flags;

    // let ans = prompt("Введите Ваше имя");

    // let reg = /n/ig;
    // // console.log(ans.search(reg));
    // // console.log(ans.match(reg));
    // console.log(reg.test(ans));

    //////////////////////////// reg exp flags /////////////////
    /*
    i - поиск независимо от регистра
    g - глобальный поиск (поиск не только первого вхождения)
    m - флаг многострочности

    classes
    \d - цифры
    \D - не цифры
    \w - буквы
    \W - не буквы
    \s - пробелы
    \S - не пробелы

    */

    // let pass = prompt("Введите пароль");

    // console.log(pass.replace(/./g, "*"));
    // alert("12-34-56".replace(/-/g,":"));

    // let ans = prompt("Введите число");

    // let reg = /\d/g;
    // console.log(ans.search(reg));
    // console.log(ans.match(reg));
    // console.log(reg.test(ans));

    let str = "My name is/ R2D2";
    console.log(str.match(/\/\s\w\d\w\d/i));
});

