import { FETCH_CATEGORIES,  } from '../actions/contants';

export default function(state = [], action){
    switch(action.type){
        case FETCH_CATEGORIES:
            return [...state.categories];
        // case SHOW_CATEGORY:
        //     return state.categories.filter(c => c.category === action.payload);
        default:
            return state;
    }
}