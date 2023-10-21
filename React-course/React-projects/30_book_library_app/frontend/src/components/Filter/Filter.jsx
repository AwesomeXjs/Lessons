import { useDispatch, useSelector } from 'react-redux'
import {
	resetFilters,
	selectTitleFilter,
	setTitleFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
	const dispatch = useDispatch()
	const titleFilter = useSelector(selectTitleFilter)
	const handleTitleFilterChanger = e => {
		dispatch(setTitleFilter(e.target.value))
	}
	const deleteFilters = () => {
		dispatch(resetFilters())
	}
	return (
		<div>
			<div className='app-block filter'>
				<div className='filter-row'>
					<div className='filter-group'>
						<input
							value={titleFilter}
							onChange={handleTitleFilterChanger}
							type='text'
							placeholder='Filter by title...'
						/>
					</div>
					<button type='button' onClick={deleteFilters}>
						Reset Filters
					</button>
				</div>
			</div>
		</div>
	)
}

export default Filter
