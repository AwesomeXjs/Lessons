import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../../redux/books/actionCreators'
import './BookForm.css'

const BookForm = () => {
	const [date, setDate] = useState({
		title: '',
		author: '',
	})
	const dispatch = useDispatch()

	const handleSubmit = event => {
		event.preventDefault()
		if (date.author && date.title) {
			//dispatch action
			dispatch(addBook(date))
			setDate({
				title: '',
				author: '',
			})
		}
	}
	return (
		<div className='app-block book-form'>
			<h2>Add new book</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='title'>
						Title:
						<input
							type='text'
							id='title'
							value={date.title}
							onChange={e => setDate({ ...date, title: e.target.value })}
						/>
					</label>
				</div>
				<div>
					<label htmlFor='author'>
						Author:
						<input
							type='text'
							id='author'
							value={date.author}
							onChange={e => setDate({ ...date, author: e.target.value })}
						/>
					</label>
				</div>
				<button type='submit'>Add book</button>
			</form>
		</div>
	)
}

export default BookForm
