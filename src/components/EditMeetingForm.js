import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMeeting } from "../actions";
import LocationSearchInput from './LocationSearchInput';


class EditMeetingForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
        id: '',
        title: '',
        hostName: '',
        hostPhotoURL: '',
        description: '',
        category: '',
        date: '',
        venue: '',
        error: null
    }
  }

  componentDidMount() {
    const { id } = this.props.location.state;
    const meeting = this.props.meeting.meetings.filter(m => m.id === id)[0];
    let { title, hostName, hostPhotoURL, description, category, date, venue } = meeting;
    this.setState({
        id,
        title,
        hostName,
        hostPhotoURL,
        description,
        category,
        date,
        venue
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, title, hostName, hostPhotoURL, description, category, date, venue } = this.state;
    this.props.updateMeeting({
      id,
      title,
      hostName,
      hostPhotoURL,
      description,
      category,
      date,
      venue,
      timestamp: Date.now()
    });


    //this.props.reset();
    this.props.history.push('/meetings');
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log('Props in EditMeetingForm', this.props);
    const { title, hostName, description, category, date, venue } = this.state;

    return (
      <div className="m-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="title">Title:</label><br />
            <input type="text" name="title" value={title} onChange={this.handleInput} placeholder="Enter title" required/>
            { }
          </div><br />
          <div className="form-input">
            <label htmlFor="hostName">Host:</label><br />
            <input type="text" name="hostName" value={hostName} onChange={this.handleInput} placeholder="Who is hosting?" required/>
          </div><br />
          <div className="form-input">
            <label htmlFor="description">Description:</label><br />
            <textarea type="text" name="description" rows="3" value={description} onChange={this.handleInput} placeholder="What is it about?" />
          </div><br />
          <div className="form-input">
            <label htmlFor="category">Category:</label><br />
            <select name="category" value={category} onChange={this.handleInput} required>
                  <option />
                  <option >Science & Tech</option>
                  <option >Business</option>
                  <option >Entertainment</option>
                  <option >Sports</option>
                  <option >Fashion</option>
                  <option >Lifestyle</option>
                  <option >Volunteering</option>
                  <option >Age Groups</option>
                  <option >Health</option>
                  <option >Career Fairs</option>
                  <option >Research Groups</option>
                  <option >Conferences</option>
            </select>
          </div><br />
          <div className="form-input">
            <label htmlFor="date">Date:</label><br />
            <input type="date" name="date" value={date} onChange={this.handleInput} />
          </div><br />
          <div className="form-input">
            <label htmlFor="venue">Venue:</label><br />
            <input type="text" name="venue" value={venue} onChange={this.handleInput} placeholder="Where is it taking place?" />
          </div><br />
            <div className="form-input">
              <label htmlFor="places">Places:</label><br />
              <LocationSearchInput />
          </div><br />
          <div className="f-buttons">
            <button className="btn-submit" type="submit">Update</button>
            <button className="btn-reset" type="reset">Reset</button>
            <button className="btn-cancel" onClick={this.handleForm}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
      meeting: state.meetings
    }
}

export default connect(mapStateToProps, { updateMeeting })(EditMeetingForm);
