import {
    FETCH_CATEGORIES,
    SHOW_CATEGORY,
    FETCH_MEETINGS,
    CREATE_MEETING,
    SHOW_MEETING,
    UPDATE_MEETING,
    DELETE_MEETING,
    HIDE_FORM
} from './contants';

export function hideForm() {
    return {
        type: HIDE_FORM
    }
}

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

export function createMeeting(...values) {
    return {
        type: CREATE_MEETING,
        payload: {...values}
    }
}

export function showMeeting(id) {
    return {
        type: SHOW_MEETING,
        payload: id
    }
}

export function updateMeeting(id) {
    return {
        type: UPDATE_MEETING,
        payload: id
    }
}

export function deleteMeeting(id) {
    return {
        type: DELETE_MEETING,
        payload: id
    }
}
