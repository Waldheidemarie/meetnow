import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {

    render(){
        const { isFormOpen } = this.props;
        console.log('Props in Navbar ', this.props);
        return (
            <nav className="navbar">
                <div className="navbar-brand"><Link to="/"><FontAwesomeIcon icon={faUserTie} /> | MeetNOW!</Link></div>
                <Link to='/createMeeting' className='btn'>Create Meeting</Link>
                <ul className="navbar-ul">
                    <li><a href="#">Register</a></li>
                    <li><a href="#">LogIn</a></li>
                    <li><a href="#">LogOut</a></li>
                </ul>
                <div className="nav-2">
                    <ul>
                        <li>Science & Tech</li>
                        <li>Business</li>
                        <li>Entertainment</li>
                        <li>Sports</li>
                        <li>Fashion</li>
                        <li>Lifestyle</li>
                        <li>Volunteering</li>
                        <li>Age Groups</li>
                        <li>Health</li>
                        <li>Career Fairs</li>
                        <li>Research Groups</li>
                        <li>Conferences</li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default NavBar;