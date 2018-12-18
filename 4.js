var string = prompt('Введите cтроку (cчитает количеcтво cимволов)',''),
    letter = prompt('Введите букву (cчитает количеcтво cимволов)', '');

console.log(numLetter(string, letter));

function numLetter(str, ltr) {
  str = str.toLowerCase();
  ltr = ltr.toLowerCase();
  var chars = 0;
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) == ltr) {
        chars++;
      }
    }
  return chars;
}
