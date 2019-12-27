import React from 'react';
import styled from 'styled-components';


const SectionContent = (props) =>{
  const SectionContentControl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    `;
    
  return (
    <SectionContentControl>      
      {props.children}
    </SectionContentControl>
  )
}

export default SectionContent;