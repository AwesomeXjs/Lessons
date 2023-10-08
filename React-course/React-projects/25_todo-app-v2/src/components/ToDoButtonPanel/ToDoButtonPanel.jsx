import { IoMdCloudDone } from 'react-icons/io'
import { AiTwotoneDelete } from 'react-icons/ai'
import CustomButton from '../UI/CustomButton'

const ToDoButtonPanel = ({ todoList, setTodoList, completedTodo }) => {
	const filterByCompleted = () => {
		setTodoList(todoList.filter(e => !e.isCompleted))
	}
	const deleteAllTodos = () => {
		setTodoList([])
	}
	return (
		<div>
			<CustomButton
				disabled={completedTodo.length ? false : true}
				onClick={filterByCompleted}
				title={'Done todo completed'}
			>
				<IoMdCloudDone />
			</CustomButton>
			<CustomButton onClick={deleteAllTodos} title={'Delete all'}>
				<AiTwotoneDelete />
			</CustomButton>
		</div>
	)
}

export default ToDoButtonPanel
