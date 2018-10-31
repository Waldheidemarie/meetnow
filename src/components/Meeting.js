import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock,
        faMapMarkerAlt,
        faFolderOpen,
        faPencilAlt,
        faTrash
    } from '@fortawesome/free-solid-svg-icons';

class Meeting extends Component{

     render(){
        const { meeting } = this.props;
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
                <section className="m-text">
                    <Link to={`/meetings/${meeting.id}`}><FontAwesomeIcon icon={faFolderOpen} /></Link>
                    <Link to={{
                            pathname: '/editmeeting',
                            state: { id: meeting.id }
                        }}><FontAwesomeIcon icon={faPencilAlt} /></Link>
                    <span onClick={() => this.props.handleDelete(meeting.id)}><FontAwesomeIcon icon={faTrash} /></span>
                </section>
            </div>
        )
    }
}

export default Meeting;
