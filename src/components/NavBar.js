import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

class NavBar extends Component {    

    handleOpenForm = (e) => {
        console.log('e in Navbar.js ', e.target);
        this.props.displayForm(e);
    }

    render(){
        return (
            <nav className="navbar">
                <div className="navbar-brand"><a href="#"><FontAwesomeIcon icon={faUserTie} /> | MeetNOW!</a></div>
                <button onClick={this.handleOpenForm}>Create Meeting</button>
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