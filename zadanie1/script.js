'use strict';

//let money, time;
///money =1000;

let money = prompt("Ваш бюджет на месяц?", "1000");
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-07-26");
console.log(time);


let appData = {
  budget: money,
  expenses: {},
	optionalExpenses: {},
	income: [],
  timeData: time,
  savings: false
  }

  let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

  //alert("бюджет на 1 день");
  alert( appData.budget / 30);
