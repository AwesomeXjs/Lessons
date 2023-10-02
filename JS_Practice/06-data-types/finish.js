/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const string = 'string'
const num = 5
const bool = true
const nul = null
const undf = undefined
const obj = {}
const arr = []

//option 1
console.log(typeof string)
console.log(typeof num)
console.log(typeof bool)
console.log(typeof nul)
console.log(typeof undf)
console.log(typeof obj)
console.log(typeof arr)

//Option 2
const arrayOfTypes = ['string', 5, true, null, undefined, {}, []]
arrayOfTypes.forEach(e => console.log(`${e} это ${typeof e}`))

//option 3
const typeOfFunct = e => {
	console.log(typeof e)
}
typeOfFunct(string)
typeOfFunct(num)
typeOfFunct(bool)
typeOfFunct(nul)
typeOfFunct(undf)
typeOfFunct(obj)
typeOfFunct(arr)
