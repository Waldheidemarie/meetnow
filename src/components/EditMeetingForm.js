import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMeeting } from "../actions";


class EditMeetingForm extends Component {

  state = {
    id: '',
    title: '',
    hostName: '',
    description: '',
    category: '',
    date: '',
    venue: ''
  }

  componentDidMount() {
    let { currMeetingId } = this.props;
    this.setState({ id: currMeetingId })
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    console.log('nextProps in EditForm', nextProps);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = Date.now();
    //const { id, title, hostName, description, category, date, venue } = this.state;
    const updatedMeeting = Object.assign({}, this.state, timestamp);
    // this.props.updateMeeting({
    //   id,
    //   title,
    //   hostName,
    //   description,
    //   category,
    //   date,
    //   venue,
    //   timestamp: Date.now()
    // });
    this.props.updateMeeting(updatedMeeting);

    //this.props.reset();
    this.props.formOps.hide();
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleForm = () => {
    this.props.formOps.hide();
  }

  render() {
    console.log('Props in EditMeetingForm', this.props);
    const currMeeting = this.props.meetings.filter(m => m.id === this.props.currMeetingId)[0];
    //const { title, hostName, description, category, date, venue } = this.props;
    const { title, hostName, description, category, date, venue } = currMeeting;

    return (
      <div className="m-form">
        <h4>+New Meeting</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="title">Title:</label><br />
            <input type="text" name="title" value={title} onChange={this.handleInput} placeholder="Enter title" />
          </div><br />
          <div className="form-input">
            <label htmlFor="hostName">Host:</label><br />
            <input type="text" name="hostName" value={hostName} onChange={this.handleInput} placeholder="Who is hosting?" />
          </div><br />
          <div className="form-input">
            <label htmlFor="description">Description:</label><br />
            <textarea type="text" name="description" rows="3" value={description} onChange={this.handleInput} placeholder="What is it about?" />
          </div><br />
          <div className="form-input">
            <label htmlFor="category">Category:</label><br />
            <select name="category" value={category} onChange={this.handleInput}>
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
      meetings: state.meetings
    }
}

export default connect(mapStateToProps, { updateMeeting })(EditMeetingForm);
