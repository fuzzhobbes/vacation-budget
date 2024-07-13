var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
  var totalBudget = Number(prompt("What is your total budget?"));
  var accommodation = Number(prompt("What are your accommodation costs?"));
  var numOfDays = Number(prompt("How many days does your trip last?"));

  calculateDailyBudget(totalBudget, accommodation, numOfDays);
};

var calculateDailyBudget = function (totalBudget, accommodation, numOfDays) {
  var daily = ((totalBudget - accommodation) / numOfDays).toFixed(2);
  dailyBudget.innerText = `You can spend $${daily} a day on food and fun.`;
};

tripInfoButton.addEventListener("click", tripInfo);
