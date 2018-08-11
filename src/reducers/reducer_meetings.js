import update from 'immutability-helper';
import {
    FETCH_MEETINGS,
    CREATE_MEETING,
    SHOW_MEETING,
    EDIT_MEETING,
    UPDATE_MEETING,
    DELETE_MEETING
} from '../actions/contants';
import { getDefaultMeetings } from '../data';

const initialState = getDefaultMeetings();

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_MEETINGS:
            return state;
        case CREATE_MEETING:
            return update(state, { $push: [action.payload] });
        case EDIT_MEETING:
            console.log('state in edit reducer', state);
            // const currMeeting = Object.values(state).filter(m => m.id === action.payload)[0];
            // return { ...state, currMeeting }
            return Object.values(state).filter(m => m.id === action.payload)[0];
        case UPDATE_MEETING:
            console.log('state in update reducer', state);
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state;
    }
}