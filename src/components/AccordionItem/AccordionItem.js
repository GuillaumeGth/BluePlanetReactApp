import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './accordion-item-style.css';


const AccordionItem = (props) =>{
  const StyledLazyLoadImage = styled(LazyLoadImage)`
      height: 100%;`;

  const MaskImage = styled(LazyLoadImage)`
    width: 60%;
    border: 3px solid white;
    padding: 10px;
    transition: .4s;
    border-radius: 50%;
`;

  const AccordionItemControl = styled.li`
    position: relative;
    transition: all 500ms ease;
    height: 450px;
    width: 11.5%;
    cursor: pointer;
    overflow: hidden;
    & .lazy-load-image-loaded{
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    &:hover{
      width:60% !important;
      & ${MaskImage}{
        display: none;
      }
    }`;

    const Mask = styled.div`
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;`;

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