import React from "react";
import {
  StyledLazyLoadImage,
  Mask,
  AccordionItemControl,
  MaskImage
} from "./style";
import "./accordion-item-style.css";

const AccordionItem = props => {
  return (
    <AccordionItemControl tabindex="0">
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
  );
};

export default AccordionItem;
