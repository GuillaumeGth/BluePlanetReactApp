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
    &.center{
      align-items: center;
      justify-content: center;
    }
    `;

  const getClass = () => {
    var direction = props.direction === "row" ? "row": "column",
        align = props.align,
        classes = [direction, align];
    return classes.join(' ');
  }
  return (
    <Flex className={getClass()}>
      {props.children}
    </Flex>
  )
}

export default FlexContainer;