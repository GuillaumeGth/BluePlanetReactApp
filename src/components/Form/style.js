import styled from "styled-components";
import { isBrowser } from "react-device-detect";
const FormControl = styled.form`
  width: 100%;
  margin: ${isBrowser ? "0 40px" : "0"};
  padding: ${isBrowser ? "0 20px" : "10px"};
  display: flex;
  flex-direction: column;
  background: #e1e1e16b;
`;
export default FormControl;
