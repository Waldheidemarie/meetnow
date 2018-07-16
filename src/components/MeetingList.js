import React, { Component } from 'react';
import Meeting from './Meeting';

class MeetingList extends Component {
    render () {
        return (
            <div className="meeting-list">
                <h3>List of Meetings</h3>
                <Meeting />
                <Meeting />
                <Meeting />
            </div>
        )
    }
}

export default MeetingList;