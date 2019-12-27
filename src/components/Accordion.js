import React from 'react';
import styled from 'styled-components';
import AccordionItem from './AccordionItem';

const Accordion = (propr) =>{
  const AccordionContainer = styled.div`
  display: flex;
  width: 100%;`;
  const AccordionControl = styled.ul`
    justify-content: center;
    overflow: hidden;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0;
    padding: 0;
    &:hover .mask-image {
      width: 80px;
      border-width: 3px;
    }
    `;
  return (
    <AccordionContainer>
      <AccordionControl>
        <AccordionItem src="turtle" alt="Turtle" logoSrc="" logoAlt=""/>
        <AccordionItem src="acc-ray" alt="Ray" logoSrc="" logoAlt=""/> 
        <AccordionItem src="acc-shark" alt="Shark" logoSrc="" logoAlt=""/> 
        <AccordionItem src="triggerfish" alt="Triggerfish" logoSrc="" logoAlt=""/> 
        <AccordionItem src="acc-hammerhead" alt="Hammerhead Shark" logoSrc="" logoAlt=""/> 
        <AccordionItem src="octopus" alt="Octopus" logoSrc="" logoAlt=""/> 
        <AccordionItem src="frogfish" alt="Frogfish" logoSrc="" logoAlt=""/>
        <AccordionItem src="barracuda" alt="Barracuda" logoSrc="" logoAlt=""/> 
      </AccordionControl>
    </AccordionContainer>
  )
}

export default Accordion;