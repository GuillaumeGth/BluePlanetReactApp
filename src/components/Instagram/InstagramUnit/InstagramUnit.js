import React from 'react';
import styled from 'styled-components';

const InstagramUnit = (props) =>{
const getStyleAttribute = () => {
  debugger;
  var media = props.media.standard_resolution,
  width = media.width > 550 ? 550 : media.width,
  ratioWidth = width / media.width,
  height = media.height * ratioWidth;
  return {width: width,
          height: height};
}
 const Img = styled.img`
 width: 550px;`
 ;
 const Video = styled.video`
 width: 550px;`
 ;
return (<div style={getStyleAttribute()}>    
      {props.type ==='video' ? 
        <Video controls>
          <source src={props.src} />
        </Video>          
        : 
        <Img src={props.src} /> }          
      </div>);
}

export default InstagramUnit;