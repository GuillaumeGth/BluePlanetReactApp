import React from 'react';
import styled from 'styled-components';
import FlexContainer from '../FlexContainer';
import Text from 'react-text';
import LinkControl from "../../Link";

const Paragraph = (props) =>{
  const Div = styled.div`
    font-size: 1.4em;
    margin: 30px;`;
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