import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMeetings, editMeeting, deleteMeeting } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import CategoriesList from './CategoriesList';
import Meeting from './Meeting';

class MeetingsList extends Component {


    componentDidMount = () => {
        console.log('MeetingsList mounted');
        this.props.fetchMeetings();
    }

    handleDelete = (meetingId) => {
        console.log('id to delete in handleDelete', meetingId)
        this.props.deleteMeeting(meetingId);
    }

    handleEdit = async (meetingId) => {
        console.log('id to edit in handleEdit', meetingId)
        await this.props.editMeeting(meetingId);
        this.props.history.push(`/editMeeting/${meetingId}`);
    }


    render () {

        if(!this.props.meetings){
            return <div className="no-meetings">
                        <FontAwesomeIcon icon={faFrown} style={{"font-size": "5rem", "color": "orange" }}/>
                        <h4>No Scheduled Meetings Found...</h4>
                        <hr />
                        <h5 style={{"color" : "green"}}>Hey, you can create one!</h5>
                    </div>
        }

        console.log('Props in MeetingsList', this.props);

        return (
            <div className="meetings-list">
                <div className="m-list-categories">
                    <CategoriesList />
                </div>

                <div className="m-list-items">
                    <h4>Scheduled Meetings</h4>
                    {this.props.meetings && this.props.meetings.map(m => {
                        return <Meeting
                            key={m.id}
                            meeting={m}
                            history={this.props.history}
                            handleEdit={this.handleEdit}
                            handleDelete={this.handleDelete}
                        />
                    })}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log('state in meetingList mapStateToProps', state)
    return {
        meetings: state.meetings.meetings
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchMeetings: () => dispatch(fetchMeetings()),
//         deleteMeeting: (id) => dispatch(deleteMeeting(id))
//     }
// }

export default connect(mapStateToProps, { fetchMeetings, editMeeting, deleteMeeting })(MeetingsList);
