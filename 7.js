var string = prompt('Введите cтроку (Выводит реверc)', '');

console.log(revers(string));

function revers(str) {
  var reversStr = '';
  for (var i = str.length; i >= 0; i--) {
    reversStr += str.charAt(i);
  }
  return reversStr;
}
