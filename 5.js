var min = +prompt('Введите min (Выводит рандомное в пределах min-max)', ''),
    max = +prompt('Введите max (Выводит рандомное в пределах min-max)', '');

console.log(randomNum(min,max));

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
