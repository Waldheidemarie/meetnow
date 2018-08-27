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

class MeetingDetails extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.showMeeting(id);
    }

    render(){
        if(!this.props){
            <div><FontAwesomeIcon className={faSpinner} /></div>
        }

        console.log('Props in MeetingDetails ', this.props);
        const { id, title, hostName, description, category, date, venue, venueLatLng, attendees } = this.props.meetings;
        const hostPhotoURL = "https://randomuser.me/api/portraits/thumb/men/43.jpg";
        return (
            <div className="m-details">
                <div className="m-details-banner">
                    <div className="details-cal-day">
                        <h4>25</h4>
                        <h4>AUG</h4>
                    </div>
                    <div className="details-title">
                        <h5>Tuesday, 25th August, 2018</h5>
                        <h2>2019 Symposium on Girl Child Education</h2>
                    </div>
                    <div className="details-host">
                        <img src={hostPhotoURL} alt="host" />
                        <p>Hosted by: <strong>John Doe</strong></p>
                    </div>
                    <section className="m-text">
                        <span className="b-edit"><FontAwesomeIcon icon={faPencilAlt} /></span>
                        <span className="b-delete"><FontAwesomeIcon icon={faTrash} /></span>
                    </section>
                </div>
                <div className="m-details-description">
                    <h4>What is it about?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo atque repellat eos aut maxime, incidunt voluptatem, animi impedit, exercitationem nihil neque! Facere sint vel, ratione deleniti id est rem!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, hic ducimus praesentium repellendus ipsum aspernatur architecto ut consequatur, velit dolorem cum placeat ab in maiores sint fugiat? Soluta, quos dolorem?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam quo atque. Saepe et neque ducimus laborum ea repellendus nisi, animi, cum optio, nesciunt velit! Obcaecati distinctio corrupti quod praesentium?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo atque repellat eos aut maxime, incidunt voluptatem, animi impedit, exercitationem nihil neque! Facere sint vel, ratione deleniti id est rem!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, hic ducimus praesentium repellendus ipsum aspernatur architecto ut consequatur, velit dolorem cum placeat ab in maiores sint fugiat? Soluta, quos dolorem?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam quo atque. Saepe et neque ducimus laborum ea repellendus nisi, animi, cum optio, nesciunt velit! Obcaecati distinctio corrupti quod praesentium?
                    </p>
                </div>
                <div className="m-details-venue">
                    <div className="m-details-location"></div>
                    <div className="m-details-map">
                        <LocationMap venue={venue} venueLatLng={venueLatLng} />
                    </div>
                </div>
                <div className="m-details-attendees">attendees</div>
                <div className="m-details-comments">comments</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { showMeeting })(MeetingDetails);
