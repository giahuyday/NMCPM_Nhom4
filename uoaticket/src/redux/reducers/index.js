import { combineReducers} from 'redux'
import { filmReducer, selectedProductReducer } from './film'

const reducers = combineReducers({
    allFilms: filmReducer,
    film: selectedProductReducer
});

export default reducers