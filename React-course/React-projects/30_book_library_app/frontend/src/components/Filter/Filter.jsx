import { useDispatch, useSelector } from 'react-redux'
import {
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
	return (
		<div>
			<div className='app-block filter'>
				<div className='filter-group'>
					<input
						value={titleFilter}
						onChange={handleTitleFilterChanger}
						type='text'
						placeholder='Filter by title...'
					/>
				</div>
			</div>
		</div>
	)
}

export default Filter
