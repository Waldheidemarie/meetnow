import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import CategoriesList from './components/CategoriesList';
import MeetingsList from './components/MeetingsList';
import MeetingDetails from './components/MeetingDetails';
import MeetingActivity from './components/MeetingActivity';
import CreateMeetingForm from './components/CreateMeetingForm';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  state = {
      currMeeting: {},
      isFormOpen: false
  }

  componentDidMount() {
     this.setState({
       isFormOpen: false
    })
  }

  toggleForm = () => {
    let { isFormOpen } = this.state;
    this.setState({
        currMeeting: {},
        isFormOpen: isFormOpen === true ? false : true
    });
  }


  // saveCurrMeeting = (meetingId) => {
  //     console.log('currMeeting id', meetingId);
  //     const { meetings } = this.state;
  //     let currMeeting = meetings.filter(meeting => meeting.id === meetingId)[0];
  //     this.setState({ currMeeting, isFormOpen: true });
  // }


  render() {
    const { currMeeting, isFormOpen } = this.state;

    return (
      <div>
        <Switch>
            <Route exact path='/' render={() => <Home />}/>
        </Switch>
        <Route path='/(.+)' render={() => (
          <div className="App">
            <NavBar isFormOpen={isFormOpen} toggleForm={this.toggleForm}/>
            <CategoriesList />
            <Switch>
                <Route exact path='/meetings' component={MeetingsList} />
                <Route path='/meetings/:id' component={MeetingDetails} />
            </Switch>
            {isFormOpen
              ? <CreateMeetingForm
                    isFormOpen={isFormOpen}
                    toggleForm={this.toggleForm}
                    currMeeting={currMeeting.id ? currMeeting : null }/>
              : <MeetingActivity />
            }
            <Footer />
          </div>
        )}/>
      </div>
    );
  }
}


export default App;
