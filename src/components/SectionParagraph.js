import React from 'react';
import styled from 'styled-components';
import SectionParagraphTitle from './SectionParagraphTitle.js';
import SectionParagraphContent from './SectionParagraphContent.js';


const SectionParagraph = (props) =>{
  const SectionParagraphControl = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    `;
  return (
    <SectionParagraphControl>
      <SectionParagraphTitle label={props.title}>
      </SectionParagraphTitle>
      <SectionParagraphContent content={props.content}>
      </SectionParagraphContent>
    </SectionParagraphControl>
  )
}

export default SectionParagraph;