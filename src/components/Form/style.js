import styled from "styled-components";
import { isBrowser } from "react-device-detect";
const SuccessMessage = styled.span`
  color: #019601;
  font-size: 1.2rem;
`;
const LoadingMask = styled.div`
  margin: 0 -20px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormControl = styled.form`
  position: relative;
  width: 100%;
  margin: ${isBrowser ? "0 40px" : "0"};
  padding: ${isBrowser ? "20px" : "10px"};
  display: flex;
  flex-direction: column;
  background: #e1e1e16b;
`;
export { FormControl, LoadingMask, SuccessMessage };
