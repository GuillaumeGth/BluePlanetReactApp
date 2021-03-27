import styled from "styled-components";
import { Link } from "react-router-dom";

const AppName = styled.div`
  font-size: 1.5rem;
  margin: 0 25px;
  letter-spacing: 2px;
  white-space: nowrap;
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
  &.transparent ${AppName} {
    color: white !important;
  }
`;
const Flag = styled.img`
  width: 30px;
  cursor: pointer !important;
  margin: 0 20px;
`;
const SocialNetwork = styled.div`
  display: flex;
  & img {
    margin-right: 20px;
    transition: 0.4s;
  }
  ${HeaderControl}.transparent:not(.scrolled) & {
    img {
      opacity: 0;
    }
  }
`;
export { AppLink, AppName, HeaderControl, Flag, SocialNetwork };
