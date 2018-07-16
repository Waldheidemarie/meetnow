import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div><a href="#"><FontAwesomeIcon icon={faUserTie} /> | MeetNOW!</a></div>
            <button>Create Meeting</button>
            <ul>
                <li><a href="#">Register</a></li>
                <li><a href="#">Log In</a></li>
                <li><a href="#">Log Out</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;