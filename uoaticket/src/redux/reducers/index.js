import { combineReducers} from 'redux'
import { filmReducer } from './film'

const reducers = combineReducers({
    allFilms: filmReducer,
});

export default reducers