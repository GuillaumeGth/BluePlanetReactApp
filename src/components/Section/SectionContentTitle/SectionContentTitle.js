import React from 'react';
import styled from 'styled-components';
import Text from 'react-text';

const SectionContentTitle = (props) =>{
  const SectionContentTitleControl = styled.h2`
    margin: 40px;
  `;
  return (
    <SectionContentTitleControl>
      <Text id={props.label}></Text>
    </SectionContentTitleControl>
  )
}

export default SectionContentTitle;