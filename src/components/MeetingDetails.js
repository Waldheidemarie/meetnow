import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showMeeting } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClock,
    faMapMarkerAlt,
    faPencilAlt,
    faTrash,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
import LocationMap from './LocationMap';
import AttendeesList from './Attendees';
import CommentsList from './Comments';

class MeetingDetails extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.showMeeting(id);
    }

    render(){
        console.log('Props in MeetingDetails ', this.props.meeting);
        const { id, title, hostPhotoURL, hostName, description, category, date, venue, venueLatLng, attendees, comments } = this.props.meeting;
        return (
            <div className="m-details">
                <div className="m-details-banner">
                    <div className="details-cal-day">
                        <h4>25</h4>
                        <h4>AUG</h4>
                    </div>
                    <div className="details-title">
                        <h5>Tuesday, 25th August, 2018</h5>
                        <h2>{title || ""}</h2>
                    </div>
                    <div className="details-host">
                        <img src={hostPhotoURL} alt="host" />
                        <p>Hosted by: <strong>{hostName}</strong></p>
                    </div>
                    <section className="m-text">
                        <span className="b-edit"><FontAwesomeIcon icon={faPencilAlt} /></span>
                        <span className="b-delete"><FontAwesomeIcon icon={faTrash} /></span>
                    </section>
                </div>
                <div className="m-details-description">
                    <h4>What is it about?</h4>
                    <p>{description}</p>
                </div>
                <div className="m-details-venue">
                    <div className="m-details-location"></div>
                    <div className="m-details-map">
                        <LocationMap venue={venue} venueLatLng={venueLatLng} />
                    </div>
                </div>
                {attendees &&
                    <div className="m-details-attendees">
                    <AttendeesList attendees={attendees}/>
                    </div>
                }
                {comments &&
                    <div className="m-details-comments">
                    <CommentsList comments={comments} />
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        meeting: state.meetings
    };
}

export default connect(mapStateToProps, { showMeeting })(MeetingDetails);
