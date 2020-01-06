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
    &.full-width{
      width: 100%;
    }
    `;

  const getClass = () => {
    var direction = props.direction === "row" ? "row": "column",
        align = props.align,
        fullWidth = props.fullWidth ? "full-width": null,
        classes = [direction, align, fullWidth];
    return classes.join(' ');
  }
  return (
    <Flex className={getClass()}>
      {props.children}
    </Flex>
  )
}

export default FlexContainer;