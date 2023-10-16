import { useDispatch, useSelector } from 'react-redux'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import './BookList.css'
import { addFavoriteBook, deleteBook } from '../../redux/books/actionCreators'

const BookList = () => {
	const books = useSelector(state => state.books)
	const dispatch = useDispatch()

	const addFavoriteHandler = id => {
		dispatch(addFavoriteBook(id))
	}
	return (
		<div className='app-block book-list'>
			<h2>Book List</h2>
			{books.length === 0 ? (
				<p>No books available</p>
			) : (
				<ul>
					{books.map((book, i) => (
						<li key={book.id}>
							<div className='book-info'>
								{++i}.{book.title} by <strong>{book.author}</strong>
							</div>
							<div className='book-actions'>
								<BsFillBookmarkStarFill
									onClick={() => addFavoriteHandler(book.id)}
									className={
										book.isFavorite
											? 'favorite-icon favorite-active'
											: 'favorite-icon'
									}
								/>
								<button onClick={() => dispatch(deleteBook(book.id))}>
									Delete
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default BookList
