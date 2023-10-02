/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3]

// Напишите код здесь
/* const b = [...a] */
// const b = JSON.parse(JSON.stringify(a))
// const b = Array.from(a)
const b = a.map(e => e)
// const b = a.reduce((acc, ele) => acc.concat([ele]), [])
// const b = a.filter(e => e)

b.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
// [1, 2, 3, "newElement"]

const persons = [
	{
		name: 'Dima',
		info: {
			age: 25,
			city: 'Pavlodar',
		},
	},
	{
		name: 'Dasha',
		info: {
			age: 25,
			city: 'Astana',
		},
	},
]

const defPersons = JSON.parse(JSON.stringify(persons))
defPersons[0].info.age = 35
console.log(defPersons[0].info.age)
console.log(persons[0].info.age)
