let appData = {
    money: prompt("Ваш бюджет на месяц?"),
    time : prompt("Введите дату в формате YYYY-MM-DD"),
    expenses : {
        ans1 : prompt("Введите обязательную статью расходов в этом месяце"),
        ans2 : prompt("Во сколько обойдется?"),
        ans3 : prompt("Введите обязательную статью расходов в этом месяце"),
        ans4 : prompt("Во сколько обойдется?")
    },
    optionalExpenses : {

    },
    income : [],
    savings : false
};

alert(appData.money / 30);

alert(appData.expenses.ans1);
alert(appData.expenses.ans2);