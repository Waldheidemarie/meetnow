import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
import { editMeeting, updateMeeting } from "../actions";


class EditMeetingForm extends Component {

  onSubmit = (values) => {
    console.log('values in EditForm onSubmit ', values)
    this.props.updateMeeting({
      ...values,
      timestamp: Date.now()
    });

    this.props.reset();
    this.props.formOps.hide();
  }

  handleForm = () => {
    this.props.formOps.hide();
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
     console.log('nextProps in EditForm ', nextProps.initialValues);
  }

  render() {
    const { handleSubmit, reset, pristine, submitting } = this.props;
    console.log('Props in EditMeetingForm', this.props.initialValues);

    return (
      <div className="m-form">
        <h4>Update Meeting</h4>
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
            <button className="btn-submit" type="submit" disabled={pristine || submitting}>Update</button>
            <button className="btn-reset" type="reset" disabled={pristine || submitting} onClick={reset}>Reset</button>
            <button className="btn-cancel" onClick={this.handleForm}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

EditMeetingForm = reduxForm({
  form: "editMeetingForm",
  fields: ['title', 'hostName', 'description', 'category', 'date', 'venue']
})(EditMeetingForm);

EditMeetingForm = connect(
  state => ({
    initialValues: state.meetings.currMeeting
  }),
  { editMeeting, updateMeeting }
)(EditMeetingForm);

export default EditMeetingForm;