import React from 'react';
import styled from 'styled-components';

const PageContent = (props) =>{
  const Content  = styled.div`
    padding-top: 150px;
    max-width: 70%;
    margin: auto;
    display: flex;
  `;
  return (
    <Content>
      {props.children}
    </Content>
  )
}

export default PageContent;