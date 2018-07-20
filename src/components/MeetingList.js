import React, { Component } from 'react';
import Meeting from './Meeting';

class MeetingList extends Component {

    submitCurrMeeting = (meetingId) => {
        this.props.saveCurrMeeting(meetingId);
    }

    render () {
        const { meetings } = this.props;
        return (
            <div className="meeting-list">
                <h3>List of Meetings</h3>
                { meetings.map(meeting => {
                    return <Meeting meeting={meeting} key={meeting.id} submitCurrMeeting={this.submitCurrMeeting} />
                  }) 
                }
            </div>
        )
    }
}

export default MeetingList;