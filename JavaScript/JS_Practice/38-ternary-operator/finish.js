/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

function isArrayEmpty(inputArray) {
	if (inputArray.length > 0) {
		return 'Массив не пустой'
	} else {
		return 'Массив пустой'
	}
}

console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))

const isArrowFX = inputArray => {
	let ret
	inputArray.length > 0 ? (ret = `Массив не пустой`) : (ret = `Массив пустой`)
	return ret
}
console.log(isArrowFX([1, 5, 6]))
console.log(isArrowFX([]))
