import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Meeting = (props) => {
    return (
        <div className="meeting">

            <section className="m-title">
                <img className="m-host" src="https://randomuser.me/api/portraits/med/men/43.jpg" alt="host" />
                <div className="m-header">
                    <h3>New Business Workshop</h3>
                    <p>Hosted by <strong>John Doe</strong></p>
                </div>
            </section>
            <section className="m-time">
                <span><FontAwesomeIcon icon={faClock} />  2018-08-23</span>
                <span><FontAwesomeIcon icon={faMapMarkerAlt} />  123 Main St, Brampton, ON</span>
            </section>
            <ul className="m-attendee">
                    <li><img src="https://randomuser.me/api/portraits/thumb/men/43.jpg" alt="host"/></li>
                    <li><img src="https://randomuser.me/api/portraits/thumb/men/44.jpg" alt="attendee"/></li>
                    <li><img src="https://randomuser.me/api/portraits/thumb/men/45.jpg" alt="attendee"/></li>
            </ul>

            <section className="m-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <button>View Details</button>
            </section>
        </div>
    )
}

export default Meeting;