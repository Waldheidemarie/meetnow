import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MeetingList from './components/MeetingList';
import MeetingActivity from './components/MeetingActivity';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MeetingList />
        <MeetingActivity />
        <Footer />
      </div>
    );
  }
}

export default App;
