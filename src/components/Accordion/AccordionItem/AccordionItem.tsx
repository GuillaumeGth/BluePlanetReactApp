import React, { FunctionComponent, useState } from "react";
import {
  StyledLazyLoadImage,
  Mask,
  AccordionItemControl,
  MaskImage,
  DescContainer,
} from "./style";
import LazyLoad from "react-lazy-load";
import "./accordion-item-style.css";
import Text from "react-text";
type Props = {logoAlt?: string, src: string,
alt?:string,fish:string}
const AccordionItem: FunctionComponent<Props> = ({logoAlt, src, alt, fish}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <AccordionItemControl tabindex={0}>
      <Mask className="mask-container">
        {loaded && (
          <MaskImage
            className="mask-image"
            alt={logoAlt || ""}
            effect="blur"
            src={`img/icon/${src}.png`}
          />
        )}
        <DescContainer className="desc">
          {fish ? (
            <span className="acc-item-title">
              <Text id={fish} />
            </span>
          ) : null}
          {fish ? (
            <span>
              <Text id={`${fish}Desc`} />
            </span>
          ) : null}
        </DescContainer>
      </Mask>
      <LazyLoad
        onContentVisible={() => {
          setLoaded(true);
        }}
      >
        <StyledLazyLoadImage
          alt={alt || ""}        
          src={`img/${src}.jpg`}
        />
      </LazyLoad>
    </AccordionItemControl>
  );
};

export default AccordionItem;
