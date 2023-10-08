import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

const TodoForm = ({ todoList, setTodoList }) => {
	const [value, setValue] = useState('')
	const preventDefault = event => {
		event.preventDefault()
		if (value.length) {
			const newTodo = {
				text: value,
				isCompleted: false,
				id: uuidv4(),
			}
			setTodoList([...todoList, newTodo])
		}
		setValue('')
	}

	return (
		<form onSubmit={preventDefault} className={styles.formMain}>
			<label>
				<input
					className={styles.inputForm}
					type='text'
					value={value}
					onChange={e => setValue(e.target.value)}
					placeholder='Enter new todo'
				/>
			</label>
			<Button />
		</form>
	)
}

export default TodoForm
