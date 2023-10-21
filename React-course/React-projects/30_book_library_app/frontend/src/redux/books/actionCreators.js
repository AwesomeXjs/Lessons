import * as actionTypes from './actionTypes'

export const addBook = newBook => {
	return {
		type: actionTypes.ADD_BOOK,
		payload: newBook,
	}
}

export const deleteBook = id => {
	return {
		type: actionTypes.DELETE_BOOK,
		payload: id,
	}
}

export const addFavoriteBook = id => {
	return {
		type: actionTypes.ADD_FAVORITE,
		payload: id,
	}
}
export const favoriteList = () => {
	return {
		type: actionTypes.FAVORITE_LIST,
	}
}
