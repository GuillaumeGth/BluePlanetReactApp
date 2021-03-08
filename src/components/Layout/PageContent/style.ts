import styled from "styled-components";
import { isMobile } from "react-device-detect";
const Content = styled.div`
  padding-top: 150px;
  max-width: ${isMobile ? "98" : "70"}%;
  margin: auto;
  display: flex;
`;
export default Content;
