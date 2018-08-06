import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createMeeting, hideForm } from "../actions";


class CreateMeetingForm extends Component {

  onSubmit = async (values) => {
    console.log('values in onSubmit ', values)
    let id = await uuidv4();
    this.props.createMeeting({
      ...values,
      id: id,
      timestamp: Date.now()
    });

    this.props.reset();
    this.props.destroy();
  }

  render () {
    const { handleSubmit, reset, pristine, submitting } = this.props;
    console.log('Props in CreateMeetingForm', this.props);

    return (
      <div className="m-form">
        <h3>+New Meeting</h3>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form-input">
            <label htmlFor="title">Title:</label><br />
            <Field component="input" type="text" name="title" placeholder="Enter title" />
          </div><br />
          <div className="form-input">
            <label htmlFor="hostName">Host:</label><br />
            <Field component="input" type="text" name="hostName" placeholder="Who is hosting?" />
          </div><br />
          <div className="form-input">
            <label htmlFor="description">Description:</label><br />
            <Field component="textarea" type="text" name="description" rows="3" placeholder="What is it about?" />
          </div><br />
          <div className="form-input">
            <label htmlFor="category">Category:</label><br />
            <Field component="select" name="category">
                  <option />
                  <option value="science">Science & Tech</option>
                  <option value="business">Business</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="sports">Sports</option>
                  <option value="fashion">Fashion</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="agegroups">Age Groups</option>
                  <option value="health">Health</option>
                  <option value="career">Career Fairs</option>
                  <option value="research">Research Groups</option>
                  <option value="conferences">Conferences</option>
            </Field>
          </div><br />
          <div className="form-input">
            <label htmlFor="date">Date:</label><br />
            <Field component="input" type="date" name="date" placeholder="date of meeting" />
          </div><br />
          <div className="form-input">
            <label htmlFor="venue">Venue:</label><br />
            <Field component="input" type="text" name="venue" placeholder="venue of meeting" />
          </div><br />
          <div className="f-buttons">
            <button className="btn-submit" type="submit" disabled={pristine || submitting}>Save</button>
            <button className="btn-cancel" type="reset" disabled={pristine || submitting} onClick={reset}>Reset</button>
          </div>
        </form>
      </div>
    )
  }
}


CreateMeetingForm = connect(null, { createMeeting, hideForm })(CreateMeetingForm);

export default reduxForm({
    form: "createMeetingForm"
})(CreateMeetingForm);