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

export function showMeeting(meetingId) {
    return {
        type: SHOW_MEETING,
        payload: meetingId
    }
}

export function createMeeting(newMeeting) {
    console.log('values in create action', newMeeting)
    return {
        type: CREATE_MEETING,
        payload: {...newMeeting}
    }
}

export function editMeeting(meetingToEditId) {
    return {
        type: EDIT_MEETING,
        payload: meetingToEditId
    }
}

export function updateMeeting(updatedMeeting) {
    console.log('values update actions', updatedMeeting);
    return {
        type: UPDATE_MEETING,
        payload: { updatedMeeting }
    }
}

export function deleteMeeting(meetingToDeleteId) {
    return {
        type: DELETE_MEETING,
        payload: meetingToDeleteId
    }
}
