import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import ToDoButtonPanel from './components/ToDoButtonPanel/ToDoButtonPanel'

function App() {
	const [todoList, setTodoList] = useState([])

	const state = {
		todoList,
		setTodoList,
	}
	const completedTodo = todoList.filter(e => e.isCompleted)

	return (
		<div className='App'>
			<h1 className='title-main'>Todo App</h1>
			<TodoForm {...state} />
			{!!todoList.length ? (
				<ToDoButtonPanel completedTodo={completedTodo} {...state} />
			) : null}
			<TodoList {...state} />
			{!!completedTodo.length ? (
				<h4>{`У вас ${completedTodo.length} завершенных задач!`}</h4>
			) : null}
		</div>
	)
}

export default App
