/** ЗАДАЧА 56 - Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 *
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */

const asyncPersonInfo = person => {
	const {
		id,
		name,
		username,
		email,
		address: {
			street: myStreet,
			suite: mySuite,
			city: myCity,
			zipcode: myZipcode,
			geo: myGeo,
		},
		phone: myPhone,
		website: myWebsite,
	} = person
	console.log({
		id,
		name,
		username,
		email,
		myStreet,
		mySuite,
		myCity,
		myZipcode,
		myGeo,
		myPhone,
		myWebsite,
	})
}

const getUser = async url => {
	const res = await fetch(url)
	const json = await res.json()
	return json
}
const resultAwait = getUser(
	'https://jsonplaceholder.typicode.com/users/1'
).then(value => {
	asyncPersonInfo(value)
})
console.log(resultAwait)
const personInfo = person => {
	const {
		name: name,
		age: personAge,
		location: { country: origin, city: homeCity },
		friendsQty = 0,
		createdAtYear = new Date().getFullYear(),
	} = person

	return {
		name,
		personAge,
		origin,
		homeCity,
		friendsQty,
		createdAtYear,
	}
}
const person = {
	name: 'Alice',
	age: 19,
	location: {
		country: 'England',
		city: 'London',
	},
}

const result = personInfo(person)

console.log(result)
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/
