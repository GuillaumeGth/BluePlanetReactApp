import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';



const Section = (props) =>{
  const SectionControl = styled.div`
    margin-bottom: 100px;
    display: flex;
    overflow: hidden;
  `
  return (
    <SectionControl>
      <SectionTitle label={props.title} color={props.color}></SectionTitle>
      {props.children}
    </SectionControl>
  )
}

export default Section;