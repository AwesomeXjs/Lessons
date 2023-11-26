/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'

// Напишите код здесь
const compare = (a, b) => {
	let c = parseInt(a)
	let d = parseInt(b)
	if (c <= d) {
		console.log(true)
	} else {
		console.log(false)
	}
}
compare(myVariable1, myVariable2)

myVariable1 = '20'
myVariable2 = 100

// Напишите код здесь
compare(myVariable1, myVariable2)

//Вариант 2
console.log(myVariable2 + +myVariable1)
