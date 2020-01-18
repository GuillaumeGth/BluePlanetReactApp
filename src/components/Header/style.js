import styled from "styled-components";
import FlexContainer from "../Layout/FlexContainer";
import { Link } from "react-router-dom";

const AppName = styled.div`
  font-size: 1.5rem;
  margin: 0 25px;
  letter-spacing: 2px;
`;
const AppLink = styled(Link)`
  color: #636363;
  text-decoration: none;
`;

const HeaderControl = styled.div`
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-center: flex-start;
  color: white;
  transition: 0.5s;
  box-shadow: 0 15px 40px -12px rgba(0, 0, 0, 0.45);

  &.filled {
    & .menu-item-label {
      color: #636363;
    }
    & .active .menu-item-label {
      color: white;
    }
    color: #636363;
    background: white;
  }

  &.transparent.scrolled {
    background: white !important;
    box-shadow: 0 15px 40px -12px rgba(0, 0, 0, 0.45);
    & .menu-item-label,
    ${AppName}, .anchor-icon {
      color: #252627 !important;
    }
  }
`;
const Flag = styled.img`
  width: 30px;
  cursor: pointer !important;
  margin: 0 150px;
`;

const LangContainer = styled(FlexContainer)`
  margin: 0 150px !important;
`;
export { AppLink, AppName, HeaderControl, Flag, LangContainer };
