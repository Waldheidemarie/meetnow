import { combineReducers } from 'redux';
import categoriesReducer from './reducer_categories';
import meetingsReducer from './reducer_meetings';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    meetings: meetingsReducer,
    form: formReducer
});

export default rootReducer;