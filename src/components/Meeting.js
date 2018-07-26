import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock,
        faMapMarkerAlt,
        faBookOpen,
        faEdit,
        faTrash
    } from '@fortawesome/free-solid-svg-icons';

class Meeting extends Component{

    render(){
        const { meeting, showMeetingDetails, saveCurrMeeting, deleteMeeting } = this.props;
        console.log('meeting: ', meeting);
        return (
            <div className="meeting">

                <section className="m-title">
                    <img className="m-host" src={meeting.hostPhotoURL} alt="host" />
                    <div className="m-header">
                        <h4>{meeting.title}</h4>
                        <p>Host: <strong>{meeting.hostName}</strong></p>
                    </div>
                </section>
                <section className="m-time">
                    <span><FontAwesomeIcon icon={faClock} />  {meeting.date}</span>
                    <span><FontAwesomeIcon icon={faMapMarkerAlt} />  {meeting.venue}</span>
                </section>
                <ul className="m-attendee">
                    {meeting.attendees && meeting.attendees.map(attendee => {
                        return <li key={attendee.id}><img src={attendee.photoURL} alt={attendee.name} /></li>
                    })}
                </ul>

                <section className="m-text">
                    <p>{meeting.description}</p>
                    <span className="b-view" onClick={() => showMeetingDetails(meeting.id)}><FontAwesomeIcon icon={faBookOpen} /></span>
                    <span className="b-edit" onClick={() => saveCurrMeeting(meeting.id)}><FontAwesomeIcon icon={faEdit} /></span>
                    <span className="b-delete" onClick={() => deleteMeeting(meeting.id)}><FontAwesomeIcon icon={faTrash} /></span>
                </section>
            </div>
        )
    }
}

export default Meeting;
