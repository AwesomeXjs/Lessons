import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithID from '../../custom/createBookWithID'
import { setError } from './errorSlice'

const initialState = []

export const fetchBook = createAsyncThunk(
	'books/fetchBooks',
	async (url, thunkAPI) => {
		try {
			const res = await axios.get(url)
			return res.data
		} catch (error) {
			thunkAPI.dispatch(setError(error.message))
			throw error
		}
	}
)

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
	extraReducers: builder => {
		builder.addCase(fetchBook.fulfilled, (state, action) => {
			if (action.payload.title && action.payload.author) {
				state.push(createBookWithID(action.payload, 'API'))
			}
		})
	},
	/* extraReducers: {
		[fetchBook.fulfilled]: (state, action) => {
			if (action.payload.title && action.payload.author) {
				state.push(createBookWithID(action.payload, 'API'))
			}
		},
	}, */
})

export const { addBook, deleteBook, addFavoriteBook } = bookSlice.actions

export default bookSlice.reducer
