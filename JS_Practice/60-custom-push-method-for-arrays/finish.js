/** ЗАДАЧА 60 - Модифицированный метод push для массивов
 *
 * 1. Создайте новый класс "CustomArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте один пользовательский метод "customPush" в новый класс.
 * Этот метод будет иметь один параметр "newElement".
 *
 * При вызове этого метода необходимо выполнить следующие действия:
 *  - Добавить новый элемент в существующий массив
 *  (не используйте для этого метод "push")
 *  - Изменить свойство "length" массива (увеличить его на 1)
 *  - Вывести в консоль следующую строку:
 * "Новый элемент <newElement> был только что добавлен в массив"
 *
 * 3. Создайте экземпляр нового класса "CustomArray"
 * и протестируйте новый метод "customPush" и сравните его с "push"
 *
 * 4. Что произойдет, если имя пользовательского метода
 * в классе "CustomArray" также будет "push" вместо "customPush"?
 * Попробуйте это.
 */

class CustomArray extends Array {
	customPush(newElement) {
		console.log(this.length)
		this[this.length] = newElement
		console.log(this.length)
		return console.log(
			`Новый элемент ${newElement} был только что добавлен в массив`
		)
	}
}

const examplePush = new CustomArray(1, 5, 7)
examplePush.customPush(5)
console.log(examplePush)

examplePush.push(12)
console.log(examplePush)

const myArray = [1, 2]
myArray[10] = 5
console.log(myArray)
