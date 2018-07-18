import React, { Component } from 'react';

class MeetingForm extends Component {
    render () {
        return (
            <div className="m-form">
                <h4>Add/Edit Meeting</h4>
                <form>
                    <div className="form-input">
                        <label htmlFor="title">Title:</label><br />
                        <input type="text" name="title" placeholder="Enter title"/>
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="date">Date:</label><br />
                        <input type="date" name="date" placeholder="date of meeting" />
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="venue">Venue:</label><br />
                        <input type="text" name="venue" placeholder="venue of meeting" />
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="host">Host:</label><br />
                        <input type="text" name="host" placeholder="Who is hosting?" />
                    </div><br />
                    <div className="f-buttons">
                        <button className="btn-submit" type="submit">Submit</button>
                        <button className="btn-cancel">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default MeetingForm;