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

const initialState = {
    fetchError: null,
    isLoading: false,
    meetings: [
        {
            "id": "dfddsf3",
            "title": "New Business Workshop",
            "category": "Business",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo atque repellat eos aut maxime, incidunt voluptatem, animi impedit, exercitationem nihil neque! Facere sint vel, ratione deleniti est rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, hic ducimus praesentium repellendus ipsum aspernatur architecto ut consequatur, velit dolorem cum placeat ab in maiores sint fugiat? Soluta, quos dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam quo atque. Saepe et neque ducimus laborum ea repellendus nisi, animi, cum optio, nesciunt velit! Obcaecati distinctio corrupti quod praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo atque repellat eos aut maxime, incidunt voluptatem, animi impedit, exercitationem nihil neque! Facere sint vel, ratione deleniti est rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, hic ducimus praesentium repellendus ipsum aspernatur architecto ut consequatur, velit dolorem cum placeat ab in maiores sint fugiat? Soluta, quos dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam quo atque. Saepe et neque ducimus laborum ea repellendus nisi, animi, cum optio, nesciunt velit! Obcaecati distinctio corrupti quod praesentium?",
            "hostName": "John Doe",
            "hostPhotoURL": "https://randomuser.me/api/portraits/med/men/43.jpg",
            "date": "2018-10-03",
            "venue": "83 Main Street, Kangaroo Point QLD, Australia",
            "venueLatLng": {
                "lat": -27.4661299,
                "lng": 153.03504650000002
            },
            "attendees": [
                {
                    "id": "a1",
                    "name": "John Doe",
                    "photoURL": "https://randomuser.me/api/portraits/thumb/men/43.jpg"
                },
                {
                    "id": "a2",
                    "name": "Tanko Sani",
                    "photoURL": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
                },
                {
                    "id": "a3",
                    "name": "Abu Jega",
                    "photoURL": "https://randomuser.me/api/portraits/thumb/men/45.jpg"
                }

            ],
            "comments": [
                {
                    "id": "c1",
                    "parent": "dfddsf3",
                    "commenter": "John Doe",
                    "comment": "I like your perspective on this",
                    "likes": 5
                },
                {
                    "id": "c2",
                    "parent": "dfddsf3",
                    "commenter": "Tanimu Mai-Unguwa",
                    "comment": "Not constructive enough",
                    "likes": 0
                }
            ]
        },
        {
            "id": "zxcsw4",
            "title": "Python Conference",
            "category": "Conferences",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo atque repellat eos aut maxime, incidunt voluptatem, animi impedit, exercitationem nihil neque! Facere sint vel, ratione deleniti est rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, hic ducimus praesentium repellendus ipsum aspernatur architecto ut consequatur, velit dolorem cum placeat ab in maiores sint fugiat? Soluta, quos dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam quo atque. Saepe et neque ducimus laborum ea repellendus nisi, animi, cum optio, nesciunt velit! Obcaecati distinctio corrupti quod praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo atque repellat eos aut maxime, incidunt voluptatem, animi impedit, exercitationem nihil neque! Facere sint vel, ratione deleniti est rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, hic ducimus praesentium repellendus ipsum aspernatur architecto ut consequatur, velit dolorem cum placeat ab in maiores sint fugiat? Soluta, quos dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam quo atque. Saepe et neque ducimus laborum ea repellendus nisi, animi, cum optio, nesciunt velit! Obcaecati distinctio corrupti quod praesentium?",
            "hostName": "Guam Dialo",
            "hostPhotoURL": "https://randomuser.me/api/portraits/med/women/22.jpg",
            "date": "2019-03-15",
            "venue": "76 Oju Olobun Close, Lagos, Nigeria",
            "venueLatLng": {
                "lat": 6.4245587,
                "lng": 3.4147182000000385
            },
            "attendees": [
                {
                    "id": "a11",
                    "name": "Guam Dialo",
                    "photoURL": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
                },
                {
                    "id": "a12",
                    "name": "Labaran Maishago",
                    "photoURL": "https://randomuser.me/api/portraits/thumb/men/22.jpg"
                },
                {
                    "id": "a13",
                    "name": "Talle Maikosai",
                    "photoURL": "https://randomuser.me/api/portraits/thumb/women/48.jpg"
                },
                {
                    "id": "a14",
                    "name": "Maryama Sanda",
                    "photoURL": "https://randomuser.me/api/portraits/thumb/women/13.jpg"
                }
            ],
            "comments": []
        }
    ]
}

export default function (state = initialState, action){
    switch(action.type){
        case FETCH_MEETINGS:
            console.log('state in FETCH_MEETINGS', state)
            return {...state, ...state.meetings}
        case SHOW_MEETING:
            console.log('state in SHOW_MEETING', state)
            return {
                ...state,
                    ...state.meetings.filter(m => m.id === action.payload)[0]
            }
        case CREATE_MEETING:
            console.log('state in CREATE_MEETING', state)
            // return [
            //     ...state,
            //         Object.assign({}, state.meetings, action.payload)
            // ];
        case EDIT_MEETING:
            console.log('state in EDIT_MEETING', state)
            // return {
            //     ...state,
            //         ...state.meetings.filter(m => m.id === action.payload)[0]
            // }
        case UPDATE_MEETING:
            console.log('state in UPDATE_MEETING', state)
            // return [
            //     ...state.meetings.filter(m => m.id !== action.payload.updatedMeeting.id),
            //         Object.assign(
            //                 {},
            //                 {...state.meetings.filter(m => m.id === action.payload.updatedMeeting.id)[0]},
            //                 action.payload.updatedMeeting
            //             )
            // ];
        case DELETE_MEETING:
            console.log('state in DELETE_MEETING', state)
            const mIndex = state.meetings.findIndex(m => m.id === action.payload)
            return update(state, {meetings: {$splice: [ [mIndex, 1] ]}})
        default:
            return state;
    }
}