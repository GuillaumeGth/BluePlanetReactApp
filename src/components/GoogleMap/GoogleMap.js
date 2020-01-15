import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import style from './style';
import Marker from './Marker';

const GoogleMap = (props) =>{  
  const MapContainer = styled.div`
    width: 100%;
    height: 500px;
    padding: 0 0 100px 0;`;
  

  const maps = {
    lat: props.lat,
    lng: props.lng
  }

  const zoom = props.zoom;  
  const lat = props.markerLat;
  const lng = props.markerLng;
  return (
    <MapContainer>
      <GoogleMapReact  
        options={{styles: style}}      
        bootstrapURLKeys={{key: "AIzaSyDUBD-j83YUQJIKQphkz1DtWIlDkyAjrVY"}}
        defaultCenter={maps}
        defaultZoom={zoom}>
          <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </MapContainer>
  )
}

export default (GoogleMap);