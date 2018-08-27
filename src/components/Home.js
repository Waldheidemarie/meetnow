import React from 'react';
import { withRouter } from 'react-router-dom';

const Home = ({ history }) => {
        return (
            <div className="home">
                <div className="home-content">
                    <h1>Welcome to MeetNow!</h1>
                    <p className="home-info">Schedule your meetings with ease...</p>
                    <br />
                    <button className="btn-start" onClick={() => history.push("/meetings")}>Let's go!</button>
                </div>
            </div>
        )
    }

export default withRouter(Home);