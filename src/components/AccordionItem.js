import React, { useState } from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const AccordionItem = (props) =>{
  const [activeState, setActiveState] = useState(false);

  const StyledLazyLoadImage = styled(LazyLoadImage)`
      height: 100%;
      overflow: hidden;`;

  const MaskImage = styled(LazyLoadImage)`
    position: absolute;
    width: 150px;
    border: 5px solid white;
    padding: 10px;
    transition: .4s;
    border-radius: 50%;
    left: 18px;
    top: 120px;`;

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
    <AccordionItemControl tabindex="0" onMouseEnter={AccordionItemMouseEnterHandler}
    onMouseLeave={AccordionItemMouseLeaveHandler}
     className={activeState? "active" : ""}>
      <Mask>
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
        src={`img/${props.src}.jpg`} // use normal <img> attributes as props
        // width={image.width}
        />
      {/* <span>{image.caption}</span> */}
    </AccordionItemControl>
  )
}

export default AccordionItem;