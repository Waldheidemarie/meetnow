import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getData } from './data';
import Home from './components/Home';
import NavBar from './components/NavBar';
import MeetingList from './components/MeetingList';
import MeetingDetails from './components/MeetingDetails';
import MeetingActivity from './components/MeetingActivity';
import MeetingForm from './components/MeetingForm';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  state = {
      meetings: [],
      currMeeting: {},
      isFormOpen: false
  }

  componentDidMount() {
    let defaultData = getData();
     this.setState({ 
       meetings: defaultData,
       isFormOpen: false
    })
  }

  displayForm = (e) => {
    e.preventDefault();
    this.setState({ 
        currMeeting: {},
        isFormOpen: true 
    });
  }

  saveCurrMeeting = (meetingId) => {
      console.log('currMeeting id', meetingId);
      const { meetings } = this.state;
      let currMeeting = meetings.filter(meeting => meeting.id === meetingId)[0];
      this.setState({ currMeeting, isFormOpen: true });
  }

  updateMeetings = (newMeeting) => {
    console.log('updating meeting .... ');
    const { meetings } = this.state;
      let updatedMeetings = [...meetings, newMeeting];
      this.setState({ 
        meetings: updatedMeetings,
        isFormOpen: false
       });
    }

  render() {
    const { meetings, currMeeting, isFormOpen } = this.state;
    console.log('meetings in state: ', meetings);

    return (
      <div className="App">
        <NavBar displayForm={this.displayForm}/>
          <Route exact path='/' render={() => <Home />}/>
        <Route path='/meetings' render={() => <MeetingList meetings={meetings} saveCurrMeeting={this.saveCurrMeeting} />} />
          <Route path='/meetings/:id' render={() => <MeetingDetails />} />
          {isFormOpen
            ? <MeetingForm updateMeetings={this.updateMeetings} currMeeting={currMeeting.id ? currMeeting : null }/>
            : <MeetingActivity />
          }
          <Footer />
      </div>
    );
  }
}

export default App;
