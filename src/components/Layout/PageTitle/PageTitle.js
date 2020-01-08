import React from 'react';
import FlexContainer from '../FlexContainer';
import Text from 'react-text';
import Title from './style'

const PageTitle = (props) =>{
  return (
    <FlexContainer align="center" direction="row">
      <Title><Text id={props.label} /></Title>{props.icon}
    </FlexContainer>
  )
}

export default PageTitle;