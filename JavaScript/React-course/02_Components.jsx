/* Любое приложение React состоит из компонентов */

const { Component } = require('react')

/* Характеристики компонентов:
1. Можно использовать многократно
2. Компоненты формируют четкую иерархическую структуру
3. Видом компонентов можно управлять извне с помощью свойств
4. Компоненты могут иметь свое собственное состояние
5. Каждый компонент отвечает за отдельную логическую часть интерфейса
 */

/* React компоненты состоят из HTML, CSS, JS */

const hello = () => {
	return <h1>Hello World</h1>
}
/* Классовые компоненты: */
class HelloWorld extends Component {
	render() {
		return <h1>Hello World</h1>
	}
}