import React from 'react';
import Geocode from 'react-geocode';

class LocationMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapOptions: {
                zoom: 18,
                center: {
                    lat: 37.959607,
                    lng: -122.032699
                }
            }
        };
    }

    // setMapElementReference(mapElementReference) {
    //     this.mapElement = mapElementReference;
    // }
    
    componentDidMount() {
        this.map = new google.maps.Map(this.mapNode, this.state.mapOptions);
        this.marker = new google.maps.Marker({
            position: {
                lat: this.state.mapOptions.center.lat,
                lng: this.state.mapOptions.center.lng
            },
            map: this.map
        });
        this.geocoder = new google.maps.Geocoder();
    }

    render() {
        return (
            <div className="map-container" ref={map => this.mapNode = map}>

            </div>
        )
    }
}

export default LocationMap;