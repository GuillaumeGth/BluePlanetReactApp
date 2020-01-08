import React from 'react';
import SectionTitle from './SectionTitle';
import SectionControl from './style'


const Section = (props) =>{
  return (
    <SectionControl>
      <SectionTitle label={props.title} color={props.color}></SectionTitle>
      {props.children}
    </SectionControl>
  )
}

export default Section;