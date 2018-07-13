import React, { Component } from 'react';
import MeetingList from './components/MeetingList';
import MeetingActivity from './components/MeetingActivity';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Let's Meet Now!</h1>
        <div className="container">
          <div className="row">
            <div className="col s8">
              <MeetingList />
            </div>
            <div className="col s3">
              <MeetingActivity />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
