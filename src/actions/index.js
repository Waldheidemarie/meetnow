import {
    FETCH_CATEGORIES,
    SHOW_CATEGORY,
    FETCH_MEETINGS,
    CREATE_MEETING,
    SHOW_MEETING,
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

export function createMeeting(values) {
    return {
        type: CREATE_MEETING,
        payload: values,
    }
}

export function showMeeting(id) {
    return {
        type: SHOW_MEETING,
        payload: id
    }
}

export function editMeeting(id) {
    return {
        type: EDIT_MEETING,
        payload: id
    }
}

export function updateMeeting(values) {
    console.log('values update actions', values);
    return {
        type: UPDATE_MEETING,
        payload: values
    }
}

export function deleteMeeting(id) {
    return {
        type: DELETE_MEETING,
        payload: id
    }
}
