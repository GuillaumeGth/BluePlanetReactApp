import React from 'react';
import Text from 'react-text';
import SectionContentTitleControl from './style'

const SectionContentTitle = (props) =>{
  
  return (
    <SectionContentTitleControl>
      <Text id={props.label}></Text>
    </SectionContentTitleControl>
  )
}

export default SectionContentTitle;