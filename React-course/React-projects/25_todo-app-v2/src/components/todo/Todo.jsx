import { RiChatDeleteLine } from 'react-icons/ri'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import styles from './Todo.module.css'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'

const Todo = ({
	text,
	deleteClickClear,
	id,
	isCompleted,
	todoList,
	setTodoList,
}) => {
	const toggleToDoHandler = id => {
		setTodoList(
			todoList.map(e =>
				e.id === id ? { ...e, isCompleted: !e.isCompleted } : { ...e }
			)
		)
	}
	return (
		<div
			className={
				isCompleted
					? `${styles.todo}  ${styles.todo_complete}`
					: `${styles.todo}`
			}
		>
			<PlaylistAddCheckIcon className={styles.iconMain} />
			<p>{text}</p>
			<div className={styles.doneIcons}>
				<IoCheckmarkDoneCircleSharp
					onClick={() => toggleToDoHandler(id)}
					className={styles.doneIconMain}
				/>
				<RiChatDeleteLine
					onClick={() => deleteClickClear(id)}
					className={styles.deleteIconMain}
				/>
			</div>
		</div>
	)
}

export default Todo
