import React from 'react';
import Text from "react-text";
import StyledLink from './style';

const LinkControl = (props) =>{ 
  return (<StyledLink to={props.to}>{props.noTranslate ? props.label : <Text id={props.label}/> }</StyledLink>);
}

export default LinkControl;