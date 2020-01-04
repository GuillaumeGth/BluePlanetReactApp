import React from 'react';
import styled from 'styled-components';
import Text from 'react-text';

const SectionTitle = (props) =>{
  const SectionChevron = styled.div`
    align-self: flex-end;
    display: flex;
    background: #e5a900;`;
  const SectionTitleControl = styled.div`
    display: flex;
    min-width: 500px;
    width: 500px;
    height: 500px;
    background: #252627;
    color: white;
    justify-content: flex-end;
    align-items: center;
    font-size: 5rem;
    font-weight: 900;
    letter-spacing: 3px;
    cursor: pointer;

    &.yellow{
      background: #e5a900;
      & ${SectionChevron}{
        background: #252627;
      }
    }
    &.blue{
      background: #008ae2;
      & ${SectionChevron}{
        background: #252627;
      }
    }
    &.turquoise{
      background: #20c7ca;
      & ${SectionChevron}{
        background: #252627;
      }
    }`;
  
  const Title = styled.p`
    text-align: end;`;
    
  return (
    <SectionTitleControl className={props.color}>      
      <Title><Text id={props.label} /></Title>            
      <SectionChevron>
        <img src="img/icon/raquo.svg" alt="chevron right"/>
      </SectionChevron>
    </SectionTitleControl>
  )
}

export default SectionTitle;