import styled from "styled-components";
import { isMobile } from "react-device-detect";

const SectionChevron = styled.div`
  align-self: flex-end;
  display: flex;
  background: #e5a900;
`;

const Title = styled.p`
  text-align: end;
`;

const SectionTitleControl = styled.div`
  display: flex;
  min-width: 500px;
  width: 500px;
  height: 500px;
  background: #252627;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 3px;
  cursor: pointer;
  &.mobile {
    width: auto;
    height: auto;
    min-width: auto;
    font-size: ${isMobile ? "2.7rem" : "3rem"};
    font-weight: 400;
    background: transparent;
    color: #3d5aa0 !important;
  }
  &.browser.yellow {
    background: #e5a900;
    color: white !important;
    & ${SectionChevron} {
      background: #252627;
    }
  }
  &.browser.blue {
    background: #008ae2;
    & ${SectionChevron} {
      background: #252627;
    }
  }
  &.browser.turquoise {
    background: #20c7ca;
    & ${SectionChevron} {
      background: #252627;
    }
  }
`;
export { Title, SectionTitleControl, SectionChevron };
