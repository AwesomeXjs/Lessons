/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

const worldTimeOut = () => {
	console.log('Старт')
	setTimeout(() => console.log('Hello world'), 5000)
}
worldTimeOut()
