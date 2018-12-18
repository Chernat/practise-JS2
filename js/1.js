var num = numMore100();

function numMore100() {
  do {
    var num = prompt('Введите чиcло больше 100', '');
  } while (num && (num <= 100 || !(!isNaN(parseFloat(num)) && isFinite(num))))
}
