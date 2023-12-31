/* оператор ! (НЕ) чаще всего используется в условных иснтрукциях */

!10 // false
!0 // true
!true // false
!'abc' // false
!'' //true
!undefined //true

/* C помощью двойного отрицания можно конвертировать любое значение в булевое */
!!10 // true
!!undefined //false
!!0 // false
!!'' //false

const obj = {}
console.log(!!obj) // true

/* Операторы && (И) || (ИЛИ) */
/* Выражение 1 && Выражение 2
  Если Выражение 1 ложно то Выражение 2 игнорируется
	Для оператора && нужно чтобы оба выражения были правдивыми, либо результатом будет первое ложное выражение в цепочке

*/
console.log(0 && 10) // 0
/* Выражение 1 || Выражение 2 */
/* Если выражение 1 Истинно - то выражение 2 игнорируется */

console.log(0 || 10) // 10
let c
c && console.log('Выполнено!') // undefined

a && b && c && d // Задача оператора - найти первое ложное значение
a || b || c || d // задача оператора - найти первое истинное значение
