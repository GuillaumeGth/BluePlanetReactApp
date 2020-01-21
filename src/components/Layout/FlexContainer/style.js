import styled from "styled-components";
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  &.row {
    flex-direction: row;
  }
  &.column {
    flex-direction: column;
  }
  &.full-width {
    width: 100%;
  }
  &.justify-flex-end {
    justify-content: flex-end;
  }
  &.justify-center {
    justify-content: center;
  }
  &.wrap {
    flex-wrap: wrap;
  }
  &.align-center {
    align-items: center;
  }
`;
export default Flex;
