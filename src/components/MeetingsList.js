import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeetings, deleteMeeting } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import CategoriesList from './CategoriesList';
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

    showMeeting = async (meetingId) => {
        console.log('current meeting id in MeetingList', meetingId);
        await this.props.saveCurrMeeting(meetingId);
        this.props.history.push(`/meetings/${meetingId}`);
        this.props.formOps.hide();
    }

    handleDelete = (meetingToDeleteId) => {
        if (this.props.currMeetingId === meetingToDeleteId){
            this.props.saveCurrMeeting('');
        }
        this.props.deleteMeeting(meetingToDeleteId);
    }

    renderMeetings = (meetings) => {
        return Object.values(meetings).map(m => {
            return <Meeting
                        key={m.id}
                        meeting={m}
                        currMeeting={this.currMeeting}
                        showMeeting={this.showMeeting}
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

        const { meetings } = this.props;
        console.log('Props in MeetingsList',this.props);

        return (
            <div className="meetings-list">
                <div className="m-list-categories">
                    <CategoriesList />
                </div>
                <div className="m-list-items">
                    <h4>Scheduled Meetings</h4>
                    { this.renderMeetings(meetings) }
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return state;
}

export default connect(
    mapStateToProps,
    { fetchMeetings, deleteMeeting }
)(MeetingsList);
