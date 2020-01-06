import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Text from "react-text";

const LinkControl = (props) =>{ 
  const StyledLink = styled(Link)`
    color: #e5a900;
    font-weight: bold;
  `;
  return (<StyledLink to={props.to}><Text id={props.label}/></StyledLink>)
}

export default LinkControl;