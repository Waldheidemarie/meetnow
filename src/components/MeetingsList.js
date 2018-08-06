import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeetings, showMeeting } from '../actions';
import Meeting from './Meeting';

class MeetingsList extends Component {

    componentDidMount() {
        this.props.fetchMeetings();
    }

    renderMeetings = (meetings) => {
        return meetings.map(m => {
            return <Meeting key={m.id} meeting={m} />
        })
    }


    render () {
        if(!this.props){
            return <div><h1>Please wait. Loading...</h1></div>
        }

        const { meetings, showMeeting } = this.props;
        console.log(this.props);

        return (
            <div className="meeting-list">
                <h3>Scheduled Meetings</h3>
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
    { fetchMeetings, showMeeting }
)(MeetingsList);
