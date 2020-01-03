import React from 'react';
import styled from 'styled-components';
import Text from 'react-text';

const SectionContentTitle = (props) =>{
  const SectionContentTitleControl = styled.h2`
    margin: 40px;
    font-size: 2.2rem;
  `;
  return (
    <SectionContentTitleControl>
      <Text id={props.label}></Text>
    </SectionContentTitleControl>
  )
}

export default SectionContentTitle;