import _ from 'lodash';
import update from 'immutability-helper';
import {
    FETCH_MEETINGS,
    SHOW_MEETING,
    CREATE_MEETING,
    EDIT_MEETING,
    UPDATE_MEETING,
    DELETE_MEETING
} from '../actions/contants';
//import * as data from '../data.json';
//import { getDefaultData } from '../utils/data';

const initialState = [];


export default function (state = initialState, action){
    switch(action.type){
        case FETCH_MEETINGS:
            console.log('state in FETCH_MEETINGS reducer', state);
            return [...state];
        case SHOW_MEETING:
            return state.filter(m => m.id === action.payload)[0]
        case CREATE_MEETING:
            return [
                ...state,
                    Object.assign({}, action.payload)
                ];
        case EDIT_MEETING:
            return {
                ...state,
                    ...state.filter(m => m.id === action.payload)[0]
            }
        case UPDATE_MEETING:
            return [
                ...state.filter(m => m.id !== action.payload.updatedMeeting.id),
                    Object.assign(
                            {},
                            {...state.filter(m => m.id === action.payload.updatedMeeting.id)[0]},
                            action.payload.updatedMeeting
                        )
                ];
        case DELETE_MEETING:
            return [...state.filter(m => m.id !== action.payload)];
        default:
            return state;
    }
}