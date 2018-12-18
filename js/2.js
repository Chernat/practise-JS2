simpleNum(+prompt('Введите чиcло (Проcтый чиcла)', '0'));

function simpleNum(num) {
  for (var i = 2; i <= num; i++) {
    for (var j = 2; j <= i; j++) {
      if (i % j === 0) {
        break;
      }
    }
    if (i === j) {
      console.log(i);
    }
  }
}
