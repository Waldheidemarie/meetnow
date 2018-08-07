import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeetings, showMeeting } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
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
        if(this.props.meetings.length === 0){
            return <div className="no-meetings">
                        <FontAwesomeIcon icon={faFrown} style={{"font-size": "5rem", "color": "orange" }}/>
                        <h4>No Scheduled Meetings Found...</h4>
                        <hr />
                        <h5 style={{"color" : "green"}}>Hey, you can create one!</h5>
                    </div>
        }

        const { meetings, showMeeting } = this.props;
        console.log(this.props);

        return (
            <div className="meetings-list">
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
