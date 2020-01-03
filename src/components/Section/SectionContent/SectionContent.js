import React from 'react';
import styled from 'styled-components';


const SectionContent = (props) =>{
  const SectionContentControl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 0 0 0;
    `;
    
  return (
    <SectionContentControl>      
      {props.children}
    </SectionContentControl>
  )
}

export default SectionContent;