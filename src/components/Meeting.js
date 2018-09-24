import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock,
        faMapMarkerAlt,
        faFolderOpen,
        faPencilAlt,
        faTrash
    } from '@fortawesome/free-solid-svg-icons';

class Meeting extends Component{

    submitDelete = (meetingToDeleteId) => {
        this.props.handleDelete(meetingToDeleteId);
    }

    render(){
        const { meeting, showMeeting, currMeeting } = this.props;
        const hostPhotoURL = require('../utils/images/default-user.png');
        console.log('meeting: ', meeting);

        return (
            <div className="meeting">

                <section className="m-title">
                    <img className="m-host" src={hostPhotoURL} alt="host" />
                    <div className="m-header">
                        <h4>{meeting.title}</h4>
                        <p>Category: <strong>{meeting.category}</strong></p>
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
                    <span className="b-view" onClick={() => showMeeting(meeting.id)}><FontAwesomeIcon icon={faFolderOpen} /></span>
                    <span className="b-edit" onClick={() => currMeeting(meeting.id)}><FontAwesomeIcon icon={faPencilAlt} /></span>
                    <span className="b-delete" onClick={() => this.submitDelete(meeting.id)}><FontAwesomeIcon icon={faTrash} /></span>
                </section>
            </div>
        )
    }
}

export default Meeting;
