import React from 'react';
import Flex from './style';

const FlexContainer = (props) =>{
  const getClass = () => {
    var direction = props.direction === "row" ? "row": "column",
        align = props.align === 'center' ? 'align-center' : null,
        justify = props.justify === 'end' ? 'justify-flex-end' : props.justify === 'center' ? 'justify-center' : 'justify-flex-start',
        fullWidth = props.fullWidth ? "full-width": null,
        wrap = props.wrap ? 'wrap'  : null,
        classes = [direction, align, justify, fullWidth, wrap];

        if (props.className){
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