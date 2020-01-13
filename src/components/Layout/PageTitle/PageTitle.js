import React from 'react';
import FlexContainer from '../FlexContainer';
import Text from 'react-text';
import Title from './style'

const PageTitle = (props) =>{
  return (
    <FlexContainer align="center" direction="row" justify="center" fullWidth>
      {console.log(props.label)}
      <Title>{props.noTranslate ? props.label : <Text id={props.label} />}</Title>{props.icon}
    </FlexContainer>
  )
}

export default PageTitle;