function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return arr;
  }
  if (d === 0) {
    arr.push(-b/(2 * a));
  }
  if (d > 0) {
    arr.push((-b + Math.sqrt(d))/(2*a));
    arr.push((-b - Math.sqrt(d))/(2*a));
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = "Ошибка расчета";
  if (isNaN(percent) || (percent < 0)) return `Параметр "percent" содержит неправильное значение ${percent}`;
  if (isNaN(percent) || (contribution < 0)) return `Параметр "contribution" содержит неправильное значение ${contribution}`;
  if (isNaN(percent) || (amount < 0)) return `Параметр "amount" содержит неправильное значение ${amount}`;
  percent = +percent;
  contribution = +contribution;
  amount = +amount;

  return totalAmount;
}
