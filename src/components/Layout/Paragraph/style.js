import styled from "styled-components";
import { isMobile } from "react-device-detect";
const Div = styled.div`
  font-size: 1.4em;
  margin: ${isMobile ? "8" : "30"}px;
  width: 100%;
  text-align: justify;
`;
export default Div;
