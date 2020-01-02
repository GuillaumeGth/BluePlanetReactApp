import React from 'react';
import styled from 'styled-components';
import Text from 'react-text';


const SectionParagraph = (props) =>{
  const TextContent = styled.div`
    margin: 10px 150px 50px 40px;
    text-align: justify;`
  return (
    <TextContent>
      <Text id={props.content}></Text>
    </TextContent>
  )
}

export default SectionParagraph;