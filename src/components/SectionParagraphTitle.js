import React from 'react';
import styled from 'styled-components';
import Text from 'react-text';

const SectionParagraphTitle = (props) =>{
  const SectionParagraphTitleControl = styled.h2`
    margin: 40px;
  `;
  return (
    <SectionParagraphTitleControl>
      <Text id={props.label}></Text>
    </SectionParagraphTitleControl>
  )
}

export default SectionParagraphTitle;