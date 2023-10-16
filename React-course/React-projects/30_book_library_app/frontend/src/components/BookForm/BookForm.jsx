import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../../redux/books/actionCreators'
import createBookWithID from '../../custom/createBookWithID'
import booksData from '../../data/books.json'
import './BookForm.css'

const BookForm = () => {
	const [data, setData] = useState(createBookWithID({ title: '', author: '' }))
	const dispatch = useDispatch()

	const handleSubmit = event => {
		event.preventDefault()
		if (data.author && data.title) {
			//dispatch action
			dispatch(addBook(data))
			setData(createBookWithID({ title: '', author: '' }))
		}
	}
	const handleAddRandomBook = () => {
		const randomIndex = Math.floor(Math.random() * booksData.length)
		dispatch(addBook(createBookWithID(booksData[randomIndex])))
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
