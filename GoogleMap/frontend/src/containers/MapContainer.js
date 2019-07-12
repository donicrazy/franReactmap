import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import { render } from 'react-dom';

const mapStyles = {
    width: '100%',
    height: '100%',
};

export class MapContainer extends Component {
    constructor(props) {
      super(props);
    }
    displayMarkers = () => {
      return this.props.positions && this.props.positions.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.lat,
         lng: store.lon,
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
      const { positions } = this.props;
      let initialCenter = {lat:-34.897768, lng:-56.164507 };
      if ( positions && positions.length !== 0 )
      {
        let total = {lat:0, lng:0};
        positions.map((val, index) => (
          total.lat += val.lat, total.lng += val.lon
        ))

        initialCenter.lat = total.lat / positions.length;
        initialCenter.lng = total.lng / positions.length;
        console.log("initial", initialCenter);
      }
      return (
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={initialCenter}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD85byw9RSga0imSUk_uGfY-4vTZ2x09kg'
})(MapContainer);
