var num = numMore100();

function numMore100() {
  do {
    var num = prompt('Введите чиcло больше 100', '');
  } while (100 >= num && num != null);
}