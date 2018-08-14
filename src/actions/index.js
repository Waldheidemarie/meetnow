import {
    FETCH_CATEGORIES,
    SHOW_CATEGORY,
    FETCH_MEETINGS,
    CREATE_MEETING,
    SHOW_MEETING,
    UPDATE_MEETING,
    DELETE_MEETING
} from './contants';


export function fetchCategories(){
    return {
        type: FETCH_CATEGORIES
    }
}

export function showCategory(category) {
    return {
        type: SHOW_CATEGORY,
        payload: category
    }
}

export function fetchMeetings() {
    return {
        type: FETCH_MEETINGS
    }
}

export function createMeeting(newMeeting) {
    console.log('values in create action', newMeeting)
    return {
        type: CREATE_MEETING,
        payload: {...newMeeting}
    }
}

export function showMeeting(id) {
    return {
        type: SHOW_MEETING,
        payload: id
    }
}

export function updateMeeting(updatedMeeting) {
    console.log('values update actions', updatedMeeting);
    return {
        type: UPDATE_MEETING,
        payload: { updatedMeeting }
    }
}

export function deleteMeeting(id) {
    return {
        type: DELETE_MEETING,
        payload: id
    }
}
