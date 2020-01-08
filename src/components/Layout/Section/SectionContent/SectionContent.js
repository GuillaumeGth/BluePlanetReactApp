import React from 'react';
import SectionContentControl from './style'

const SectionContent = (props) =>{
    
  return (
    <SectionContentControl>      
      {props.children}
    </SectionContentControl>
  )
}

export default SectionContent;