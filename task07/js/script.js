let budgetValue = document.getElementsByClassName("budget-value"),
    daybudgetValue = document.getElementsByClassName("daybudget-value"),
    levelValue = document.getElementsByClassName("level-value"),
    expensesValue = document.getElementsByClassName("expenses-value"),
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue = document.getElementsByClassName("income-value"),
    monthsavingsValue = document.getElementsByClassName("monthsavings-value"),
    yearsavingsValue = document.getElementsByClassName("yearsavings-value"),
    expensesItem = document.getElementsByClassName("expenses-item"),
    buttons = document.getElementsByTagName("button"),
    submitButton = buttons[0],
    submitOptionButton = buttons[1],
    calculateButton = buttons[2],
    inputFields = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelectorAll(".choose-income"),
    sum = document.querySelectorAll("#sum"),
    percent = document.querySelectorAll("#percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value"),
    divClassApp = document.querySelectorAll(".app")[0],
    divClassMain = document.querySelectorAll(".main")[0],
    divClassData = document.querySelectorAll(".data")[0];

let sumTmp = [];
sumTmp[0] = sum[0];
sumTmp[0].innerHTML = 9999;

// divClassData.replaceChild(sum[0], sumTmp[0]);


console.log(savings);
console.log(submitButton);
console.log(calculateButton);
console.log(inputFields[0]);
console.log(inputFields[1]);
console.log(inputFields[2]);
console.log(chooseIncome[0]);
console.log(savings[0]);
console.log(sum[0]);
console.log(percent[0]);
console.log(year);
console.log(month);
console.log(day);

    


console.log(divClassMain);
console.log(divClassData);
// document.body.divClassApp.divClassMain.divClassData.replaceChild(sum[0], sumTmp[0]);
divClassData.replaceChild(sum[0], sumTmp[0]);