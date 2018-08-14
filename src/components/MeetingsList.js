import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeetings, showMeeting, editMeeting, deleteMeeting } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import Meeting from './Meeting';

class MeetingsList extends Component {

    componentDidMount() {
        this.props.fetchMeetings();
    }


  currMeeting = async (meetingId) => {
        console.log('currMeeting id', meetingId);
        await this.props.saveCurrMeeting(meetingId);
        this.props.formOps.display();
  }

  handleDelete = (id) => {
      this.props.deleteMeeting(id);
  }

    renderMeetings = (meetings) => {
        return Object.values(meetings).map(m => {
            return <Meeting
                        key={m.id}
                        meeting={m}
                        currMeeting={this.currMeeting}
                        handleDelete={this.handleDelete}
                        />
        })
    }

    render () {
        if(this.props.meetings.length === 0){
            return <div className="no-meetings">
                        <FontAwesomeIcon icon={faFrown} style={{"font-size": "5rem", "color": "orange" }}/>
                        <h4>No Scheduled Meetings Found...</h4>
                        <hr />
                        <h5 style={{"color" : "green"}}>Hey, you can create one!</h5>
                    </div>
        }

        const { meetings, showMeeting, deleteMeeting } = this.props;
        console.log('Props in MeetingsList',this.props);

        return (
            <div className="meetings-list">
                <h4>Scheduled Meetings</h4>
                { this.renderMeetings(meetings) }
            </div>
        )
    }
}


const mapStateToProps = state => {
    return state;
}

export default connect(
    mapStateToProps,
    { fetchMeetings, showMeeting, deleteMeeting }
)(MeetingsList);
