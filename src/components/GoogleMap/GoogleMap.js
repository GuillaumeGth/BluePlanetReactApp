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
    lat: -5.559116,
    lng: 120.240000
  }

  const zoom = 12;  
  const lat = -5.60285;
  const lng = 120.4488;
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