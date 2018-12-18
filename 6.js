var numFibonachi = +prompt('Введите чиcло (Выводит чиcло Фибоначи)', '');

console.log('Рекурcия: ' + numFibRec(numFibonachi) + ' Функция: ' + numFib(numFibonachi));

function numFibRec(num) {
  if (num < 2) {
    return num;
  }
  return numFibRec(num - 1) + numFibRec(num - 2);
}

function numFib(num) {
  var firtsPrevNum = 0,
      secondPrevNum = 1,
      curNum = 0;

  for (var i = 2; i <= num; i++) {
    curNum = firtsPrevNum + secondPrevNum;
    firtsPrevNum = secondPrevNum;
    secondPrevNum = curNum;
  }

  return curNum;
}
