import Todo from '../todo/Todo'

const TodoList = ({ todoList, setTodoList }) => {
	const deleteClickClear = index => {
		setTodoList(todoList.filter(e => e.id !== index))
	}
	return (
		<div>
			{!!todoList.length ? (
				todoList.map(e => (
					<Todo
						{...e}
						key={e.id}
						deleteClickClear={deleteClickClear}
						todoList={todoList}
						setTodoList={setTodoList}
					/>
				))
			) : (
				<h2>задачи отсутствуют</h2>
			)}
		</div>
	)
}

export default TodoList
