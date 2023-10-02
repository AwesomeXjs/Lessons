/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
	sum() {
		return this.reduce((acc, ele) => {
			if (typeof ele === 'number') {
				return acc + ele
			}
			return acc
		}, 0)
	}
	onlyNumbers() {
		return this.filter(e => typeof e === 'number')
	}
}

const exampleOne = new ExtendedArray(1, true, 8)
console.log(exampleOne.onlyNumbers())
const exampleTwo = new ExtendedArray(1, 12, 5)
console.log(exampleTwo.sum())
exampleOne.forEach(e => console.log(e))
