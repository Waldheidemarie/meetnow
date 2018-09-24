import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import { createMeeting, editMeeting, updateMeeting } from "../actions";
import LocationSearchInput from './LocationSearchInput';


class MeetingForm extends Component {

    state = {
        id: '',
        title: '',
        hostName: '',
        description: '',
        category: '',
        date: '',
        venue: '',
        venueLatLng: { lat: '', lng: '' },
        attendees: [],
        timestamp: ''
    }

    componentDidMount() {
        if(this.props.currMeetingId !== null){
            this.props.editMeeting(this.props.currMeetingId);
            const { id, title, hostName, description, category, date, venue, venueLatLng, attendees, timestamp } = this.props.meetings;
            this.setState({
                id,
                title,
                hostName,
                description,
                category,
                date,
                venue,
                venueLatLng,
                attendees,
                timestamp
            });
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.currMeetingId !== null){
            const { id, title, hostName, description, category, date, venue, venueLatLng, attendees, timestamp } = this.state;
            this.props.updateMeeting({
                id,
                title,
                hostName,
                description,
                category,
                date,
                venue,
                venueLatLng,
                attendees,
                timestamp
            });
        }else if(this.props.currMeetingId === null){
            const { title, hostName, description, category, date, venue, venueLatLng } = this.state;
            this.props.createMeeting({
                id: uuidv4(),
                title,
                hostName,
                description,
                category,
                date,
                venue,
                venueLatLng,
                timestamp: Date.now()
            });
        }


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

    handleVenue = (address, latLng) => {
        this.setState({
            venue: address,
            venueLatLng: latLng
        })
    }

    render() {
        console.log('Props in MeetingForm', this.props);
        console.log('State in MeetingForm', this.state);
        let { title, hostName, description, category, date, venue } = this.state;

        return (
            <div className="m-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-input">
                        <label htmlFor="title">Title:</label><br />
                        <input type="text" name="title" value={title} onChange={this.handleInput} placeholder="Enter title" required />
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="hostName">Host:</label><br />
                        <input type="text" name="hostName" value={hostName} onChange={this.handleInput} placeholder="Who is hosting?" required />
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="description">Description:</label><br />
                        <textarea type="text" name="description" rows="3" value={description} onChange={this.handleInput} placeholder="What is it about?" />
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="category">Category:</label><br />
                        <select name="category" value={category} onChange={this.handleInput} required>
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
                        </select>
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="date">Date:</label><br />
                        <input type="date" name="date" value={date} onChange={this.handleInput} />
                    </div><br />
                    <div className="form-input">
                        <label htmlFor="venue">Venue:</label><br />
                        <LocationSearchInput value={venue} handleVenue={this.handleVenue} />
                    </div><br />
                    <div className="f-buttons">
                        <button className="btn-submit" type="submit">Create</button>
                        <button className="btn-reset" type="reset">Reset</button>
                        <button className="btn-cancel" onClick={this.handleForm}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { createMeeting, editMeeting, updateMeeting })(MeetingForm);
