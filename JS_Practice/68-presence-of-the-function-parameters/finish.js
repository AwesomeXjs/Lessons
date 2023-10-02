/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

function square(a) {
	if (arguments.length >= 1) {
		return console.log(a * a)
	}
	throw new Error(`Функция "square" не может быть вызвана без аргумента`)
	/* return arguments.length >= 1
		? console.log(a * a)
		: console.error(`Функция "square" не может быть вызвана без аргумента`) */
}

square(10)
// 100

square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
