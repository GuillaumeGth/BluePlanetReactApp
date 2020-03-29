import React from "react";
import Text from "react-text";
import { StyledLink, StyledALink } from "./style";

const LinkControl = props => {
  if (props.externalLink) {
    return (
      <StyledALink target="blank" className={props.className} href={props.to}>
        {props.noTranslate ? props.label : <Text id={props.label} />}
      </StyledALink>
    );
  }
  return (
    <StyledLink className={props.className} to={props.to}>
      {props.noTranslate ? props.label : <Text id={props.label} />}
    </StyledLink>
  );
};
export default LinkControl;
