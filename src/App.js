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
      isFormOpen: false
  }

  componentDidMount() {
    let defaultData = getData();
     this.setState({ 
       meetings: defaultData,
       isFormOpen: false
    })
  }

  addMeeting = (e) => {
    console.log('e addMeeting in App.js', e.target);
    const { isFormOpen } = this.state;
    e.preventDefault();
    this.setState({ isFormOpen: true });
  }

  updateMeeting = () => {
    console.log('meeting id to update ' );
  }

  render() {
    const { meetings, isFormOpen } = this.state;
    console.log('meetings in state: ', meetings);

    return (
      <div className="App">
          <NavBar isFormOpen={isFormOpen} addMeeting={this.addMeeting}/>
          <Route exact path='/' render={() => <Home />}/>
          <Route path='/meetings' render={() => <MeetingList meetings={meetings} />} />
          <Route path='/meetings/:id' render={() => <MeetingDetails />} />
          {isFormOpen
            ? <MeetingForm />
            : <MeetingActivity />
          }
          <Footer />
      </div>
    );
  }
}

export default App;
