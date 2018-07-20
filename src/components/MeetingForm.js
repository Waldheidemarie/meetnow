import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


class MeetingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            date: '',
            venue: '',
            hostName: '',
            hostPhotoURL: <span><FontAwesomeIcon icon={faUser} /></span>
        } 
    }

    componentDidMount() {
        if(this.props.currMeeting !== null){
            const { title, date, venue, hostName } = this.props.currMeeting;
            this.setState({ title,date,venue,hostName });
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('next props', nextProps);
        if(nextProps.currMeeting === null){
            this.setState({ id: '',title: '',date: '',venue: '',hostName: ''})
        } else if(((this.props.currMeeting && nextProps.currMeeting) && (this.props.currMeeting.id !== nextProps.currMeeting.id)) || (!this.props.currMeeting && nextProps.currMeeting)){
            let { id, title, date, venue, hostName } = nextProps.currMeeting;
            this.setState({ id,title,date,venue,hostName });
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
            id: '',
            title: '',
            date: '',
            venue: '',
            hostName: ''
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
                            value={this.state.title} 
                            onChange={this.handleChange}
                            placeholder="Enter title"/>
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="date">Date:</label><br />
                        <input 
                            type="date" 
                            name="date"
                            value={this.state.date}  
                            onChange={this.handleChange}
                            placeholder="date of meeting" />
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="venue">Venue:</label><br />
                        <input 
                            type="text" 
                            name="venue"
                            value={this.state.venue}  
                            onChange={this.handleChange}
                            placeholder="venue of meeting" />
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="hostName">Host:</label><br />
                        <input 
                            type="text" 
                            name="hostName"
                            value={this.state.hostName} 
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