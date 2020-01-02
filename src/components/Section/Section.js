import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';



const Section = (props) =>{
  const SectionControl = styled.div`
    margin-bottom: 100px;
    display: flex;
  `
  return (
    <SectionControl>
      <SectionTitle label={props.title}></SectionTitle>
      {props.children}
    </SectionControl>
  )
}

export default Section;