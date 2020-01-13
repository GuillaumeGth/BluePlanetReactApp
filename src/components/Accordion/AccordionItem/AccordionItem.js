import React from 'react';
import {StyledLazyLoadImage, Mask, AccordionItemControl, MaskImage} from './style';
import './accordion-item-style.css';


const AccordionItem = (props) =>{
    const AccordionItemMouseEnterHandler = function(e)
    {
      //setActiveState(true);
    }
    const AccordionItemMouseLeaveHandler = function(e)
    {
     //setActiveState(false);
    }
    return (
    <AccordionItemControl tabindex="0" onMouseEnter={AccordionItemMouseEnterHandler} onMouseLeave={AccordionItemMouseLeaveHandler}>
      <Mask className="mask-container">
        <MaskImage
          className="mask-image"
          alt={props.logoAlt}
          effect="blur"        
          src={`img/icon/${props.src}.png`}        
          />
      </Mask>
      <StyledLazyLoadImage
        alt={props.alt}
        effect="blur"
        // height={image.height}
        src={`img/${props.src}.jpg`} 
        />
    </AccordionItemControl>
  )
}

export default AccordionItem;