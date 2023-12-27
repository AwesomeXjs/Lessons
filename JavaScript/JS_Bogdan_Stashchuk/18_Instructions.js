/* Инструкции */
/* Выражение всегда возвращает значение */
/* Инструкция выполняет определенные дейсвтия */

let a // инструкция (выполняет действие обьявление переменной)
const b = 5
if (a > 5) {
	console.log('Yo')
} // if не возвращает значение, а выполняет действие - инструкция

for (let i = 0; i < 5; i++) {
	console.log(i)
}
/* Инструкция обычно заканчивается точкой с запятой */
/* Точку с запятой можно опускать */

/* Выражения - инструкции. Это выражения которые не только возвращают значение но и выполняют какие то действия */
a = a + 3
c = a + b

/* Инструкция не может быть трансформирована в выражение */
/* Как отличить выражения от инструкций:
Выражения могут быть использованы как аргументы при вызове функций */