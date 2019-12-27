import React from 'react';
import styled from 'styled-components';
import Text from 'react-text';


const SectionParagraphContent = (props) =>{
  const TextContent = styled.div`
    margin: 0 150px 0 40px;
    text-align: justify;`
  return (
    <TextContent>
      <Text id={props.content}></Text>
    </TextContent>
  )
}

export default SectionParagraphContent;