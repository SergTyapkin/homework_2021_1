'use strict';

/**
 * Компаратор для сортировки русских строк
 *
 * @param {number} a - Первая строка.
 * @param {number} b - Вторая строка.
 * @returns {boolean}
 */
const comparator = (a, b) => {
    let collator = new Intl.Collator('ru', {
        sensitivity: "accent",
    });
    return collator.compare(a, b);
}

/**
 * Сортирует буквы в словах строки, каждое слово делает с большой бквы - остальные буквы маленькие.
 * Затем сортирует слова в предложении.
 *
 * @param {string} string - Обрабатываемая строка.
 * @returns {string}
 */
const sort = function (string) {
    if (string.length === 0)
        return null;

    let sentence = [];
    string.split(' ').forEach(item => {
        item = item.split(''); // кастуем слово в массив для сортировки
        item.sort(comparator); // сортируем буквы в слове
        item = item[0].toUpperCase() + item.join('').slice(1).toLowerCase(); // Слепляем первую большую и остаток - маленькие
        sentence.push(item); // Докидываем в предложение новое слово
    });
    sentence.sort(comparator); // сортируем слова
    return sentence.join(' ');
};