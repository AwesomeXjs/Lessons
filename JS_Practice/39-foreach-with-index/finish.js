/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']

const cityInfo = (city, i) => {
	return console.log(`${city} is at the index ${i} in the myCities array`)
}

myCities.forEach((e, i) => cityInfo(e, i))

const find = 'Singapore'
myCities.forEach((e, i) => {
	if (e === find) {
		console.log(i)
	}
})
