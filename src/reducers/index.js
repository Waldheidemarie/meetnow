import { combineReducers } from 'redux';
import categoriesReducer from './reducer_categories';
import meetingsReducer from './reducer_meetings';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    meetings: meetingsReducer
});

export default rootReducer;