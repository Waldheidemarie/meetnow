import update from 'immutability-helper';
import {
    FETCH_MEETINGS,
    CREATE_MEETING,
    SHOW_MEETING,
    EDIT_MEETING,
    UPDATE_MEETING,
    DELETE_MEETING
} from '../actions/contants';
//import { getDefaultMeetings } from '../data';

//const initialState = getDefaultMeetings();

export default function(state = [], action){
    switch(action.type){
        case FETCH_MEETINGS:
            return [ ...state];
        case CREATE_MEETING:
           return update(state, {$push: [action.payload] });
        case SHOW_MEETING:
            return state.filter(m => m.id === action.payload.id)[0];
        case EDIT_MEETING:
            return false;
        default:
            return state;
    }
}