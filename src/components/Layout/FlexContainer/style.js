import styled from 'styled-components';
const Flex = styled.div`
    display: flex;
    &.row{
      flex-direction: row;
    }
    &.column{
      flex-direction: column;
    }
    &.center{
      align-items: center;
      justify-content: center;
    }
    &.full-width{
      width: 100%;
    }
    &.flex-end{
      justify-content: flex-end;
    }
    `;
export default Flex