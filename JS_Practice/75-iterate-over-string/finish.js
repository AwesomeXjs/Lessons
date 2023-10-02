/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// Напишите код здесь
/* for (const a of str) {
	if (vowels.includes(a)) {
		vowelsCount += 1
	}
} */
// const newArray =
/* 
vowelsCount = newArray.reduce(
	(sum, ele) => (vowels.includes(ele) ? (sum += 1) : sum),
	0
) */
;[...str].forEach(e => (vowels.includes(e) ? (vowelsCount += 1) : vowelsCount))
console.log(vowelsCount)
// 9
