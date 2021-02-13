'use strict';

/* компаратор для обработки буквы 'Ё' - она по неизвестным причинам "больше" любой буквы,
а потому если нам надо сравнить с 'Ё', вместо этого сравниваем с 'Ж', разбирая случай, когда обе буквы равны.
 */
let comparator = (a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a === 'ё') {
        if (b === 'ё')
            return 0;
        else if (b >= 'ж')
            return -1;
        else
            return 1;
    } else if (b === 'ё') {
        if (a >= 'ж')
            return 1;
        else
            return -1;
    } else {
        return (b<a) - (a<b); // стандартное сравнение, на выходе: -1 / 0 / 1
    }
}

const sort = function (string) {
    if (string.length === 0)
        return null;

    let prevSpaceId = 0;
    let word;
    let sentence = [];
    string += ' ';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') { // идём до первого пробела
            word = string.substring(prevSpaceId, i).toLowerCase().split(''); // берём слово до этого пробела в виде массива
            prevSpaceId = i + 1;
            word.sort(comparator); // сортируем буквы в слове

            if (word.length != 0) {
                sentence.push(word.shift().toUpperCase()); // первая буква - заглавная
                word.forEach(item => sentence[sentence.length - 1] += item);
                word = [];
            }
        }
    }
    sentence.sort(comparator); // сортируем слова
    return sentence.join(' ');
};