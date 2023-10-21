import * as actionTypes from './actionTypes'

const initialState = []

const booksReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_BOOK:
			return [...state, action.payload]
		case actionTypes.DELETE_BOOK:
			return state.filter(e => e.id !== action.payload)
		case actionTypes.ADD_FAVORITE:
			return state.map(e =>
				e.id === action.payload ? { ...e, isFavorite: !e.isFavorite } : { ...e }
			)

		default:
			return state
	}
}

export default booksReducer
