import React from 'react';
import Geocode from 'react-geocode';

class LocationMap extends React.Component {
    constructor(props) {
        super(props);
    }
    
    setMapElementReference(mapElementReference) {
        this.mapElement = mapElementReference;
    }
    
    componentDidMount() {
        const mapOptions = {
            zoom: 8,
            center: {
                lat: 51.5085300,
                lng: -0.1257400
            }
        };
        this.map = new google.maps.Map(this.mapElement, mapOptions);
    }

    render() {
        return (
            <div className="map" ref={this.setMapElementReference}>

            </div>
        )
    }
}

export default LocationMap;