import React from 'react';
import {StyledLazyLoadImage, Mask, AccordionItemControl, MaskImage} from './style';
import './accordion-item-style.css';


const AccordionItem = (props) =>{
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
        src={`img/${props.src}.jpg`} 
        />
    </AccordionItemControl>
  )
}
AccordionItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  logoAlt: PropTypes.string,
};
export default AccordionItem;