import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	title: '',
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setTitleFilter: (state, action) => {
			//return {...state, title: action.payload}
			//Можно мутировать state благодаря библиотеке immer  встроенной в reduxSlice, но нельзя присваивать новое состояние state
			state.title = action.payload
		},
	},
})
export const { setTitleFilter } = filterSlice.actions

export const selectTitleFilter = state => state.filter.title

export default filterSlice.reducer