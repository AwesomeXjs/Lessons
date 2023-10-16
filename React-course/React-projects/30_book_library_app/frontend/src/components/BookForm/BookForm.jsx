import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addBook } from '../../redux/books/actionCreators'
import booksData from '../../data/books.json'
import './BookForm.css'

const BookForm = () => {
	const [data, setData] = useState({
		title: '',
		author: '',
		id: uuidv4(),
	})
	const dispatch = useDispatch()

	const handleSubmit = event => {
		event.preventDefault()
		if (data.author && data.title) {
			//dispatch action
			dispatch(addBook(data))
			setData({
				title: '',
				author: '',
				id: uuidv4(),
			})
		}
	}
	const handleAddRandomBook = () => {
		const randomIndex = Math.floor(Math.random() * booksData.length)
		const randomBook = booksData[randomIndex]

		const randomBookWithIF = {
			...randomBook,
			id: uuidv4(),
		}

		dispatch(addBook(randomBookWithIF))
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
							value={data.title}
							onChange={e => setData({ ...data, title: e.target.value })}
						/>
					</label>
				</div>
				<div>
					<label htmlFor='author'>
						Author:
						<input
							type='text'
							id='author'
							value={data.author}
							onChange={e => setData({ ...data, author: e.target.value })}
						/>
					</label>
				</div>
				<button type='submit'>Add book</button>
				<button type='button' onClick={handleAddRandomBook}>
					Add random
				</button>
			</form>
		</div>
	)
}

export default BookForm
