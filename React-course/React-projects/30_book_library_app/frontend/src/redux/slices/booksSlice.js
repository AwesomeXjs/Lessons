import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithID from '../../custom/createBookWithID'

const initialState = []

const bookSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		addBook: (state, action) => {
			state.push(action.payload)
		},
		deleteBook: (state, action) => {
			return state.filter(e => e.id !== action.payload)
		},
		addFavoriteBook: (state, action) => {
			return state.map(e =>
				e.id === action.payload ? { ...e, isFavorite: !e.isFavorite } : { ...e }
			)
		},
	},
})

export const { addBook, deleteBook, addFavoriteBook } = bookSlice.actions

export const thunkFunction = async (dispatch, getState) => {
	console.log(getState())
	try {
		const res = await axios.get('http://localhost:4000/random-book')
		if (res?.data?.title && res?.data?.author) {
			dispatch(addBook(createBookWithID(res.data, 'API')))
		}
	} catch (error) {
		console.log('Error fetching random book', error)
	}
	console.log(getState())
}

export default bookSlice.reducer
