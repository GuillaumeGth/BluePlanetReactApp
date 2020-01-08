import React from 'react';
import Div  from './style';
import FlexContainer from '../FlexContainer';
import Text from 'react-text';
import LinkControl from "../../Link";

const Paragraph = (props) =>{
  return (
    <FlexContainer align="center" direction="row">
      <Div>
        <Text id={props.label} />
        {props.link ? <LinkControl to={props.link} label={props.linkLabel} /> : null}
      </Div>
    </FlexContainer>
  )
}

export default Paragraph;