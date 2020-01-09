import React from 'react';
import {AccordionContainer, AccordionControl} from './style';
import AccordionItem from './AccordionItem';

const Accordion = (propr) =>{
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