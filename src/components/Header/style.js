import styled from 'styled-components';
import FlexContainer from '../Layout/FlexContainer';
const AppName = styled.div`
margin: 0 25px;
font-size: 1.2rem;
letter-spacing: 2px;`;

const HeaderControl = styled.div`  
z-index: 2;
background: rgba(0, 0, 0, .2); 
position: fixed;  
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-center: flex-start;
color: white;
transition: .5s;

&.scrolled {      
  background: white !important;
  box-shadow: 0 15px 40px -12px rgba(0, 0, 0, 0.45);
  & .menu-item-label,
    ${AppName},
    .anchor-icon {
    color: #252627 !important;
  }
}
`;
const Flag = styled.img`width: 30px; cursor: pointer !important;
margin: 0 150px;`;

const LangContainer = styled(FlexContainer)`
  margin: 0 150px !important;`;
export {AppName, HeaderControl, Flag, LangContainer}