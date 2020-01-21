import styled from "styled-components";

const SectionContentControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 100px 0 0 0;
  &.mobile {
    padding: 0;
  }
  &.full-width {
    width: 100%;
  }
`;
export default SectionContentControl;
