/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const car1 = {
	carBrand: 'Audi',
	price: 1000,
	isAvailableForSale: true,
}
const car2 = {
	carBrand: 'Toyota',
	price: 2000,
	isAvailableForSale: true,
}
const car3 = {
	carBrand: 'Mazda',
	price: 3000,
	isAvailableForSale: false,
}

const cars = [car1, car2, car3]
console.log(cars)

const car4 = {
	carBrand: 'Nissan',
	price: 4000,
	isAvailableForSale: false,
}

cars.push(car4)
console.log(cars)
