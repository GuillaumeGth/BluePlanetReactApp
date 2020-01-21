import styled from "styled-components";
import { isMobile } from "react-device-detect";
const Title = styled.h2`
  letter-spacing: 2px;
  margin: 0 30px 0 0;
  font-size: ${isMobile ? "2.2" : "3.5"}em;
  font-weight: 300;
  color: #0d2765;
  &.subtitle {
    font-size: 2em;
    letter-spacing: 1.5px;
  }
`;
export default Title;
