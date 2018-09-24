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

  state = {
      currMeetingId: '',
      isFormOpen: false
  }

  componentDidMount() {
     this.setState({
       isFormOpen: false
    })
  }

  toggleForm = () => {
    let { isFormOpen } = this.state;
    this.setState({ isFormOpen: isFormOpen === true ? false : true });
  }

  displayForm = () => {
    this.setState({ isFormOpen: true });
  }

  hideForm = () => {
    this.setState({ currMeetingId:'', isFormOpen: false });
  }

  formOps = {
      toggle: this.toggleForm,
      display: this.displayForm,
      hide: this.hideForm
  }

  saveCurrMeeting = (id) => {
    console.log('currMeeting id', id);
    this.setState({ currMeetingId: id });
  }


  render() {
    const { isFormOpen, currMeetingId } = this.state;

    return (
      <div>
        <Switch>
            <Route exact path='/' render={() => <Home />}/>
        </Switch>
        <Route path='/(.+)' render={() => (
          <div className="App">
            <NavBar isFormOpen={isFormOpen} formOps={this.formOps} saveCurrMeeting={this.saveCurrMeeting}/>
            <Switch>
              <Route exact path='/meetings' render={({ history }) =>
                          <MeetingsList
                                  history={history}
                                  currMeetingId={currMeetingId}
                                  isFormOpen={isFormOpen}
                                  formOps={this.formOps}
                                  saveCurrMeeting={this.saveCurrMeeting}/>}
                          />
              <Route exact path='/meetings/:id' render={({ history }) =>
                          <MeetingDetails
                                  history={history}
                                  currMeetingId={currMeetingId}
                                  isFormOpen={isFormOpen}
                                  formOps={this.formOps}/>}
                          />
            </Switch>
            {isFormOpen
              ? (currMeetingId
                    ? <EditMeetingForm isFormOpen={isFormOpen} formOps={this.formOps} currMeetingId={currMeetingId}/>
                    : <CreateMeetingForm isFormOpen={isFormOpen} formOps={this.formOps} />
                  )
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
