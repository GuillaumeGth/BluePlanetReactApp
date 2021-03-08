import Text from "react-text";
import { StyledLink, StyledALink } from "./style";
import { CSSProperties, FunctionComponent } from "react";
import React from "react";
type Propes = {
  externalLink?: boolean,
  style?: CSSProperties
  className?: string,
  to?: string,
  label?: string,
  noTranslate?: boolean,
  target?: string
}
const LinkControl: FunctionComponent<Propes> = ({
  externalLink,
  style,
  className,
  to,
  label,
  noTranslate,
  children}) => {
  if (externalLink) {
    return (
      <StyledALink
        style={style}
        target="blank"
        className={className}
        href={to}
      >
        {children}
        {noTranslate ? label : <Text id={label} />}
      </StyledALink>
    );
  }
  return (
    <StyledLink style={style} className={className} to={to}>
      {children}
      {noTranslate ? label : <Text id={label} />}
    </StyledLink>
  );
};
export default LinkControl;
