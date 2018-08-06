export const getDefaultMeetings = () => {
    const meetings = [
        {
            id: "1",
            title: "New Business Workshop",
            category: "Business",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            hostName: "John Doe",
            hostPhotoURL: "https://randomuser.me/api/portraits/med/men/43.jpg",
            date: "2018-10-03",
            venue: "123 Main St, Brampton, ON",
            attendees: [
                { 
                    id: 'a1',
                    name: "John Doe",
                    photoURL: "https://randomuser.me/api/portraits/thumb/men/43.jpg"
                },
                {
                    id: 'a2',
                    name: "Tanko Sani",
                    photoURL: "https://randomuser.me/api/portraits/thumb/men/44.jpg"
                },
                {
                    id: 'a3',
                    name: "Abu Jega",
                    photoURL: "https://randomuser.me/api/portraits/thumb/men/45.jpg"
                },

            ]

        },
        {
            id: "2",
            title: "Hackathon Primer",
            category: "Career Fairs",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            hostName: "Thani Kaltungo",
            hostPhotoURL: "https://randomuser.me/api/portraits/med/men/46.jpg",
            date: "2018-11-11",
            venue: "Hall 67, The Quadrangle, London, ON",
            attendees: [
                {
                    id: 'a4',
                    name: "Thani Kaltungo",
                    photoURL: "https://randomuser.me/api/portraits/thumb/men/46.jpg"
                },
                {
                    id: 'a5',
                    name: "Maimuna Isyasu",
                    photoURL: "https://randomuser.me/api/portraits/thumb/women/43.jpg"
                }

            ]

        },
        {
            id: "3",
            title: "ReactTO Annual General Meeting",
            category: "Business",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            hostName: "Chang Zen Li",
            hostPhotoURL: "https://randomuser.me/api/portraits/med/men/47.jpg",
            date: "2018-10-25",
            venue: "34, Finch St, Downtown Toronto, ON",
            attendees: [
                {
                    id: 'a6',
                    name: "Chang Zen Li",
                    photoURL: "https://randomuser.me/api/portraits/thumb/men/47.jpg"
                },

                {
                    id: 'a7',
                    name: "Labaran Maishago",
                    photoURL: "https://randomuser.me/api/portraits/thumb/men/26.jpg"
                },
                {
                    id: 'a8',
                    name: "Kande Maituwo",
                    photoURL: "https://randomuser.me/api/portraits/thumb/women/18.jpg"
                },
                {
                    id: 'a9',
                    name: "Mei Smith",
                    photoURL: "https://randomuser.me/api/portraits/thumb/women/13.jpg"
                },
                {
                    id: 'a10',
                    name: "Amit Singh",
                    photoURL: "https://randomuser.me/api/portraits/thumb/men/34.jpg"
                },
            ]

        },
        {
            id: "4",
            title: "Python Conference",
            category: "Conferences",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            hostName: "Guam Dialo",
            hostPhotoURL: "https://randomuser.me/api/portraits/med/women/22.jpg",
            date: "2019-03-15",
            venue: "Hall 13, Multinational Conference Center, Boston, MA",
            attendees: [
                {
                    id: 'a11',
                    name: "Guam Dialo",
                    photoURL: "https://randomuser.me/api/portraits/thumb/women/22.jpg"
                },
                {
                    id: 'a12',
                    name: "Labaran Maishago",
                    photoURL: "https://randomuser.me/api/portraits/thumb/men/22.jpg"
                },
                {
                    id: 'a13',
                    name: "Talle Maikosai",
                    photoURL: "https://randomuser.me/api/portraits/thumb/women/48.jpg"
                },
                {
                    id: 'a14',
                    name: "Maryama Sanda",
                    photoURL: "https://randomuser.me/api/portraits/thumb/women/13.jpg"
                }
            ]

        }
    ]

    return meetings;
}

export const getDefaultCategories = () => {
    return [
        {id: "c1", category: "Science & Tech"},
        { id: "c2", category: "Business" },
        { id: "c3", category: "Entertainment" },
        { id: "c4", category: "Sports" },
        { id: "c5", category: "Fashion" },
        { id: "c6", category: "Lifestyle" },
        { id: "c7", category: "Volunteering" },
        { id: "c8", category: "Age Groups" },
        { id: "c9", category: "Health" },
        { id: "c10", category: "Career Fairs" },
        { id: "c11", category: "Research Groups" },
        { id: "c12", category: "Conferences" }
    ]
}