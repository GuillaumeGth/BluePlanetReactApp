import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../FlexContainer';
import Text from 'react-text';

const PageTitle = (props) =>{
  const Title = styled.h2`
    letter-spacing: 2px;
    margin: 0 30px 0 0;
    font-size: 3.5em;
    font-weight: 300;
    color: #0d2765;`;
  return (
    <FlexContainer align="center" direction="row">
      <Title><Text id={props.label} /></Title>{props.icon}
    </FlexContainer>
  )
}

export default PageTitle;