import React from "react";
import {
  StyledLazyLoadImage,
  Mask,
  AccordionItemControl,
  MaskImage,
  DescContainer
} from "./style";
import LazyLoad from "react-lazy-load";
import "./accordion-item-style.css";
import Text from "react-text";

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
        <DescContainer className="desc">
          {props.fish ? (
            <span>
              <Text id={props.fish} />
            </span>
          ) : null}
          {props.fish ? (
            <span>
              <Text id={`${props.fish}Desc`} />
            </span>
          ) : null}
        </DescContainer>
      </Mask>
      <LazyLoad debounce={false}>
        <StyledLazyLoadImage
          alt={props.alt}
          effect="blur"
          src={`img/${props.src}.jpg`}
        />
      </LazyLoad>
    </AccordionItemControl>
  );
};

export default AccordionItem;
