/* Стрелочные функции */
const exArrowFnx = (a, b) => {
	let c
	c = a + b
	return c
}
console.log(exArrowFnx(4, 5))
/* Стрелочная функция - это выражение, она всегда анонимна. Чтобы дать имя такой функции нужно присвоить ее переменной */

/* Стрелочная функция в виде колбек функции: */
setTimeout(() => {
	console.log('Стрелочная функция колбэк')
}, 2000)

/* Если у стрелочной функции 1 параметр то круглые скобки можно опустить */
/* Фигурные скобки по бокам тела функции можно опустить если функция состоит из 1 выражения */
const sum = a => console.log(a)
sum(4) // 4
