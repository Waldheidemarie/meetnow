import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createMeeting } from "../actions";


class CreateMeetingForm extends Component {

  onSubmit = async (values) => {
    console.log('values in onSubmit ', values)
    let id = await uuidv4();
    this.props.createMeeting({
      id: id,
      ...values,
      timestamp: Date.now()
    });

    this.props.reset();
    this.props.formOps.hide();
  }

  handleForm = () => {
    this.props.formOps.hide();
  }

  render () {
    const { handleSubmit, reset, pristine, submitting } = this.props;
    console.log('Props in CreateMeetingForm', this.props);

    return (
      <div className="m-form">
        <h4>+New Meeting</h4>
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
            <Field component="input" type="date" name="date" />
          </div><br />
          <div className="form-input">
            <label htmlFor="venue">Venue:</label><br />
            <Field component="input" type="text" name="venue" placeholder="Where is it taking place?" />
          </div><br />
          <div className="f-buttons">
            <button className="btn-submit" type="submit" disabled={pristine || submitting}>Create</button>
            <button className="btn-reset" type="reset" disabled={pristine || submitting} onClick={reset}>Reset</button>
            <button className="btn-cancel" onClick={this.handleForm}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}


CreateMeetingForm = connect(null, { createMeeting })(CreateMeetingForm);

export default reduxForm({
    form: "createMeetingForm"
})(CreateMeetingForm);