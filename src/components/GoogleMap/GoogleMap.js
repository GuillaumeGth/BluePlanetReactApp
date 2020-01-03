import React, { useState } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const GoogleMap = (props) =>{  
  const MapContainer = styled.div`
    width: 100%;
    height: 500px;`;

  const maps = {
    lat: -5.599116,
    lng: 120.449722
  }

  const zoom = 12;  
  return (
    <MapContainer>
      <GoogleMapReact        
        bootstrapURLKeys="AIzaSyDUBD-j83YUQJIKQphkz1DtWIlDkyAjrVY"
        defaultCenter={maps}
        defaultZoom={zoom}>
      </GoogleMapReact>
    </MapContainer>
  )
}

export default (GoogleMap);