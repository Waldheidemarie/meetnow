import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import MeetingsList from './components/MeetingsList';
import MeetingDetails from './components/MeetingDetails';
import MeetingActivity from './components/MeetingActivity';
import CreateMeetingForm from './components/CreateMeetingForm';
import EditMeetingForm from './components/EditMeetingForm';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  render() {
     return (
        <div className="App">
            <NavBar />
            <Switch>
              <Route  exact path='/' component={Home} />
              <Route  exact path='/meetings' component={MeetingsList} />
              <Route  exact path='/meetings/:id' component={MeetingDetails}/>
              <Route  exact path='/createMeeting' component={CreateMeetingForm} />
              <Route  exact path='/editMeeting' component={EditMeetingForm} />
            </Switch>
            <MeetingActivity />
            <Footer />
          </div>
    );
  }
}


export default App;
