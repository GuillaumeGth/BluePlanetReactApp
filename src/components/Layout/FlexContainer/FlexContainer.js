import React from 'react';
import Flex from './style';

const FlexContainer = (props) =>{
  const getClass = () => {
    var direction = props.direction === "row" ? "row": "column",
        align = props.align,
        justify = props.justify === 'end' ? 'flex-end' : 'flex-start',
        fullWidth = props.fullWidth ? "full-width": null,
        classes = [direction, align, justify, fullWidth];
        if (props.className){
          debugger;
         classes.push(props.className.split(' '));
        }
    return classes.join(' ');
  }
  return (
    <Flex className={getClass()}>
      {props.children}
    </Flex>
  )
}

export default FlexContainer;