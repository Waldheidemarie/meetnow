import {
    FETCH_CATEGORIES,
    SHOW_CATEGORY,
    FETCH_MEETINGS,
    SHOW_MEETING,
    CREATE_MEETING,
    EDIT_MEETING,
    UPDATE_MEETING,
    DELETE_MEETING
} from './contants';


export function fetchCategories(){
    return (dispatch, getState) => {
        // asyn db call operations will be here ...
        dispatch({
            type: FETCH_CATEGORIES
        })
    }
}

export function showCategory(category) {
    return (dispatch, getState) => {
        // asyn db call operations will be here ...
        dispatch({
            type: SHOW_CATEGORY,
            payload: category
        })
    }
}

export function fetchMeetings() {
    return (dispatch, getState) => {
        // asyn db call operations will be here ...
        //let allMeetings = getState().meetings
        dispatch({
            type: FETCH_MEETINGS
        })
    }
}

export function showMeeting(meetingId) {
    return (dispatch, getState) => {
        // asyn db call operations will be here ...
        dispatch({
            type: SHOW_MEETING,
            payload: meetingId
        })
    }
}

export function createMeeting(newMeeting) {
    return (dispatch, getState) => {
        // asyn db call operations will be here ...
        dispatch({
            type: CREATE_MEETING,
            payload: {...newMeeting}
        })
    }
}

export function editMeeting(meetingId) {
    return (dispatch, getState) => {
        // asyn db call operations will be here ...
        dispatch({
            type: EDIT_MEETING,
            payload: meetingId
        })
    }
}

export function updateMeeting(updatedMeeting) {
    return (dispatch, getState) => {
        // asyn db call operations will be here ...
        dispatch({
            type: UPDATE_MEETING,
            payload: { updatedMeeting }
        })
    }
}

export function deleteMeeting(id) {
    return (dispatch, getState) => {
        // asyn db call operations will be here ...
        dispatch({
            type: DELETE_MEETING,
            payload: id
        })
    }
}
