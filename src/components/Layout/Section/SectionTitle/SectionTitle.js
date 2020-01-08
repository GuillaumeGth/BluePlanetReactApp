import React from 'react';
import Text from 'react-text';
import {Title, SectionTitleControl, SectionChevron} from './style'

const SectionTitle = (props) =>{ 
    
  return (
    <SectionTitleControl className={props.color}>      
      <Title><Text id={props.label} /></Title>            
      <SectionChevron>
        <img src="img/icon/raquo.svg" alt="chevron right"/>
      </SectionChevron>
    </SectionTitleControl>
  )
}

export default SectionTitle;