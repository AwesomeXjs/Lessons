import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const bookSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		addBook: (state, action) => {
			return [...state, action.payload]
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

export default bookSlice.reducer

export const { addBook, deleteBook, addFavoriteBook } = bookSlice.actions
