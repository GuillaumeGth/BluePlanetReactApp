import styled from 'styled-components';

const AccordionContainer = styled.div`
display: flex;
width: 100%;
padding: 0 0 100px 0;`;

const AccordionControl = styled.ul`
justify-content: center;
overflow: hidden;
list-style-type: none;
display: flex;
flex-direction: row;
width: 100%;
margin: 0;
padding: 0 100px;`;

export {AccordionContainer, AccordionControl}