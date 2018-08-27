import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class LocationSearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = {address: ''};
  }

  handleChange = (address) => {
    this.setState({ address });
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then((latLng) => {
          console.log('Success', latLng);
          console.log('address selected: ', this.state.address);
          this.props.handleVenue(this.state.address, latLng);
        })
      .catch(error => console.error('Error', error));
  }

  render () {
    console.log('Props in LocationSearchInput: ', this.props);
    const renderLocation = ({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
      <div>
        <input {...getInputProps({
                    type:"text",
                    name:"venue",
                    placeholder: "search places ..."
                })}
        />

        <div className="autocomplete-dropdown-container">

          {loading && <div>Loading...</div>}

          {suggestions.map(suggestion => (
                <div {...getSuggestionItemProps(suggestion)}>
                  <span>{suggestion.description}</span>
                </div>
              ))
          }
        </div>
      </div>
    );

    return (
        <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
              >
          {renderLocation}
        </PlacesAutocomplete>
    )
  }
}

export default LocationSearchInput;