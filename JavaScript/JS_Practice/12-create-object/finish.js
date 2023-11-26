/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const myInfo = {
	name: 'Dima',
	surname: 'Borovik',
	favoriteNumber: 25,
}

//option 1
const infoText = ({ name, surname, favoriteNumber }) => {
	console.log(
		`My name is ${name} ${surname} and my favorite number is ${favoriteNumber}`
	)
}
infoText(myInfo)

// option 2
const myInfoText = `My name is ${myInfo.name} ${myInfo.surname} and my favorite number is ${myInfo.favoriteNumber}`
console.log(myInfoText)
