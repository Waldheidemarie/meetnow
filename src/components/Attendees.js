import React, { Component } from 'react';


const Attendee = ({ name, photoURL }) => {
  return (
    <div className="attendee-item">
        <img src={photoURL} alt="attendee"/>
        <h5>{name}</h5>
    </div>
  );
};


class AttendeesList extends Component {

  render () {
    console.log('Props in Attendees ', this.props);

    const renderAttendees = () => {
        return this.props.attendees.map(a => {
            return <li key={a.id}>
                      <Attendee name={a.name} photoURL={a.photoURL} />
                    </li>
        })
    }

    return (
      <div className="attendees-list">
        <h4>{`Attendees (${this.props.attendees && this.props.attendees.length})`}</h4>
        <ul>
          {renderAttendees()}
        </ul>
      </div>
    )
  }
}

export default AttendeesList;