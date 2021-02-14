'use strict';

/**
 * Сортирует буквы в словах строки, каждое слово делает с большой бквы - остальные буквы маленькие.
 * Затем сортирует слова в предложении.
 *
 * @param {string} string - Обрабатываемая строка.
 * @returns {string}
 */
const sort = (string) => {
    /**
     * Компаратор для сортировки русских строк
     *
     * @param {string} a - Первая строка.
     * @param {string} b - Вторая строка.
     * @returns {number}
     */
    const comparator = (a, b) => {
        return ( new Intl.Collator('ru', {
            sensitivity: "accent",
        }) ).compare(a, b);
    }

    if (string.length === 0)
        return "";

    const sentence = [];
    string.split(' ').forEach(word => {
        word = word.split('').sort(comparator); // сортируем буквы в слове
        word = word[0].toUpperCase() + word.join('').slice(1).toLowerCase(); // Слепляем первую большую и остаток - маленькие
        sentence.push(word); // Докидываем в предложение новое слово
    });
    sentence.sort(comparator); // сортируем слова
    return sentence.join(' ');
};