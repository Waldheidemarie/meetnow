import React, { Component } from 'react';
import Meeting from './Meeting';

class MeetingList extends Component {

    render () {
        const { meetings, showMeetingDetails, saveCurrMeeting, deleteMeeting } = this.props;
        return (
            <div className="meeting-list">
                <h3>Scheduled Meetings</h3>
                { meetings.map(meeting => {
                    return <Meeting 
                                key={meeting.id}
                                meeting={meeting}
                                showMeetingDetails={showMeetingDetails}   
                                saveCurrMeeting={saveCurrMeeting} 
                                deleteMeeting={deleteMeeting} 
                                />
                  }) 
                }
            </div>
        )
    }
}

export default MeetingList;