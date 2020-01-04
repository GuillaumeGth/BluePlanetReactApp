import React from 'react';
import styled from 'styled-components';

const FlexContainer = (props) =>{
  
  const Flex = styled.div`
    display: flex;
    &.row{
      flex-direction: row;
    }
    &.column{
      flex-direction: column;
    }
    `;

  
  return (
    <Flex className={props.direction === "row" ? "row": "column"}>
      {props.children}
    </Flex>
  )
}

export default FlexContainer;