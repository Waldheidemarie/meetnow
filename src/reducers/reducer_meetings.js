import _ from 'lodash';
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
            return _.mapKeys(state, 'id');
        case CREATE_MEETING:
            return update(state, { $push: [action.payload] });
        case EDIT_MEETING:
            const others = _.mapKeys((Object.values(state).filter(m => m.id !== action.payload)), 'id');
            let currMeeting = Object.values(state).filter(m => m.id === action.payload)[0];
            return { ...others, currMeeting }
        case UPDATE_MEETING:
            return update(state, {[action.payload.id]: { $set: action.payload }});
        default:
            return state;
    }
}