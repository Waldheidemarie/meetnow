import React, { Component } from 'react';

class MeetingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            date: '',
            venue: '',
            host: ''
        }
        
    }

    handleChange = (e) => {
        console.log('onchange', e.target.value);
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        console.log('new meeting', this.state);
        e.preventDefault();
        let id = Date.now();
        this.props.updateMeetings({id, ...this.state});
        this.setState({
            title: '',
            date: '',
            venue: '',
            host: ''
        })
    }

    render () {
        return (
            <div className="m-form">
                <h4>Add/Edit Meeting</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-input">
                        <label htmlFor="title">Title:</label><br />
                        <input 
                            type="text" 
                            name="title" 
                            onChange={this.handleChange}
                            placeholder="Enter title"/>
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="date">Date:</label><br />
                        <input 
                            type="date" 
                            name="date" 
                            onChange={this.handleChange}
                            placeholder="date of meeting" />
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="venue">Venue:</label><br />
                        <input 
                            type="text" 
                            name="venue" 
                            onChange={this.handleChange}
                            placeholder="venue of meeting" />
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="host">Host:</label><br />
                        <input 
                            type="text" 
                            name="host"
                            onChange={this.handleChange} 
                            placeholder="Who is hosting?" />
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